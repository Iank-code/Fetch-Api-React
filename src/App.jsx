import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./App.css";

function App() {
  const [item, setItem] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/posts", {
      method: "GET",
      // headers: {
      //   "Content-type": "application/json; charset=UTF-8",
      // },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItem(data);
      });
  }, []);

  // console.log({
  //   message: "This is your data",
  //   data: item,
  // });
  // if(user == "John"){
  //   return this
  // }

  const deletePost = (id) => {
    fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
  };
  return (
    <div>
      <h1>Hello world</h1>
      {item &&
        item.map((post, index) => {
          return (
            <div key={index}>
              <NavLink to={`/post/${post.id}`}>Title: {post.title}</NavLink>
              <button onClick={() => deletePost(post.id)}>Delete</button>
            </div>
          );
        })}
    </div>
  );
}

export default App;
