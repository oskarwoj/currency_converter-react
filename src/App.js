import React from "react";

function App() {
  return (
    <main class="main">
      <header class="header">
        <h1 class="header__title">Currency Converter</h1>
        <p class="header__paragraph">Fast and secure currency exchange</p>
      </header>

      <form class="form js-form">
        <fieldset>
          <legend>From</legend>
          <select class="form__field js-firstSelect">
            <option>PLN</option>
            <option>USD</option>
            <option>EUR</option>
          </select>
          <input
            class="form__field js-firstInput"
            type="number"
            name="buy"
            value="100"
          />
        </fieldset>
        <button class="form__button js-swap">Invert</button>
        <fieldset>
          <legend>To</legend>
          <select class="form__field js-secondSelect">
            <option>USD</option>
            <option>EUR</option>
            <option>PLN</option>
          </select>
          <div class="form__field js-result">25.69</div>
        </fieldset>
        <button class="form__button js-submit">Exchange</button>
      </form>
    </main>
  );
}

export default App;
