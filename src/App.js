import "./App.css";
import Footer from "./component/Footer";
import Headerss from "./component/Headerss";
import Haeder from "./component/UserPages.js/Header";
import Sidebar from "./component/UserPages.js/Sidebar";
import Router, { AppRoutes } from "./Router";


function App() {

  const check = true;
  if (check) {
    return (
      <>
        <Headerss />
        <Router />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <div>
          <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <Haeder />
                <div className="container-fluid">
                  <AppRoutes />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

}

export default App;
