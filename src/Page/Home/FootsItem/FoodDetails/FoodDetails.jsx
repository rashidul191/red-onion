import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const FoodDetails = () => {
  const { foodId } = useParams();

  return (
    <div className="container">
      <h2>FoodDetails : {foodId}</h2>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col"></div>
        <div className="col"></div>
      </div>

      <div>
        <Link to="/user-info">
            <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
};

export default FoodDetails;
