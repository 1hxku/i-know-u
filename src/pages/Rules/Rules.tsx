import { Avatar, Button, Card, CardActions, CardContent, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import QuizIcon from '@mui/icons-material/Quiz';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { Endpoint } from "src/types";
import { useTranslation } from "react-i18next";



function Rules(){
    const {t} = useTranslation('rules')
    const rulesList: {text: string, avatar?: React.ReactNode}[] = [
        {
            text: t('steps.registration'),
            avatar: <AppRegistrationIcon/>
        },
        {
            text: t('steps.makingAnswers'),
            avatar: <QuizIcon/>
        },
        {
            text: t('steps.passage'),
            avatar: <QuestionAnswerIcon/>
        },
        {
            text: t('steps.results'),
            avatar: <AssignmentTurnedInIcon/>
        },
    ]
    return (
        <Card sx={{
            color: 'white',
            backgroundColor: 'rgba(220,220,220,.2)',
            backdropFilter: 'blur(2px)'
        }}>
            <CardContent>
                <Typography variant="h2" gutterBottom>
                    {t('gameRules')}:
                </Typography>
                <List>
                    {rulesList.map(({text, avatar}) => ( 
                        <ListItem>
                            {avatar && <ListItemAvatar>
                                <Avatar>
                                {avatar}
                                </Avatar>
                            </ListItemAvatar>
                            }
                            <ListItemText
                                primary={<Typography variant="h5">{`${avatar ? '' : '-'} ${text}`}</Typography>}
                            />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
            <CardActions>
                <Button size="large" variant="contained">
                    {t('startTesting')}
                </Button>
            </CardActions>
        </Card>
    )
}

export const RulesEnpoint: Endpoint = {
    Component: Rules,
    path: '/rules'
}