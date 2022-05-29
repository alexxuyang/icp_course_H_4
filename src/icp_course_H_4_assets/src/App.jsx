import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { icp_course_H_4 } from "../../declarations/icp_course_H_4";

function App() {
//   const [price, setPrice] = useState([]);

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  async function doGreet() {
    const greeting = await icp_course_H_4.greet(name);
    setMessage(greeting);
  }

  useEffect(() => {
    // getData();
  }, []);

  return (
    <div style={{ "fontSize": "30px" }}>
      <div style={{ "backgroundColor": "yellow" }}>
        <p>Greetings, from DFINITY!</p>
        <p>
          {" "}
          Type your message in the Name input field, then click{" "}
          <b> Get Greeting</b> to display the result.
        </p>
      </div>
      <div style={{ margin: "30px" }}>
        <input
          id="name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        ></input>
        <button onClick={doGreet}>Get Greeting!</button>
      </div>
      <div>
        Greeting is: "
        <span style={{ color: "blue" }}>{message}</span>"
      </div>
    </div>
  );
}

export default App;