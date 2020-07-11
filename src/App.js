import React from "react";
import Button from "./Button";
import Field from "./Field";
import Header from "./Header";
import Form from "./Form";
import Main from "./Main";

function App() {
  return (
    <Main>
      <Header />
      <Form>
        <Field title="From" />
        <Button name="Invert" />
        <Field title="To" />
        <Button name="Exchange" />
      </Form>
    </Main>
  );
}

export default App;
