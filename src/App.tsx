import { Typography } from "@mui/material";
import React from 'react';
import './App.css';
import Layout from "./components/Layout";
import SearchField from "./components/SearchField";
import WordList from "./components/WordList";
import { baseurl } from './constants/baseUrl';
import useDebounce from './hooks/useDebouncer';
import { useFetch } from './hooks/useFetch';
import { useInputValue } from './hooks/useInputValue';


const App: React.FC = () => {
  const { inputValue, changeInput, clearInput } = useInputValue();
  const debouncedSearchTerm = useDebounce(inputValue, 500);

  const url = debouncedSearchTerm && `${baseurl}${debouncedSearchTerm}`;

  const { status, data, error } = useFetch(url);

  const clearInputValue= () => {
    clearInput();
  };
  return (
    <Layout>
      <SearchField
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputValue}
      />
      <Typography variant="h5" style={{ margin: 16 }}>
        {status === "fetching" && "Finding Rhyming words..."}
        {status === "error" && `Error: ${error}`}
        {inputValue.length > 0 && `Found ${data.length} rhyming words`}
      </Typography>
      <WordList
        items={inputValue.length === 0 ? []: data}
      />
    </Layout>
  );
}

export default App;
