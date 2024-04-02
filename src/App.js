import "./App.css";
import { useContext } from "react";
import ResumeView from "./Pages/ResumeView";
import ResumeCreate from "./Pages/ResumeCreate";
import AppProvider from "./Context/AppProvider";
import AppContext from "./Context/AppContext";


function App() {
  return (
    <AppProvider>
    <div className="App">
      <div>
        <ResumeCreate />
      </div>
      {/* <div className="view">
        <ResumeView />
      </div> */}
    </div>
    </AppProvider>
  );
}

export default App;
