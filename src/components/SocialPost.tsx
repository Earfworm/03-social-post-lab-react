import { useState } from "react";
import Post from "../models/Post";
import PostForm from "./PostForm";
import PostInList from "./PostInList";
import "./SocialPost.css";

const SocialPost = () => {
  const [posts, setPosts] = useState<Post[]>([
    { title: "James' Thought", thought: "React is soooooo much fun!" },
    { title: "Nov 2nd", thought: "It is Wednesday my dooooods" },
    {
      title: "Jordan",
      thought:
        "I'm thinking about all these posts and when you asked the question about map ..ksdjfaoiefa;sdlkfa;skldf",
    },
  ]);
  const deleteHandler = (index: number): void => {
    setPosts((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };

  const addNewPost = (newPost: Post): void => {
    setPosts((prev) => [newPost, ...prev]);
  };

  return (
    <div className="SocialPost">
      <PostForm onSubmitForm={addNewPost} />
      {posts.map((post, index) => (
        <PostInList
          key={`${index}${post.title}`}
          post={post}
          capybara={() => deleteHandler(index)}
        />
      ))}
    </div>
  );
};

export default SocialPost;
