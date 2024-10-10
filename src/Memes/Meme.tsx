import React, { useEffect } from "react";
import { useState } from "react";

const Meme = () => {
  const url = "https://api.chucknorris.io/jokes/random";
  const [mem, setMem] = useState<string>("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setMem(data.value);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
          <div>{mem}</div>
    </div>
  );
};

export default Meme;
