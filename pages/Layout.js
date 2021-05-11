import React, { Component } from 'react';
import Head from 'next/head';
// import Header from './Header';
// import Footer from './Footer/Footer';

export default class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>

        {children}

        <div className="h-0" id="modal-root"></div>
      </>
    );
  }
}
