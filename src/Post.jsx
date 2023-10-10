import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

function Post() {
  const params = useParams();
  console.log(params.id);

  const [post, setPost] = useState();
  const [newTitle, setNewTitle] = useState();

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      });
  }, []);

  // Function for Changing a post
  const updatePost = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/posts/${post.id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: newTitle,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPost(data);
      });
  };
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <h1>Title: {post && post.title}</h1>
      <form onSubmit={updatePost}>
        <label>
          Title:{" "}
          <input
            type="text"
            placeholder="Enter new title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Post;
