import { useEffect, useRef, useState } from "react";
import { fetchPost } from "./helper";

const Images = () => {
  const [posts, setPosts] = useState([]);
  const [maxHeight, setMaxHeight] = useState(0);
  const [skipParam, setSkipParam] = useState(0);
  const [colHeights, setColHeights] = useState([
    { idx: 0, height: 0 },
    { idx: 1, height: 0 },
    { idx: 2, height: 0 },
    { idx: 3, height: 0 },
    { idx: 4, height: 0 },
    { idx: 5, height: 0 },
  ]);

  const eleRef = useRef(null);
  const skipRef = useRef(null);
  skipRef.current = skipParam;
  console.log(skipParam, skipRef.current);
  useEffect(() => {
    let observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };
    const observer = new IntersectionObserver(
      intersectionCallback,
      observerOptions
    );
    if (eleRef.current) observer.observe(eleRef.current, observerOptions);

    return () => {
      if (eleRef.current) observer.unobserve(eleRef.current);
    };
  }, []);

  function intersectionCallback(entries) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      fetchPost(skipRef.current, posts, colHeights).then((vals) => {
        const { newPosts, newHeight, updatedColHeights } = vals;
        setMaxHeight(newHeight);
        setPosts((posts) => {
          return [...posts, ...newPosts];
        });
        setColHeights(updatedColHeights);
        setSkipParam((skipParam) => skipParam + 10);
      });
    }
  }

  return (
    <div className="container">
      {posts.length ? (
        posts.map((p) => (
          <div
            id={p.id}
            key={p.id}
            className="image"
            style={{
              transform: `translateX(${p.x}px) translateY(${p.y}px)`,
            }}
          >
            <img src={p.src} alt="broken" width={230} />
          </div>
        ))
      ) : (
        <></>
      )}
      <div
        ref={eleRef}
        id="load-more"
        style={{ position: "absolute", top: `${maxHeight}px` }}
      ></div>
    </div>
  );
};

export default Images;
