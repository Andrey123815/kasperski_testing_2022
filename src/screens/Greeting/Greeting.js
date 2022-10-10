import React from 'react';
import logo from "../../assets/logo.svg";
import {Button} from "@mui/material";

function Greeting(props) {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Добро пожаловать в тестовый проект. Располагайтесь поудобнее и приступайте к проверке)
      </p>
      <Button onClick={props.moveToDataPage}>Перейти на страницу админа</Button>
    </>
  );
}

export default Greeting;
