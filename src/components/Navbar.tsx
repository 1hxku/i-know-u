import { Button,  Grid, IconButton, styled} from '@mui/material'
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MainEndpoint, RulesEnpoint, SettingsEnpoint } from 'src/pages';
import SettingsIcon from '@mui/icons-material/Settings';

const NavButton = styled(Button)({
    my: 2, 
    // color: 'white', 
    display: 'block'
})

export function Navbar(){
    const {t} = useTranslation('navbar')
    const navigate = useNavigate()
    return (
        <Grid container justifyContent={'center'}>
            <Grid item sm={12} md={6} gap={2} direction={'row'} display={'flex'} mt={2}>
                <NavButton onClick={() => navigate(MainEndpoint.path)} variant='outlined'>
                    {t('main')}
                </NavButton>
                <NavButton onClick={() => navigate(RulesEnpoint.path)} variant='outlined'>
                    {t('rules')}
                </NavButton>
                
                <IconButton aria-label="delete" size="large" onClick={() => navigate(SettingsEnpoint.path)} >
                    <SettingsIcon fontSize="inherit" />
                </IconButton>
                    
            </Grid>
        </Grid>
    )
}