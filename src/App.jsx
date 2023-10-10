import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./App.css";

function App() {
  const [item, setItem] = useState();
  const [newPost, setNewPost] = useState();

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
  }, [item]);

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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetch("http://localhost:3000/posts", {
            method: "POST",
            body: JSON.stringify({
              title: newPost,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            });
        }}
      >
        <label>
          New Post:{" "}
          <input
            type="text"
            placeholder="Add Post"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
        </label>

        <input type="submit" value="Add Post" />
      </form>

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
    </div>
  );
}

export default App;
