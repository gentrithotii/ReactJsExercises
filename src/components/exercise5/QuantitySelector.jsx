import { useState } from "react";

const QuantitySelector = ({ onChange }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container w-25">
      <div className="row">
        <div className="btn-group">
          <button
            className="btn btn-primary"
            onClick={() => {
              const newQty = quantity + 1;
              setQuantity(newQty);
              onChange(newQty);
            }}
          >
            +
          </button>

          <button
            className="btn btn-danger "
            onClick={() => {
              const newQty = Math.max(1, quantity - 1);
              setQuantity(newQty);
              onChange(newQty);
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuantitySelector;
