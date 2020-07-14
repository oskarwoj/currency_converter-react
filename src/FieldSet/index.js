import React from "react";
import "./style.css";

const FieldSet = ({ title }) => (
  <fieldset>
    <legend>{title}</legend>
    <select className="form__field">
      <option>PLN</option>
      <option>USD</option>
      <option>EUR</option>
    </select>
    {title === "From" && (
      <input className="form__field" type="number" name="buy" value="100" />
    )}
    {title === "From" || <div className="form__field">25.69</div>}
  </fieldset>
);

export default FieldSet;
