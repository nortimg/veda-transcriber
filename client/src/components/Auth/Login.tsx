import React from 'react'
import { Typography, TextField, Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom';

import { Form } from '../Form'
import { FullHeightCard } from '../FullHeightCard'
import styled from 'styled-components'
import { ILoginState, ILoginAction } from '../../redux/auth/auth.helpers'
import { connect } from 'react-redux'
import { IState, textInputHandler } from '../../redux/redux.helpers'
import { login } from '../../redux/auth/auth.actions'
import { useTextInput } from '../../hooks/input.hook'
import { IUseTextInputProps } from '../../helpers';

interface ILoginProps extends ILoginState, IUseTextInputProps {
    login: (payload: ILoginState) => ILoginAction
}

const HalfHeightGrid = styled(Grid)`
    height: 50%;
`

const Login: React.FC<ILoginProps> = props => {

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        const { email, password } = props
        props.login({ email, password })
    }

    const inputHandler = useTextInput('AUTH/LOGIN/TEXT_INPUT', props)

    return (
        <FullHeightCard>
            <Typography
                variant="h5"
                align="center"
            >
                Войдите или зарегистрируйтесь
                </Typography>

            <HalfHeightGrid
                container
                justify="center"
                alignContent="space-between"
            >
                <Form onSubmit={submitHandler}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="E-mail"
                            name="email"
                            onInput={inputHandler}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Введите пароль"
                            type="password"
                            name="password"
                            onInput={inputHandler}
                        />
                    </Grid>
                    <Grid container justify="space-between">
                        <Grid item>

                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Войти
                                </Button>

                        </Grid>
                        <Grid item>
                            <Link to="/register">
                                <Button
                                    variant="contained"
                                >
                                    Зарегистрироваться
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Form>
            </HalfHeightGrid>
        </FullHeightCard>
    )
}

const mapStateToProps = (state: IState): ILoginState => state.auth.login
const mapDispatchToProps = {
    login,
    textInputHandler
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)