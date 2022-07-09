# 리액트 숙련주차 개인과제

- react-redux
- redux-toolkit
- firebase
- infinity-scroll
- react-router-dom

## Scroll 하단 감지 이벤트

```js
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
```

## FireStore Limit & startAfter

- Ref 이후 docs 들을 가져옴, offset 역할

```js
const q = query(postsRef, limit(mount), startAfter(lastPostRef));
```