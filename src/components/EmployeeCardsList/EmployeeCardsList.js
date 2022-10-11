import React from 'react';
import EmployeeCard from "../../ui-kit/EmployeeCard/EmployeeCard";
import './EmployeeCardsList.js.css';

function EmployeeCardsList(props) {
  return (
    <div className="employee-card-list">
      {props.employees.map(employee =>
        <EmployeeCard key={employee.id} employee={employee} />
      )}
    </div>
  );
}

export default EmployeeCardsList = React.memo(EmployeeCardsList);
