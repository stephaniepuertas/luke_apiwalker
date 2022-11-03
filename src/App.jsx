import Search from "./components/Search";
import React from "react";
import { Routes, Route } from "react-router-dom";
import PeopleView from "./views/PeopleView";
import PlanetsView from "./views/PlanetsView";

function App() {
  return (
  <>
  <Search/>
  <Routes>
    <Route path= '/people/:people_id' element= {<PeopleView/>} />
    <Route path= '/planets/:planet_id' element= {<PlanetsView/>} />
  </Routes> 
  </>
  );
}

export default App;
