import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  const [text, setText] = useState("clear all");

  return (
    <main>
      <h1 id="title">Birthday Reminder</h1>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button
          onClick={() => {
            if (people.length > 0) {
              setPeople([]);
              setText("resume");
            } else {
              setPeople([...data]);
              setText("clear all");
            }
          }}
        >
          {text}
        </button>
      </section>
    </main>
  );
}

export default App;
