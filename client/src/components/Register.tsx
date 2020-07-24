import React from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import { Typography, TextField, Grid, Button } from '@material-ui/core';

interface IRegisterProps { }

const Form = styled.form`
    display: flex;
    flex-direction: column; 
    justify-content: space-around;
    max-width: 370px;
    width: 100%;
    height: 100%;
`

const FullHeightCard = styled(Card) <{ elevation: string | number }>`
    display: flex;
    flex-direction: column;
    height: 80vh;
    width: 90%;
    padding: 20px 0 50px 0;
`

const FullHeightGrid = styled(Grid)`
    max-height: 100%;
    height: auto;
    margin-top: auto;
    margin-bottom: 0;
    flex-grow: 3; 
`

export const Register: React.FC<IRegisterProps> = () => {
    return (
        <>
            <FullHeightCard elevation={15}>
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
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="E-mail"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Никнейм / Духовное имя (на латинице)"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Придумайте пароль"
                                type="password"
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
                                <Button
                                    variant="contained"
                                >
                                    Войти
                                </Button>
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
        </>
    )
}