import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import stores from "../stores";
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  const { store, persistor } = stores;
  return (
    <PersistGate store={store} persistor={persistor}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </PersistGate>
  );
}

export default MyApp;
