import {Typography} from '@material-ui/core';
import {getApplyLayout} from '../../components/ApplyLayout';
import React from 'react';
import {NextPageWithLayout} from '../../types/PageWithLayout.d';

function AltEd(): React.ReactElement {
  // @todo
  return (
    <React.Fragment>
      <Typography variant="h1">Alt Ed</Typography>
    </React.Fragment>
  );
}

AltEd.getLayout = getApplyLayout;
const AltEdPage: NextPageWithLayout = AltEd;
export default AltEdPage;