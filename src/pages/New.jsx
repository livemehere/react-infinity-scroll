import styled from "styled-components";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { createPost, modifyPost } from "../redux/postsSlice";
import { useNavigate, useParams } from "react-router-dom";
import { getPostById } from "../service/firebase/posts";

const New = () => {
  const wordRef = useRef();
  const descRef = useRef();
  const exRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const handleCreateOrUpdate = () => {
    if (id) {
      // TODO: update
      dispatch(
        modifyPost({
          id,
          word: wordRef.current.value,
          description: descRef.current.value,
          explain: exRef.current.value,
        })
      );
    } else {
      if (
        !wordRef.current.value ||
        !descRef.current.value ||
        !exRef.current.value
      ) {
        return alert("내용을 채워주세요!");
      }
      dispatch(
        createPost({
          word: wordRef.current.value,
          description: descRef.current.value,
          explain: exRef.current.value,
        })
      );
    }

    navigate(-1);
  };

  const setInputs = async () => {
    const res = await getPostById(id);
    wordRef.current.value = res.word;
    descRef.current.value = res.description;
    exRef.current.value = res.explain;
  };

  useEffect(() => {
    if (!id) return;
    setInputs();
  }, []);

  return (
    <Container>
      <h1>단어 추가</h1>
      <input type="text" placeholder={"단어"} ref={wordRef} />
      <input type="text" placeholder={"설명"} ref={descRef} />
      <input type="text" placeholder={"예시"} ref={exRef} />
      <button onClick={handleCreateOrUpdate}>{id ? "수정" : "생성"}</button>
    </Container>
  );
};
export default New;

const Container = styled.div`
  max-width: 600px;
  width: 90%;
  margin: 3em auto;
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  & h1 {
    text-align: center;
  }

  & input {
    padding: 0.5em 0.2em;
  }

  & button {
    padding: 0.7em 0;
    background-color: #f7eddb;
    border: 1px solid #dfe8cc;
  }

  & button:hover {
    background-color: #eacd93;
    cursor: pointer;
  }
`;
