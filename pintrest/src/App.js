import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [skip, setSkip] = useState(0);

  const numCols = 6;

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {}, [posts]);

  const fetchPosts = async () => {
    const data = await fetch(`https://dummyjson.com/products?skip=0&limit=10`);
    const json = await data.json();
    setSkip((skip) => skip + 10);
    const { products } = json;
    const newImages = await getImages(products);
    setPosts((posts) => {
      return [...posts, ...newImages];
    });
  };

  async function getImages(products) {
    const images = [];

    let colHeights = [
      { idx: 0, height: 0 },
      { idx: 1, height: 0 },
      { idx: 2, height: 0 },
      { idx: 3, height: 0 },
      { idx: 4, height: 0 },
      { idx: 5, height: 0 },
    ];

    const sortCols = () => {
      colHeights.sort((a, b) => a.height - b.height);
    };

    for (const product in products) {
      const productImages = products[product].images;
      for (const img in productImages) {
        const url = productImages[img];
        const imageData = await getMeta(url);
        const image = {
          src: url,
          id: uuidv4(),
          y: colHeights[0].height,
          x: colHeights[0].idx * 250,
        };
        const adjustedHeight = (230 * imageData.height) / imageData.width;
        colHeights[0].height += adjustedHeight + 20;

        sortCols();
        images.push(image);
      }
    }
    return images;
  }

  function getMeta(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.src = url;
    });
  }

  function uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
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
        <div>Loading...</div>
      )}
    </div>
  );
}
