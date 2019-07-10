import React from "react";
import { FirestoreCollection } from "react-firestore";
import "./App.scss";

function App() {
  return (
    <div className="App search-result">
      <div className="search-result__follow clearfix">
        <div className="search__result search__result--space">
          <span className="result__current">
            <span> 1 - 20</span>
          </span>
          <span className="result__sep">of</span>
          <span className="result__count">15732</span>
          <span className="result__sep">results for</span>
          <span className="result__suffix">test</span>
        </div>
        <div className="search__follow">
          <div className="search__follow__item">
            <span className="search__follow__icon">
              <i
                aria-hidden="true"
                className="icon-save-search icon-SearchPlus"
              />
              <span className="search__follow__label">Save Search</span>
            </span>
          </div>
          <div className="search__follow__item">
            <a
              href="#"
              title="RSS - Keyword search for All: test"
              name="RSSFeed"
              role="button"
              className="search__follow__icon RSS controlLinks"
              tabIndex={0}
            >
              <i aria-hidden="true" className="icon-rss_feed" />
              <span>RSS</span>
            </a>
          </div>
        </div>
      </div>
      <FirestoreCollection
        path="results"
        sort="date:desc"
        render={({ isLoading, data }) => {
          return isLoading ? (
            <div>LOG</div>
          ) : (
            <div>
              <h1>Results</h1>
              <ul>
                {data.map(resultItem => (
                  <li key={resultItem.id}>
                    {resultItem.title} - {resultItem.author}
                  </li>
                ))}
              </ul>
            </div>
          );
        }}
      />
    </div>
  );
}

export default App;
