import React, { useEffect } from 'react'
import styled from 'styled-components'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { connect } from 'react-redux'

import ProjectPreview from '../components/Project/ProjectPreview'
import { IState } from '../redux/redux.helpers'
import { IProjectsState, IProjectsAction } from '../redux/projects/projects.helpers'
import { fetchProjects } from '../redux/projects/projects.actions'
import { IProjectState } from '../redux/project/project.helpers'



interface IProjectPageProps {
    fetchProjects: () => IProjectsAction
    list: IProjectState[]
}

// TODO: move all common styled components into one file
const Wrapper = styled.section``

const ProjectPage: React.FC<IProjectPageProps> = props => {
    useEffect(() => {
        props.fetchProjects()
    }, [])

    const projects = props.list.map((p: IProjectState, i: number) => (
        <ListItem>
            <ProjectPreview {...p} key={i} />
        </ListItem>
    ))

    return (
        <Wrapper>
            <List>
                {projects}
            </List>
        </Wrapper>
    )
}

const mapStateToProps = (state: IState): IProjectsState => state.projects
const mapDispatchToProps = {
    fetchProjects
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage)