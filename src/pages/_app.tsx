import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components';
import { NextComponentType, NextPageContext } from 'next';
import { wrapper, aloneStore } from '../redux/store';
import { apiClient } from '../services';
import {applyInterceptors} from '../helpers/interceptors';
import { themes } from '../ui/theme';
import { UserAuth } from '../components/molecules/user-auth';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css';

interface MyAppProps extends AppProps {
  Component: {
    Layout?: React.ExoticComponent<{
      children?: React.ReactNode;
    }>
  } & NextComponentType<NextPageContext, any, {}>
}
function App({ Component, pageProps }: MyAppProps) {
  applyInterceptors(aloneStore);
  const Layout = Component.Layout || React.Fragment;
  return (
      <ThemeProvider theme={themes.light}>
        <Layout>
          <UserAuth>
            <Component {...pageProps} />
          </UserAuth>
        </Layout>
      </ThemeProvider>
  )
}
export default wrapper.withRedux(App);
