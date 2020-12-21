import React from 'react';
import PropTypes from 'prop-types';
// import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import './styles.css';
import Footer from './footer';
import FooterCTA from './footer-cta';

const Layout = ({ children, padTop, responsiveCollapse = false, style }) => {
  return (
    <>
      <Header />
      <main style={{ paddingTop: padTop ? '80px' : '' }}>{children}</main>
      <FooterCTA />
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
