import {Typography} from '@material-ui/core';
import {getApplyLayout} from '../../components/ApplyLayout';
import React from 'react';
import {NextPageWithLayout} from '../../types/PageWithLayout.d';

function TitleIV(): React.ReactElement {
  // @todo
  return (
    <React.Fragment>
      <Typography variant="h1">Tell us about your program</Typography>
      <Typography variant="subtitle1">Let us know where you are thinking your next move will be.</Typography>
    </React.Fragment>
  );
}

TitleIV.getLayout = getApplyLayout;
const TitleIVPage: NextPageWithLayout = TitleIV;
export default TitleIVPage;