import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Post() {
  const params = useParams();
  console.log(params.id);

  const [post, setPost] = useState();

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      });
  }, []);
  return (
    <div>
      <h1>Title: {post && post.title}</h1>
    </div>
  );
}

export default Post;
