import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Brenda" animal="dog" breed="Golden Retriever" />
      <Pet name="Mabel" animal="dog" breed="Golden Retriever" />
      <Pet name="Tony" animal="tortoise" breed="Horsefield" />
      <Pet name="Tia" animal="cat" breed="Calico" />

    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
