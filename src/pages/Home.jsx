import PostWrap from "../components/PostWrap";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <h1>Kong's 단어장</h1>
      </Header>
      <PostWrap />
      <FloatBtn onClick={() => navigate("/new")}>생성</FloatBtn>
    </>
  );
};
export default Home;

const Header = styled.header`
  position: sticky;
  text-align: center;
  padding: 1em 0;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 99;
  border-bottom: 2px solid #ccd6a6;
  margin-bottom: 1em;

  & h1 {
    margin: 0;
  }
`;

const FloatBtn = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: tomato;
  color: white;
  font-weight: bold;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  &:hover {
    background-color: #c74e36;
  }
`;
