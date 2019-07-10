import React from 'react';

export const ResultsHeader = (props) => (
    <div className="search-result__follow clearfix">
        <div className="search__result search__result--space">
          <span className="result__count">{props.count}</span>
          <span className="result__sep">results for</span>
          <span className="result__suffix">{props.term}</span>
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
)