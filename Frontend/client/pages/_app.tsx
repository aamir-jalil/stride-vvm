import {NextPageWithLayout} from '../types/PageWithLayout.d';
import React from 'react';

type Props = {
  Component: NextPageWithLayout
  pageProps: any // this any type is from the `import { AppProps } from 'next/app'`
}

function MyApp({ Component, pageProps }: Props): React.ReactElement {
  const getLayout = Component.getLayout || ((page: any) => page);
  return getLayout(<Component {...pageProps} />);
}
export default MyApp;