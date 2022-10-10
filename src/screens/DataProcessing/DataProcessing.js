import React from 'react';
import DataTable from "../../components/DataTable/DataTable";
import {Button} from "@mui/material";

function DataProcessing(props) {
  return (
    <>
      <DataTable />
      <Button onClick={props.moveToDataPage}>Вернуться на страницу приветствия</Button>
    </>
  );
}

export default DataProcessing;
