import "./App.css";
import Footer from "./component/Footer";
import Headerss from "./component/Headerss";
import Router, { AppRoutes } from "./Router";


function App() {

  const check = true;
  if (check){
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
      <AppRoutes />
      </>
    )
  }
  
}

export default App;
