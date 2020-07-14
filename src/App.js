import React from "react";
import Button from "./Button";
import FieldSet from "./FieldSet";
import Header from "./Header";
import Form from "./Form";
import Main from "./Main";

function App() {
  return (
    <Main>
      <Header />
      <Form>
        <FieldSet title="From" />
        <Button name="Invert" />
        <FieldSet title="To" />
        <Button name="Exchange" />
      </Form>
    </Main>
  );
}

export default App;
