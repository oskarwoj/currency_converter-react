import React from "react";
import Form from "./Form";
import Header from "./Header";
import FormContainer from "./FormContainer";
import Main from "./Main";
import Result from "./Result";

function App() {
  return (
    <Main>
      <Header />
      <FormContainer>
        <Form />
        <Result result={2} />
      </FormContainer>
    </Main>
  );
}

export default App;
