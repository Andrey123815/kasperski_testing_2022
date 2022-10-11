import React, {useState} from 'react';
import DataTable from "../../components/DataTable/DataTable";
import {Button} from "@mui/material";
import ViewTypeSwitcher from "../../components/ViewTypeSwitcher/ViewTypeSwitcher";
import {
  CARD_LIST_TYPE,
  GROUP_TYPE,
  TABLE_TYPE,
} from "../../configurations/viewTypesConfiguration";
import EmployeeCardsList from "../../components/EmployeeCardsList/EmployeeCardsList";
import EmployeeGroupsList from "../../components/EmployeeGroupsList/EmployeeGroupsList";
import SearchBar from "../../ui-kit/SearchBar/SearchBar";

const employees = [
  createData('Andrey Fred', 'companyDomain/AndrDiak', 'email@gmail.com', 'Unmanaged', '+79453453434'),
  createData('Andrey Fret', 'companyDomain/AndrDiak', 'email@gmail.com', 'CDN/CEO', '+79453453434'),
  createData('Andrey Diakonov', 'companyDomain/AndrDiak', 'email@gmail.com', 'CDN/CEO', '+79453453434'),
  createData('Andrey Diakonov', 'companyDomain/AndrDiak', 'email@gmail.com', 'CDN/CEO', '+79453453434'),
  createData('Andrey Diakonov', 'companyDomain/AndrDiak', 'email@gmail.com', 'CDN/CEO', '+79453453434'),
  createData('Andrey Diakonov', 'companyDomain/AndrDiak', 'email@gmail.com', 'CDN/CEO', '+79453453434'),
  createData('Andrey Diakonov', 'companyDomain/AndrDiak', 'email@gmail.com', 'CDN/CEO', '+79453453434'),
  createData('Andrey Diakonov', 'companyDomain/AndrDiak', 'email@gmail.com', 'CDN/CEO', '+79453453434'),
  createData('Andrey Diakonov', 'companyDomain/AndrDiak', 'email@gmail.com', 'CDN/CEO', '+79453453434'),
  createData('Andrey Diakonov', 'companyDomain/AndrDiak', 'email@gmail.com', 'CDN/CEO', '+79453453434'),
  createData('Andrey Diakonov', 'companyDomain/AndrDiak', 'email@gmail.com', 'CDN/CEO', '+79453453434'),
  createData('Andrey Diakonov', 'companyDomain/AndrDiak', 'email@gmail.com', 'CDN/CEO', '+79453453434'),
  createData('Andrey Diakonov', 'companyDomain/AndrDiak', 'email@gmail.com', 'CDN/CEO', '+79453453434'),
  createData('Andrey Diakonov', 'companyDomain/AndrDiak', 'email@gmail.com', 'CDN/CEO', '+79453453434'),
  createData('Andrey Diakonov', 'companyDomain/AndrDiak', 'email@gmail.com', 'CDN/CEO', '+79453453434'),
  createData('Andrey Diakonov', 'companyDomain/AndrDiak', 'email@gmail.com', 'CDN/CEO', '+79453453434'),
  createData('Andrey Diakonov', 'companyDomain/AndrDiak', 'email@gmail.com', 'CDN/CEO', '+79453453434'),
  createData('Andrey Diakonov', 'companyDomain/AndrDiak', 'email@gmail.com', 'CDN/CEO', '+79453453434'),
];

function createData(fullName, account, email, group, phone) {
  return {
    fullName,
    account,
    email,
    group,
    phone,
  };
}

function DataProcessing(props) {
  const [currViewType, setCurrViewType] = useState(TABLE_TYPE);
  const [search, setSearch] = useState('');

  let filteredEmployees = employees.filter(employee => employee.fullName.includes(search));
  if (filteredEmployees.length === 0) {
    filteredEmployees = employees;
  }
  return (
    <>
      <div className="functional-header">
        <ViewTypeSwitcher
          currViewType={currViewType}
          setCurrViewType={setCurrViewType}
        />
        <SearchBar onChange={setSearch}/>
      </div>
      {currViewType === TABLE_TYPE &&
        <DataTable employees={filteredEmployees} />
      }
      {currViewType === CARD_LIST_TYPE &&
        <EmployeeCardsList employees={filteredEmployees} />
      }
      {currViewType === GROUP_TYPE &&
        <EmployeeGroupsList employees={filteredEmployees} />
      }
      <Button onClick={props.moveToDataPage}>Вернуться на страницу приветствия</Button>
    </>
  );
}

export default DataProcessing;
