import './App.css';
import React, {useState} from "react";
import DataProcessing from "./screens/DataProcessing/DataProcessing";
import Greeting from "./screens/Greeting/Greeting";

const GREETING_PAGE = 'Greeting Page';
const DATA_PAGE = 'Data Page';

function App() {
  const [page, setPage] = useState(GREETING_PAGE);
  return (
    <div className="App">
      {page === GREETING_PAGE
        ? <Greeting moveToDataPage={() => setPage(DATA_PAGE)} />
        : <DataProcessing moveToDataPage={() => setPage(GREETING_PAGE)} />
      }
    </div>
  );
}

export default App;
