import React from "react";
import Tweet from "./Tweet";

function App() {
   
  return (
    <div className="app">
      <Tweet className="Jüri Mihelson" message="Tänane ilm tuleb ilus." likes="189"/>
      <Tweet className="Marlen Lillenberk" message="Homme hakkab sadama." likes="278"/>
      <Tweet className="Larissa Rump" message="Väga pilvine on." likes="65"/>
      <Tweet className="Heino Rump" message="Ilus suvine on väljas." likes="29"/>
    </div>
  );
}

export default App;
  