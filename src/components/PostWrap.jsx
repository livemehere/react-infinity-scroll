import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { fetchMorePosts, fetchPosts } from "../redux/postsSlice";
import styled from "styled-components";
import PostBox from "./PostBox";
import { getPostRefById } from "../service/firebase/posts";

const PostWrap = () => {
  const { posts } = useSelector((state) => state.posts);
  const [detect, setDetect] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const handleLoadMore = async () => {
    const lastDoc = await getPostRefById(posts.at(-1).id);
    dispatch(fetchMorePosts(lastDoc));
    setDetect(false);
  };

  useEffect(() => {
    handleLoadMore();
  }, [detect]);

  const scrollBottom = (e) => {
    if (
      window.innerHeight + Math.ceil(window.pageYOffset) >=
      document.body.offsetHeight
    ) {
      setDetect(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollBottom);

    return () => window.removeEventListener("scroll", scrollBottom);
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
