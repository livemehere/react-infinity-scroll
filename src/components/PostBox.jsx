import styled from "styled-components";
import { useDispatch } from "react-redux";
import { fetchPosts, removePost } from "../redux/postsSlice";
import { useNavigate } from "react-router-dom";

const PostBox = ({ data }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm()) {
      dispatch(removePost(data.id));
      dispatch(fetchPosts());
    }
  };

  return (
    <Post>
      <Buttons>
        <span
          className="material-symbols-outlined btn"
          onClick={() => navigate(`edit/${data.id}`)}
        >
          edit_note
        </span>
        <span
          className="material-symbols-outlined btn"
          onClick={() => handleDelete()}
        >
          delete
        </span>
      </Buttons>
      <MiniText>단어</MiniText>
      <h2>{data.word}</h2>
      <MiniText>설명</MiniText>
      <p>{data.description}</p>
      <MiniText>예시</MiniText>
      <Explain>{data.explain}</Explain>
    </Post>
  );
};

export default PostBox;

const Post = styled.div`
  border-radius: 5px;
  border: 2px solid #ccd6a6;
  padding: 0.4em;
  position: relative;

  & h2,
  p {
    margin: 0.3em 0 0.6em 0;
  }
`;

const Explain = styled.p`
  color: #0b85e3;
  margin: 0;
`;

const MiniText = styled.p`
  text-decoration: underline;
  font-size: 0.8rem;
  color: #888;
`;

const Buttons = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
`;
