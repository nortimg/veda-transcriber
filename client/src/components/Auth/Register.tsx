import React from 'react'
import { Typography, TextField, Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { Form } from '../Form'
import { FullHeightCard } from '../FullHeightCard'
import { FullHeightGrid } from '../FullHeightGrid'
import { connect } from 'react-redux'
import { IState, IAction, textInputHandler, ITextInputHandlerPayload } from '../../redux/redux.helpers'
import { IRegisterState, IRegisterAction } from '../../redux/auth/auth.reducer'
import { register } from '../../redux/auth/auth.actions'

interface IRegisterProps extends IRegisterState {
    register: (payload: IRegisterState) => IRegisterAction
    textInputHandler: (payload: ITextInputHandlerPayload) => IAction
}

const Register: React.FC<IRegisterProps> = props => {
    const submitHander = (event: React.FormEvent) => {
        event.preventDefault()
        console.log('SUBMIT')
        // props.register({
        // })
    }

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        const { value } = event.target
        props.textInputHandler({
            [event.target.name]: value
        })
    }

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

const mapStateToProps = (state: IState): IRegisterState => state.auth
const mapDispatchToProps = {
    register, 
    textInputHandler
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)