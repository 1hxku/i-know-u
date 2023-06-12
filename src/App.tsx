import 'src/App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from 'src/components';
import { publicEndpoints } from 'src/endpoints';
import { NotFoundPageEndpoint } from 'src/pages/404';
import { Grid } from '@mui/material';

export function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Grid container justifyContent={'center'} sx={{marginTop: '15px'}}>
        <Grid item sm={12} md={6}>
          <Routes>
            {
              publicEndpoints.map(
                (endpoint) => (
                  <Route 
                    path={endpoint.path} 
                    element={<endpoint.Component/>}
                  />
                )
              )
            }
            <Route path={NotFoundPageEndpoint.path} element={<NotFoundPageEndpoint.Component/>} />
            <Route path="*" element={<Navigate replace to={NotFoundPageEndpoint.path} />} />
          </Routes>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
}
