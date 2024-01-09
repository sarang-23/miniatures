import { useState, useEffect } from "react";

const Test = () => {
  const [skip, setSkip] = useState(0);
  useEffect(() => {
    setSkip(skip + 10);
  }, []);

  console.log("test component skip : " + skip);
  return <></>;
};

export default Test;
