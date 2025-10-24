import React from 'react';
import Home from './components/Home';
import { FormProvider } from './context/FormContext';
import { ChildFriendContextProvider } from './domain/childFriendContext';
import './styles/App.scss';

const App: React.FC = () => {
  return (
    <ChildFriendContextProvider>
      <FormProvider>
        <Home />
      </FormProvider>
    </ChildFriendContextProvider>
  );
};

export default App;
