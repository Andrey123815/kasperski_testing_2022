import React from 'react';
import './EmployeeLabel.css';

function EmployeeLabel(props) {
  const {fullName, group} = props.employee;
  return (
    <div className="employee-label">
      <div className="employee-label__info">
        <span>{fullName}</span>
        <span>{group}</span>
      </div>
    </div>
  );
}

export default EmployeeLabel;
