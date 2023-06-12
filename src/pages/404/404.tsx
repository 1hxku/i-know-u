import { Grid, Typography } from "@mui/material"
import { Endpoint } from "src/types"

function Page404(){
    return (
        <Grid container>
            <Grid item sm={12} md={6}>
                <Typography variant="h1" mx={'auto'}>
                    404
                </Typography>
            </Grid>
        </Grid>
    )
}

export const NotFoundPageEndpoint: Endpoint = {
    path: '/404',
    Component: Page404
}