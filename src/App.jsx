import { useEffect, useState } from "react";
import {NavLink} from "react-router-dom"
import "./App.css";

function App() {
  const [posts, setPosts] = useState();

  // useEffect(() => {
  //   fetch("http://localhost:3000/posts/", {
  //     method: "GET",
  //     // headers: {
  //     //   "Content-type": "application/json; charset=UTF-8",
  //     // },
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => {
        // console.log(response)
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      });
  }, []);

  // if(posts != nul){
  //   // return something
  // }else{
  //   // return nothing
  // }

  // posts!=null : /**return something */ ? /** return nothing */

  // &&

  return (
    <div>
      {/* <h1>Hello world</h1> */}
      {posts &&
        posts.map((post, index) => {
          return (
            <div>
              {/* <h1>Title: {post.title}</h1> */}
              <NavLink to={`/post/${post.id}`}>Title: {post.title}</NavLink>
              <button>Delete</button>
            </div>
          );
        })}
    </div>
  );
}

export default App;
