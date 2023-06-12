import { Endpoint } from "src/types"
import { Container, MenuItem, Select, Stack, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"

function Settings(){
    const {t, i18n} = useTranslation('settings')
    return (
        <Container>
            <Typography variant="h2">
                {t('title')}
            </Typography>
            <hr/>
            <Stack direction="row">
                <Typography variant="body1" mr={2}>
                    {t('language')}
                </Typography>
                <Select
                    value={i18n.language}
                    onChange={({target: {value}}) => {
                        i18n.changeLanguage(value)
                        localStorage.setItem('lang', value)
                    }}
                >
                    <MenuItem value={'ru'}>RU</MenuItem>
                    <MenuItem value={'en'}>EN</MenuItem>
                </Select>
            </Stack>
           
        </Container>
    )
}

export const SettingsEnpoint: Endpoint = {
    Component: Settings,
    path: '/settings'
}