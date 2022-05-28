import React, { useEffect } from "react";
import cookies from "next-cookies";
import Router from "next/router";
const login = "/login";
export default (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.getInitialProps = async (context) => {
    console.log(context);
    let dataCookie = cookies(context);
    if (!dataCookie?.token) {
      if (context.tes) {
        context.res?.writeHead(302, {
          location: login,
        });
        context.res?.end();
      } else {
        Router.replace(login);
      }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedComponent = await WrappedComponent.getInitialProps({
        ...context,
        auth: dataCookie,
      });
      return { ...wrappedComponent, dataCookie };
    }
    return dataCookie;
  };
  return hocComponent;
};
