import React from 'react';
import './ViewTypeSwitcher.css';
import {viewTypes} from "../../configurations/viewTypesConfiguration";

function ViewTypeSwitcher(props) {
  return (
    <section className="view-type-switcher">
      {viewTypes.map(view =>
        <mark
          key={view}
          className={view === props.currViewType ? "sort-type active-state" : "sort-type"}
          onClick={() => props.setCurrViewType(view)}
        >
          <span>{ view }</span>
        </mark>
      )}
    </section>
  );
}

export default ViewTypeSwitcher;

