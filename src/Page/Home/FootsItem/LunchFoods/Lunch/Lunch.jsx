import React from "react";

const Lunch = (props) => {
  const { handleFoodDetails, food } = props;
  const { name, img, price, description,id } = food;
  return (
    <div className="col" onClick={() => handleFoodDetails(id)}>
      <div className="card">
        <img
          className="mx-auto"
          width={120}
          src={require(`../../../../../images/lunch/${img}`)}
          alt=""
        />
        <div className="card-body">
          <h4>{name}</h4>
          <p>{description.slice(0, 20)}</p>
          <h6>
            $ <span className="text-warning">{price}</span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Lunch;
