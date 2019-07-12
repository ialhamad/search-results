import React from "react";
import { FirestoreCollection } from "react-firestore";

export const SearchFacets = props => (
  <div className="hidden-xs hidden-sm search__filters">
    <div id="filter">
      <div className="card--shadow">
        <div className="facet accordion" data-more-count="20">
          <h4 className="facet__title">Journal</h4>
          <div
            id="titleFacet-tec"
            className="facet__content accordion__content js--open"
          >
            <FirestoreCollection
              path="journals"
              render={({ isLoading, data }) => {
                return isLoading ? (
                  <div>Loading</div>
                ) : (
                  <ul className="rlist facet__list">
                    <li>
                      <button
                        className="btn-link"
                        onClick={() => props.changeFacet("")}
                      >
                        <span className="facet__label">All</span>
                      </button>
                    </li>
                    {data.map(facetItem => (
                      <li>
                        <button
                          className="btn-link"
                          onClick={() =>
                            props.changeFacet(facetItem.collection)
                          }
                        >
                          <span className="facet__label">{facetItem.name}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);
