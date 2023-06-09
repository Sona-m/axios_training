import React, { useState } from "react";
import axios from "axios";
import customInstance from "../api/api";

const Post = () => {
  const [unitData, setUnitData] = useState({
    // 1 . creating state for storing locally according to payload
    unitName: "",
    erpId: "",
    createdBy: "",
  });

  function handleChange(event) {
    const { value, name } = event.target; // distructuring
    setUnitData((prevValue) => {
      return {
        ...prevValue, // setting values for all the property
        [name]: value,
      };
    });
  }

  const handleClick = async (e) => {
    // 3 .post request
    e.preventDefault();
    try {
      const reponse = await customInstance.post("/addOrUpdateUoms", [unitData]);
    } catch (err) {
      console.log(err);
    }
  };
  // 2 . handle values entered by user using handle change
  // after clicking on save call handleclick and do your post req

  return (
    <div className="container">
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          name="unitName"
          placeholder="Unit Name"
          value={unitData.unitName}
        />
        <input
          onChange={handleChange}
          name="erpId"
          placeholder="ERP Id"
          value={unitData.erpId}
        />
        <input
          onChange={handleChange}
          name="createdBy"
          placeholder="Created By"
          value={unitData.createdBy}
        />

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Post;
