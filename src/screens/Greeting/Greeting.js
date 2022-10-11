import React from 'react';
import logo from "../../assets/logo.svg";
import {Button} from "@mui/material";

function Greeting(props) {
  return (
    <>
      <p style={{marginTop: "10%"}}></p>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Добро пожаловать в тестовый проект. Располагайтесь поудобнее и можно приступать к проверке)
      </p>
      <Button onClick={props.moveToDataPage}>Перейти на страницу админа</Button>
    </>
  );
}

export default Greeting;
