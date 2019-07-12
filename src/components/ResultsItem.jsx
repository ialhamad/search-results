import React from "react";

export const ResultsItem = props => (
  <li className="clearfix separator search__item">
    <div className="titled_issues">
      <div className="issue-item">
        <div className="issue-item__header">
          <span className="issue-item-access">
            <span className="meta__access">
              <span className="citation__acess__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="red"
                    d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
                  />
                </svg>
              </span>
            </span>
          </span>
          <span>{props.journal}</span>
          <span>{props.date}</span>
        </div>
        <div className="issue-item__body">
          <div className="issue-item__title">
            <a href={props.link} title={props.title}>
              <span className="hlFld-Title">
                <h5>{props.title}</h5>
              </span>
            </a>
          </div>
          <div className="issue-item__authors">
            <a
              href={"/action/doSearch?ContribAuthorStored=" + props.author}
              title={props.author}
            >
              <span>{props.author}</span>
            </a>
          </div>
          <div className="issue-item__doi">
            <a href={props.link} title={props.link}>
              {props.link}
            </a>
          </div>
        </div>
        <div className="issue-item__footer">
          <div className="accordion">
            <a
              href="#"
              title="Preview Abstract"
              className="accordion__control"
              aria-expanded="false"
            >
              <span>Preview Abstract</span>
              <i aria-hidden="true" className="icon-section_arrow_d" />
            </a>
            <div
              className="accordion__content card--shadow"
              style={{ display: "none" }}
            >
              <span className="hlFld-Abstract">{props.abstract}</span>
            </div>
          </div>
          <ul className="rlist--inline separator issue-item__links">
            <li>
              <a title="Full text" href={props.link}>
                <i aria-hidden="true" className="icon icon-full-text" />
                <span>Full text</span>
              </a>
            </li>
            <li>
              <a title="PDF" href={props.link}>
                <i aria-hidden="true" className="icon-PDF inline-icon" />
                <span>PDF</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </li>
);
