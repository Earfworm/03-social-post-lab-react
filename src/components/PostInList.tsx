import Post from "../models/Post";
import "./PostInList.css";

interface Props {
  post: Post;
  //   capybara holds deleteHandler - because the arg is provided inline when the prop is sent down,
  //we don't have to describe that parameter here:
  capybara: () => void;
}

const PostInList = ({ post, capybara }: Props) => {
  return (
    <div className="PostInList">
      <h2>{post.title}</h2>
      <p>{post.thought}</p>
      <button
        onClick={() => {
          capybara();
        }}
      >
        delete
      </button>
    </div>
  );
};

export default PostInList;
