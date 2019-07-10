import React from "react";
import { FirestoreCollection } from "react-firestore";
import { ResultsItem } from "./ResultsItem";
import { ResultsHeader } from "./ResultsHeader";

export const SearchResults = props => {
  const path = props.facet && props.facet !== "" ? props.facet : "results"
  return (
    <div className="search-result">
      <FirestoreCollection
        path={path}
        sort="date:desc"
        render={({ isLoading, data }) => {
          return isLoading ? (
            <div>Loading</div>
          ) : (
            <div>
              <ResultsHeader count={data.length} term="test" />
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
