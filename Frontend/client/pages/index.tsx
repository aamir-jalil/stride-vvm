import {Box, Button, Typography} from '@material-ui/core';
import React from 'react';
import {getApplyLayout} from '../components/ApplyLayout';
import {NextPageWithLayout} from '../types/PageWithLayout.d';

function Home(): React.ReactElement {
  return (
    <React.Fragment>
      <Typography variant="h1">Paying for school has never been this easy.</Typography>
      <Typography variant="subtitle1">Get a personalized rate. Compare your payment options.</Typography>
      <Box mt={4}>
        <Button variant="contained" href="/program-type" color="primary">Find Your ISA</Button>
      </Box>
    </React.Fragment>
  );
}

Home.getLayout = getApplyLayout;
const HomePage: NextPageWithLayout = Home;
export default HomePage;