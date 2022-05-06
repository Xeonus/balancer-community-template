import React, { useState, useMemo } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import { isBrowser, isMobile } from 'react-device-detect';
import Container from "@mui/material/Container";
import { Box, Drawer } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../UI/Footer'
import BalancerLogo from './../../resources/logo-dark.svg';
import BalancerLogoLight from './../../resources/logo-light.svg';
import NavBar from "./NavBar";
import { myStyles } from '../../styles/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuDrawer from './MenuDrawer/MenuDrawer';
import Home from './../pages/home/Home';
import Notion from '../pages/notion/Notion';
import MUIExamples from '../pages/examples/MUIExamples';


//Toggle color mode -> light, dark mode
const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

export default function Dashboard() {

    //Theme properties set once at dashboard level
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light');
    const [open, setOpen] = useState(false);
    const mainPrimaryColor = (mode === 'dark') ? "#ffffff" : "#111";
    const mainSecondaryColor = "#ffffff";
    const backgroundColor = (mode === 'dark') ? "#091027" : "#fafafa";
    const paperColor = (mode === 'dark') ? "#162031" : "#fff";
    const anchor = 'left';

    //Color mode properties
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
                
            },
        }),
        [],
    );

    //Drawer logic
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    //Theme initialization
    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: {
                        main: mainPrimaryColor
                    },
                    secondary: {
                        main: mainSecondaryColor
                    },
                    background: {
                        default: backgroundColor,
                        paper: paperColor
                    },
                    typography: {
                        // Use the system font instead of the default Roboto font.
                        fontFamily: [
                            'Inter-Variable',
                            '-apple-system',
                            'BlinkMacSystemFont',
                            'Segoe UI',
                            'Helvetica',
                            'Arial',
                            'sans-serif',
                            'Apple Color Emoji',
                            'Segoe UI Emoji',
                        ].join(','),
                    },
                },
            }),
        [mode, mainPrimaryColor, mainSecondaryColor, backgroundColor, paperColor],
    );





    //Load global Styles
    const classes = myStyles();

    return (
        <StyledEngineProvider injectFirst>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme} >
                <Box
                        sx={{
                            display: 'flexStart',
                            flexDirection: 'column',
                            minHeight: '85vh',
                        }}
                    >
                    <AppBar position="static" color={"secondary"} background="transparent" style={{ margin: -0 }} >
                        <Toolbar className={classes.toolBar}>
                            <Box display="flex" alignItems="center" >

                                <Box>
                                    <img src={(mode === 'dark') ? BalancerLogo : BalancerLogoLight} alt="Balancer Logo" width="30" />
                                </Box>
                                {isBrowser ?
                                    <Box ml={1}>
                                        <Typography variant="h6" className={classes.root} key="appTitle">
                                            Balancer Community
                                        </Typography>

                                    </Box> : null}
                                <Typography ml={1} mr={2} variant="caption">Template</Typography>
                            </Box>
                            {isBrowser ?
                                <Box display="flexStart" alignItems="center" justifyContent="center" flexGrow={1}>
                                    <Box alignItems="center" justifyContent="center">
                                        <NavBar classes={classes} />
                                    </Box>
                                </Box> : null}
                            <Box display="flex" alignItems="center" justifyContent='flex-end' flexGrow={isMobile ? 1 : null}>
                                <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                                </IconButton>
                                {isMobile ?
                                    <IconButton sx={{ ml: 1 }} onClick={handleDrawerOpen} color="inherit">
                                        {theme.palette.mode === 'dark' ? <MenuIcon /> : <MenuIcon />}
                                    </IconButton> : null}
                                <Drawer
                                    anchor={anchor}
                                    open={open}
                                    onClose={handleDrawerClose}
                                >
                                    <MenuDrawer anchor={anchor} toogleDrawer={handleDrawerClose}></MenuDrawer>
                                </Drawer>
                            </Box>
                        </Toolbar>
                    </AppBar>
                    <CssBaseline />
                    <Container className={classes.container}  >
                        <Grid item xs="auto" component="span">
                            <Routes>
                                <Route path="/" element={<Navigate replace to="/home" />} />
                                <Route path="home" element={<Home classes={classes} darkState={(mode === 'dark') ? true : false} />} />
                                <Route path="notionIntegration" element={<Notion classes={classes} darkState={(mode === 'dark') ? true : false} />} />
                                <Route path="examples" element={<MUIExamples classes={classes} darkState={(mode === 'dark') ? true : false} />} />
                                <Route path='balancerTools' component={() => {
                                    window.location.href = 'https://balancer.tools/';
                                    return null;
                                }} />
                            </Routes>
                        </Grid>
                    </Container>
                    </Box>
                    <Box
                        component="footer"
                        sx={{
                            py: 2,
                            px: 2,
                            mt: 'auto',
                            minHeight: '15vh',
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'light'
                                    ? theme.palette.grey[200]
                                    : theme.palette.grey[800],
                        }}
                    >
                        <Container className={classes.container}>
                            <Grid item xs={12} component="span" flex="1">
                                    <Footer className={classes.footer}></Footer>
                            </Grid>
                        </Container>
                    </Box>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </StyledEngineProvider>
    );
};