import { FormEvent, useState } from "react";
import Post from "../models/Post";
import "./PostForm.css";

interface Props {
  onSubmitForm: (nP: Post) => void;
}

const PostForm = ({ onSubmitForm }: Props) => {
  const [titleInput, setTitleInput] = useState("");
  const [thoughtInput, setThoughtInput] = useState("");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    //call a callback prop (fn) to add a new post
    const newPost: Post = { title: titleInput, thought: thoughtInput };
    onSubmitForm(newPost);
    //after we add post, clear the form:
    setTitleInput("");
    setThoughtInput("");
  };

  return (
    <form className="PostForm" onSubmit={submitHandler}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        value={titleInput}
        onChange={(e) => {
          setTitleInput(e.target.value);
        }}
      />
      <label htmlFor="thought">Thought</label>
      <input
        type="text"
        name="thought"
        id="thought"
        value={thoughtInput}
        onChange={(e) => {
          setThoughtInput(e.target.value);
        }}
      />
      <button>Add Post</button>
    </form>
  );
};

export default PostForm;
