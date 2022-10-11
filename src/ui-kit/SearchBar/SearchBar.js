import React from 'react';
import Button from "../Button/Button";
import './SearchBar.css';

function SearchBar(props) {
  return (
    <div className="search-bar">
      <input className="search-input" onChange={(e) => props.onChange(e.target.value)} type="text" placeholder="Введите имя сотрудника"/>
      <Button>Поиск</Button>
    </div>
  );
}

export default SearchBar;
