import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import { IProjectState } from '../../redux/project/project.helpers'


interface IProjectPreviewProps extends IProjectState { }

const ProjectPreview: React.FC<IProjectPreviewProps> = props => {

    // TODO: make a better UI mockup for project preview and projects list
    return (
        <Card>
            <CardContent>
                <Typography>
                    {props.title}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ProjectPreview