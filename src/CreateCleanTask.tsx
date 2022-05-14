import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import BasicSelect from './User_urgency_select';



const mdTheme = createTheme();

function CreateTask() {
    return (
        <ThemeProvider theme={mdTheme}>
            <Grid item xs={3}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                    <BasicSelect />
                                </Paper>
            </Grid>
        </ThemeProvider>
    );
}

export default function CreateCleanTask() {
    return <CreateTask />;
}