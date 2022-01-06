import { useState } from "react";

export const useInputValue = (initialValue = "") => {
  const [inputValue, setInputValue] = useState(initialValue);

  return {
    inputValue,
    changeInput: (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value),
    clearInput: () => setInputValue("")
  };
};
