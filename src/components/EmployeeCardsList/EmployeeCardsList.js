import React from 'react';
import EmployeeCard from "../../ui-kit/EmployeeCard/EmployeeCard";
import './EmployeeCardsList.js.css';

function EmployeeCardsList(props) {
  return (
    <div className="employee-card-list">
      {props.employees && props.employees.map(employee =>
        <EmployeeCard employee={employee} />
      )}
    </div>
  );
}

export default EmployeeCardsList;
