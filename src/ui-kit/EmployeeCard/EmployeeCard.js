import React from 'react';
import './EmployeeCard.css';
import Checkbox from '@mui/material/Checkbox';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function EmployeeCard(props) {
  const {fullName, group, phone} = props.employee;

  const unmanagedStyle = group === 'Unmanaged' ? {fontWeight: "bold"} : {};

  return (
    <section className="employee-card">
      <header className="employee-card__header-line">
        <Checkbox {...label}/>
        <CloudDownloadIcon sx={{marginTop: 'auto', marginBottom: "auto"}}/>
      </header>
      <main className="employee-card__user-info">
        <span className="user-info__full-name"> {fullName}</span>
        <AccountBoxIcon sx={{width: '150px', height: '150px', marginLeft: "auto", marginRight: "auto"}}/>
        <span style={unmanagedStyle}>{group}</span>
        <span>{phone}</span>
      </main>
    </section>
  );
}

export default EmployeeCard;
