import React, { useState, useMemo, useEffect } from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import { IState, IAction } from '../redux/redux.helpers'
import { IProjectState, ProjectAction, IProjectAction } from '../redux/project/project.helpers'
import { Menu, MenuItem, Grid, Button } from '@material-ui/core'
import { createEmbedYTVideo } from '../utils/YTEmbed'
import { getProject } from '../redux/project/project.actions'
import { getIDfromURL } from '../utils/getIDfromURL'


interface IProjectPageProps extends IProjectState {
    getProject: (id: string) => IAction<ProjectAction>
}

const Wrapper = styled.section``

const YTVideo = styled.iframe`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    object-fit: cover;
`

const LectureAudio = styled.audio`
    display: block;
    width: 100%;


`

interface IProjectPageLocalState {
    versionMenu: {
        isOpen: boolean,
        anchorEl: HTMLButtonElement | null
    }
}


const ProjectPage: React.FC<IProjectPageProps> = props => {
    const [state, setState] = useState<IProjectPageLocalState>({
        versionMenu: {
            isOpen: false,
            anchorEl: null
        }
    })

    const openVersionMenuHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setState({
            ...state,
            versionMenu: {
                ...state.versionMenu,
                isOpen: true,
                anchorEl: event.currentTarget
            }
        })
    }

    const closeVersionMenuHandler = () => {
        setState({
            ...state,
            versionMenu: {
                ...state.versionMenu,
                isOpen: false,
                anchorEl: null
            }
        })
    }

    const versions = props.versions.map(v => (
        <MenuItem>
            {v.title}
        </MenuItem>
    ))

    const PreviewWrapper = styled.div`
        width: 100%;
        position: relative;
        padding: 25% 0; 
    `

    const Preview = useMemo(() => {
        if (props.sources.youtube) {
            return (
                <PreviewWrapper>
                    <YTVideo
                        src={createEmbedYTVideo(props.sources.youtube as string)}
                    />
                </PreviewWrapper>
            )
        } else {
            return (
                <PreviewWrapper>
                    <img src={props.teacher.imageURL} />
                </PreviewWrapper>
            )
        }
    }, [props.sources.youtube])


    useEffect(() => {
        const id = getIDfromURL()
        props.getProject(id)
    }, [])

    return (
        <Wrapper>
            <Grid
                container
                justify="space-between"
            >
                <Grid
                    container
                    item
                    xs={7}
                    justify="space-between"
                >
                    <Grid
                        item
                        xs={10}
                    >
                        <Typography
                            variant="h4"
                        >
                            {props.title}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={2}
                    >
                        <Button
                            onClick={openVersionMenuHandler}
                            color="default"
                            variant="contained"
                        >
                            version
                        </Button>
                        <Menu
                            anchorEl={state.versionMenu.anchorEl}
                            id="versions-menu"
                            open={state.versionMenu.isOpen}
                            onClose={closeVersionMenuHandler}
                        >
                            {versions}
                        </Menu>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            {props.text}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    item
                    xs={5}
                    justify="flex-end"
                >
                    {Preview}
                    <LectureAudio
                        src={props.sources.audio}
                        controls
                    />
                </Grid>
            </Grid>
        </Wrapper>
    )
}

const mapStateToProps = (state: IState) => state.project
const mapDispatchToProps = {
    getProject
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage)