import { useEffect, useState } from "react";

const useFoodItems = () => {
  const [foodsLunch, setFoodsLunch] = useState([]);
  useEffect(() => {
    fetch(`food.json`)
      .then((res) => res.json())
      .then((data) => setFoodsLunch(data));
  }, []);

//   const [breakfast, setBreakFast] = useState([])
  return [foodsLunch, setFoodsLunch];
};

export default useFoodItems;
