import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);

  let time = new Date().toLocaleTimeString();

  const [timeNow, setTimeNow] = useState(time);

  function updateTime() {
    let newTime = new Date().toLocaleTimeString();
    setTimeNow(newTime);
  }

  return (
    <div className="container">
      <h1>{timeNow}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
