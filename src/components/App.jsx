import React from "react";
import emojipedia from "../emojipedia.js";
import Entry from "./Entry";

function createEntry(emo) {
  return (
    <Entry key={emo.id} icon={emo.emoji} name={emo.name} def={emo.meaning} />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)};</dl>
    </div>
  );
}

export default App;
