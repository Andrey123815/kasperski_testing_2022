import React from 'react';
import './EmployeeGroupsList.css';
import EmployeeGroup from "../../ui-kit/EmployeeGroup/EmployeeGroup";

const groupNames = [
  'Management',
  'Frontend',
  'Backend',
  'Designer',
  'New',
  'Best'
];

function EmployeeGroupsList(props) {
  const orderlyEmployees = {};
  for (let employee of props.employees) {
    if (!orderlyEmployees[employee.group]) {
      orderlyEmployees[employee.group] = [employee];
      continue;
    }
    orderlyEmployees[employee.group].push(employee);
  }

  return (
    <div className="employee-groups-list">
      {Object.entries(orderlyEmployees).map(([group, employees], index) =>
        <EmployeeGroup key={groupNames[index]} groupName={groupNames[index]} group={group} employees={employees} />
      )}
      <div className="new-group">Добавить новую группу</div>
    </div>
  );
}

export default EmployeeGroupsList;
