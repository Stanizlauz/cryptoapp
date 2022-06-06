import "./App.css";
import Footer from "./component/Footer";
import Headerss from "./component/Headerss";
import Router, { AppRoutes } from "./Router";


function App() {
  const loggedin = true;
  if (!loggedin) {
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
