import React, { useState } from "react";

const ChunckLoad = () => {
  const [quantity, setQuantity] = useState(1);
  const handleChange = (e) => {
    const inputValue = parseInt(e.target.value, 10) || 1;
    if (inputValue >= 1 && inputValue <= 50000000) {
      setQuantity(inputValue);
    }
  };
  return (
    <div className="a">
      <h6 className="pt-2">Advance Controls</h6>
      <div className="container d-flex">
        <div className="input-group mb-3 mx-1">
          <span className="input-group-text" id="basic-addon1">
            No. of Partitions:
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="No. of Partitions"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3 mx-1">
          <span className="input-group-text" id="basic-addon1">
            Lower Bound:
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Lower Bound"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3 mx-1">
          <span className="input-group-text" id="basic-addon1">
            Upper Bound:
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Upper Bound"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3 mx-1">
          <span className="input-group-text" id="basic-addon1">
            Partition By:
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Partition By"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
      <div className="input-group mb-3 w-50" style={{ paddingLeft: "15px" }}>
        <span className="input-group-text" id="basic-addon1">
          Chunck Size:
        </span>
        <input
          type="number"
          className="form-control text-left"
          id="quantity"
          step="1"
          max="50000000"
          value={quantity}
          name="quantity"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default ChunckLoad;
