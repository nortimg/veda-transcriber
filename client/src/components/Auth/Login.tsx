import React from 'react'
import { Typography, TextField, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { Form } from '../Form'
import { FullHeightCard } from '../FullHeightCard'
import { FullHeightGrid } from '../FullHeightGrid'

interface ILoginProps { }

export const Login: React.FC<ILoginProps> = () => {
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
                <Form>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Ваше кармическое ФИО"
                            name="name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="E-mail"
                            name="email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Никнейм / Духовное имя (на латинице)"
                            name="nickname"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Придумайте пароль"
                            type="password"
                            name="password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Повторите пароль"
                            type="password"
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