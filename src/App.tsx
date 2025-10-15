import React from "react";
import "./styles/App.scss";
import Home from "./components/Home";
import { FormProvider } from "./context/FormContext";

const App: React.FC = () => {
  return (

    <FormProvider>
      <Home />
    </FormProvider>

  );
};

export default App;
