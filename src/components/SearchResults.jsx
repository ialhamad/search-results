import React, { useState } from "react";
import { FirestoreCollection } from "react-firestore";
import { ResultsItem } from "./ResultsItem";
import { ResultsHeader } from "./ResultsHeader";
import ResultLoader from "./ResultLoader";
export const SearchResults = props => {
  const path = props.facet && props.facet !== "" ? props.facet : "results";
  let [resultsCount, setResultsCount] = useState(0);
  return (
    <div className="search-result">
      <ResultsHeader count={resultsCount} term="test" />
      <FirestoreCollection
        path={path}
        sort="date:desc"
        render={({ isLoading, data }) => {
          return isLoading ? (
            <ResultLoader />
          ) : (
            <div>
              {setResultsCount(data.length)}
              <ul className="rlist search-result__body items-results ">
                {data.map(resultItem => (
                  <ResultsItem key={resultItem.id} {...resultItem} />
                ))}
              </ul>
            </div>
          );
        }}
      />
    </div>
  );
};
