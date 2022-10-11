import React from 'react';
import './EmployeeGroup.css';
import EmployeeLabel from "../EmployeeLabel/EmployeeLabel";

function EmployeeGroup(props) {
  return (
    <section className="employees-group">
      <header className="employees-group__header">{props.groupName}</header>
      <div className="employees-group__employee-list">
        {props.employees.map(employee =>
          <EmployeeLabel employee={employee} />
        )}
      </div>
      <span className="employees-group__add-employee">Добавить пользователя...</span>
    </section>
  );
}

export default EmployeeGroup;
