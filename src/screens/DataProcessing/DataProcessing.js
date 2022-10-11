import React, {useState} from 'react';
import DataTable from "../../components/DataTable/DataTable";
import {Button} from "@mui/material";
import ViewTypeSwitcher from "../../components/ViewTypeSwitcher/ViewTypeSwitcher";
import {
  CARD_LIST_TYPE,
  GROUP_TYPE,
  TABLE_TYPE,
  viewTypes
} from "../../configurations/viewTypesConfiguration";
import EmployeeCardsList from "../../components/EmployeeCardsList/EmployeeCardsList";
import EmployeeGroupsList from "../../components/EmployeeGroupsList/EmployeeGroupsList";

const employees = [
  createData('Andrey Diakonov', 'companyDomain/AndrDiak', 'email@gmail.com', 'Unmanaged', '+79453453434'),
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
  return (
    <>
      <ViewTypeSwitcher
        currViewType={currViewType}
        setCurrViewType={setCurrViewType}
      />
      {currViewType === TABLE_TYPE &&
        <DataTable employees={employees} />
      }
      {currViewType === CARD_LIST_TYPE &&
        <EmployeeCardsList employees={employees} />
      }
      {currViewType === GROUP_TYPE &&
        <EmployeeGroupsList employees={employees} />
      }
      <Button onClick={props.moveToDataPage}>Вернуться на страницу приветствия</Button>
    </>
  );
}

export default DataProcessing;
