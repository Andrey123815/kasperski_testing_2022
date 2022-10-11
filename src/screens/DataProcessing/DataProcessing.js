import React, {useEffect, useMemo, useState} from 'react';
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
import {END_POINTS, request} from "../../network/network";

function DataProcessing(props) {
  const [currViewType, setCurrViewType] = useState(TABLE_TYPE);
  const [search, setSearch] = useState('');
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
      request(END_POINTS.getEmployees).then(res => setEmployees(res));
  }, []);

  const searchRequest = () => {
    return employees && search.length ? employees.filter(employee => employee && employee?.fullName.includes(search)) : employees;
  }

  const filteredEmployees = useMemo(() => searchRequest(), [employees, search]);

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
