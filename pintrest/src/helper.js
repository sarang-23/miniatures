export async function fetchPost(skipParam, posts, colHeights) {
  const data = await fetch(
    "https://dummyjson.com/products?skip=" + skipParam + "&limit=10"
  );
  const json = await data.json();
  const { products } = json;
  const { images, maxHeight, updatedColHeights } = await getImages(
    products,
    posts,
    colHeights
  );
  return {
    newPosts: images,
    newHeight: maxHeight,
    updatedColHeights,
  };
}

const getImages = async (products, posts, colHeights) => {
  const images = [...posts];

  let tempColHeights = colHeights;

  const sortCols = () => {
    tempColHeights.sort((a, b) => a.height - b.height);
  };

  for (const product in products) {
    const productImages = products[product].images;
    for (const img in productImages) {
      const url = productImages[img];
      const imageData = await getMeta(url);
      const image = {
        src: url,
        id: uuidv4(),
        y: tempColHeights[0].height,
        x: tempColHeights[0].idx * 250,
      };
      const adjustedHeight = (230 * imageData.height) / imageData.width;
      tempColHeights[0].height += adjustedHeight + 20;

      sortCols();
      images.push(image);
    }
  }

  return {
    images,
    maxHeight: colHeights[colHeights.length - 1].height,
    updatedColHeights: tempColHeights,
  };
};

const getMeta = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.src = url;
  });
};

const uuidv4 = () => {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
};
