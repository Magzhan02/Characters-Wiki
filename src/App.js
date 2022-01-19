import React from "react";
import { Route, Routes} from "react-router-dom";
import axios from "axios"

import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header"; 
import Search from "./components/Search/Search";
import Card from "./components/Card/Card";

import Episode from "./page/Episode";
import Location from "./page/Location";

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="episode" element={<Episode/>}/>
      <Route path="location" element={<Location/>}/>
    </Routes>
    </>
  );
}

function Home(){

  const [search,setSearch] = React.useState("");
  const [gender,setGender] = React.useState("");
  const [species,setSpecies] = React.useState("");
  const [status,setStatus] = React.useState("");
  const [pageNumber, setPageNumber] = React.useState(1);
  const [fetchData, setFetchData] = React.useState([]);
  const [pageCount, setPageCount] = React.useState(null);

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  async function getData(){
    let {data} = await axios.get(api);
    setFetchData(data.results);
    setPageCount(data.info.pages)
  }
  console.log(pageCount)

  React.useEffect(() => {
    getData();
  },[api])

  return(
    <div>
      <Search setSearch={setSearch}/>
      <div className="container">
        <div className="filter-block">
          <Filter 
         setGender={setGender}
         setSpecies={setSpecies} 
         setStatus={setStatus}
         />
        </div>
        <div className="card-block">
        {fetchData.length > 0 &&
          fetchData.map((obj) => (
            <Card {...obj} key={obj.id} />
          ))
        }
        </div>
      </div>
    </div>
  );
}


export default App;
