import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "../redux/postsSlice";
import styled from "styled-components";
import PostBox from "./PostBox";

const PostWrap = () => {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <Container>
      {posts.map((post) => (
        <PostBox key={post.id} data={post} />
      ))}
    </Container>
  );
};

export default PostWrap;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1em;
  max-width: 90%;
  margin: 0.5em auto;
`;
