import React, {useState} from "react";
import "./App.scss";
import { SearchResults, SearchFacets } from "./components";

let App = () => {

    const [facet, setFacet] = useState(false);
  return (
    <div className="main">
      <SearchFacets changeFacet={(facet) => setFacet(facet)} />
      <SearchResults facet={facet}/>
    </div>
  );
};

export default App;
