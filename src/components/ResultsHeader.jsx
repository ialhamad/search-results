import React from "react";

export const ResultsHeader = props => (
  <div className="search-result__follow clearfix">
    <div className="search__result search__result--space">
      <span className="result__count">{props.count}</span>
      <span className="result__sep">results for</span>
      <span className="result__suffix">{props.term}</span>
    </div>
    <div className="search__follow">
      <div className="search__follow__item">
        <span className="search__follow__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <circle cx="6.18" cy="17.82" r="2.18" />
            <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z" />
          </svg>
          <span>RSS</span>
        </a>
      </div>
    </div>
  </div>
);
