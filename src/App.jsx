import { useEffect, useState } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("http://localhost:3000/posts/", {
      method: "GET",
      // body: JSON.stringify({
      //   id: 6,
      //   title: "First",
      // }),
      // headers: {
      //   "Content-type": "application/json; charset=UTF-8",
      // },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
