import React, { useState, Fragment } from "react";
import Head from "next/head";

import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Footer from "./footer/Footer";
import Search from "./search/Search";

import HeaderTwo from "./header/HeaderTwo";

type layoutProps = {
  children: React.ReactNode;
  meta: Object;
  header: React.ReactNode;
  footer: React.ReactNode;
  sidebar: React.ReactNode;
  bodyClass: any;
};

const Layout = ({
  children,
  meta,
  header,
  sidebar,
  footer,
  bodyClass,
}: layoutProps) => {
  const Meta = {
    title: "CA - Chartered Accountant",
    ...meta,
  };

  const [searchToggle, setSearchToggle] = useState(false);

  const handleSearch = () => {
    setSearchToggle(!searchToggle);
  };

  const closeSearch = () => {
    setSearchToggle(false);
  };

  const [sidebarToggle, setSidebarToggle] = useState(false);

  const handleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };

  const closeSidebar = () => {
    setSidebarToggle(false);
  };

  return (
    <Fragment>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href="/images/favicon.png"
          type="image/x-icon"
        />
        <title>{Meta.title}</title>
        <meta name="keywords" content="attax, tax, advisor" />
        <meta name="description" content="Tax Advisor React Template" />
      </Head>

      <div
        className={
          (bodyClass === 0
            ? " bg-light2"
            : bodyClass === 1
            ? " bg-light"
            : null) + " app"
        }
      >
        <Search
          handleSearch={handleSearch}
          closeSearch={closeSearch}
          searchToggle={searchToggle}
        />
        <HeaderTwo handleSearch={handleSearch} />
        {sidebar ? (
          <Sidebar sidebarToggle={sidebarToggle} closeSidebar={closeSidebar} />
        ) : null}
        <main>{children}</main>
        {footer ? <Footer /> : null}
      </div>
    </Fragment>
  );
};

export default Layout;
