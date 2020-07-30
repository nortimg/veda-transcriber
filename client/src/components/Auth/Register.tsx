import React from 'react'
import { Typography, TextField, Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { Form } from '../Form'
import { FullHeightCard } from '../FullHeightCard'
import { FullHeightGrid } from '../FullHeightGrid'
import { connect } from 'react-redux'
import { IState, textInputHandler, IUseTextInputProps } from '../../redux/redux.helpers'
import { IRegisterState, IAuthAction } from '../../redux/auth/auth.helpers'
import { register } from '../../redux/auth/auth.actions'
import { useTextInput } from '../../hooks/input.hook'

interface IRegisterProps extends IRegisterState, IUseTextInputProps {
    register: (payload: IRegisterState) => IAuthAction<IRegisterState>
}

const Register: React.FC<IRegisterProps> = props => {
    // TODO: Check password repeating

    const submitHander = (event: React.FormEvent) => {
        event.preventDefault()
        const { email, name, nickname, password } = props
        props.register({ email, name, nickname, password })
    }


    const inputHandler = useTextInput('AUTH/REGISTER/TEXT_INPUT', props)

    return (
        <FullHeightCard>
            <Typography
                variant="h5"
                align="center"
            >
                Войдите или зарегистрируйтесь
                </Typography>

            <FullHeightGrid
                container
                justify="center"
                alignContent="space-between"
            >
                <Form onSubmit={submitHander}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Ваше кармическое ФИО"
                            name="name"
                            onInput={inputHandler}
                        />
                    </Grid>
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
                            label="Никнейм / Духовное имя (на латинице)"
                            name="nickname"
                            onInput={inputHandler}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Придумайте пароль"
                            type="password"
                            name="password"
                            onInput={inputHandler}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Повторите пароль"
                            type="password"
                            name="repeatPassword"
                            onInput={inputHandler}
                        />
                    </Grid>
                    <Grid container justify="space-between">
                        <Grid item>
                            <Link to="/login">
                                <Button
                                    variant="contained"
                                >
                                    Войти
                                    </Button>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Зарегистрироваться
                                </Button>
                        </Grid>
                    </Grid>
                </Form>
            </FullHeightGrid>
        </FullHeightCard>
    )
}

const mapStateToProps = (state: IState): IRegisterState => state.auth.register
const mapDispatchToProps = {
    register,
    textInputHandler
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)