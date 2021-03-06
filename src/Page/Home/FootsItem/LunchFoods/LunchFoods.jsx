import React from "react";
import useFoodItems from "../../../../hook/useFoodItems";
import Lunch from "./Lunch/Lunch";
import { useNavigate } from "react-router-dom";

const LunchFoods = () => {
  const [foodsLunch] = useFoodItems();

  const navigate = useNavigate()

const handleFoodDetails = (foodId) =>{
    navigate(`/food-detail/${foodId}`)
console.log(foodId)
}
  return (
    <div className="App container">
      <h2>Lunch</h2>
     <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 text-center">
     {foodsLunch.map((food) => (
        <Lunch key={food.id} food={food} handleFoodDetails={handleFoodDetails}></Lunch>
      ))}
     </div>
    </div>
  );
};

export default LunchFoods;
