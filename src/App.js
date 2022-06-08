import "./App.css";
import { getToken } from "./Auth/HandleJWT";
import configureInterceptor from "./Auth/httpInterceptor";
import Router, { AppRoutes } from "./Router";

configureInterceptor()
function App() {
  const loggedin = getToken();
  console.log({loggedin})
  if (loggedin?.length === 0) {
    return (
      <>
        {/* <Headerss /> */}
        <Router />
        {/* <Footer /> */}
      </>
    );
  } else {
    //dashboard
    return (
      <>
        {/* <div>
          <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <Header />
                <div className="container-fluid"> */}
        <AppRoutes />
        {/* </div>
              </div>
            </div>
          </div>
        </div> */}
      </>
    )
  }

}

export default App;
