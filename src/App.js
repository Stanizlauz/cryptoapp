import { Toaster } from "react-hot-toast";
import "./App.css";
import { getToken } from "./Auth/HandleJWT";
import configureInterceptor from "./Auth/httpInterceptor";
import Router, { AppRoutes } from "./Utils/Router";

configureInterceptor()
function App() {
  const loggedin = getToken();
  console.log({ loggedin })
  if (loggedin?.length === 0) {
    return (
      <>
        {/* <Headerss /> */}
        <Router />
        <Toaster position="top-center"
          reverseOrder={true}
           />
        {/* <Footer /> */}
      </>
    );
  } else {
    //dashboard
    return (
      <>
        <AppRoutes />
        <Toaster position="top-center"
          reverseOrder={true} />
      </>
    )
  }

}

export default App;
