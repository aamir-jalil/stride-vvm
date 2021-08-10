import React from 'react';
import {AppBar, Box, Container, CssBaseline, Link, makeStyles, MuiThemeProvider, Toolbar} from '@material-ui/core';
import Image from 'next/image';
import Footer from './Footer';
import {WrapperProps} from '../types/WrapperProps';
import theme from '../styles/theme';
import logoPic from '../public/stride-logo.png';
// @todo solve conflicts with single/double quotes in imports

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  main: {
    marginBottom: '12px',
    textAlign: 'center'
  },
  footer: {
    marginTop: 'auto'
  }
});

export default function ApplyLayout({children}: WrapperProps): React.ReactElement {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline/>
      <Box className={classes.root}>
        <Box component="main" className={classes.main}>
          <AppBar position="sticky" color="default">
            <Container>
              <Toolbar>
                <Link href="/">
                  <Image src={logoPic} alt="Stride"/>
                </Link>
                {/*<Stepper/>*/}
                {/*<Link href="/">Save & Exit</Link>*/}
              </Toolbar>
            </Container>
          </AppBar>
          <Container>
            {children}
          </Container>
        </Box>
        <Box component="footer" className={classes.footer} bgcolor="grey.A700" py={1.25}>
          <Footer/>
        </Box>
      </Box>
    </MuiThemeProvider>
  );
}

export const getApplyLayout = (page: React.ReactElement): React.ReactElement => <ApplyLayout>{page}</ApplyLayout>;