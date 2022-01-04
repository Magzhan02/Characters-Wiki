import React from "react";
import { Route, Routes} from "react-router-dom";
import Filter from "./components/Filter/Filter";

import Header from "./components/Header/Header"; 
import Search from "./components/Search/Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  );
}

function Home(){
  const [search,setSearch] = React.useState("");
  const [gender,setGender] = React.useState("");
  const [species,setSpecies] = React.useState("");
  const [status,setStatus] = React.useState("");

  return(
    <div>
      <Header/>
      <Search setSearch={setSearch}/>
      <Filter 
       setGender={setGender}
       setSpecies={setSpecies} 
       setStatus={setStatus}/>
    </div>
  );
}


export default App;
