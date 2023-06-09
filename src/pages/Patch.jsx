import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // for getting the parameters from url
import { useSelector } from "react-redux"; // bacause we want to use data from redux store
import axios from "axios";

const Patch = () => {
  const { unitId: idFromParam } = useParams(); // 1 .destructuring and changing the property name
  console.log(idFromParam); // getting the unitid from the url paramenter
  const unitItems = useSelector((state) => state.unit); // unitItems will get  api data
  console.log(unitItems);

  const [unitData, setUnitData] = useState({
    unitId: "",
    unitName: "", // 2. creating a state for getting the details so that you can fetch it in patch interface
    createdBy: "",
    erpId: "",
  });

  useEffect(() => {
    //3. if unitItems.apidata exist
    if (unitItems.apiData) {
      const dataForThisUnit = unitItems.apiData[idFromParam]; // take the value of unitid that u have gortfrom paramter
      setUnitData({
        unitId: dataForThisUnit.unitId,
        unitName: dataForThisUnit.unitName, // once you got the value set the data to your state
        createdBy: dataForThisUnit.createdBy,
        erpId: dataForThisUnit.erpId,
      });
    } else {
      console.log("data not found in store"); // if its not exist through error
    }
  }, []);

  const onChangeHandler = (e) => {
    //6 . using spread operator get unit data and using event.target set the name an value
    setUnitData({ ...unitData, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    //8. do your post req for update
    e.preventDefault();
    try {
      const reponse = await axios.post(
        "https://admin-api-dev.effigo.in/effigo/api/admin/v1/uom/nccltd/addOrUpdateUoms",
        [
          {
            unitName: unitData.unitName,
            erpId: unitData.erpId,
            createdBy: unitData.createdBy,
          },
        ]
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    //4 . show the data to user that you have got for particular id that user have clicked on
    //5 . start doind your patch req
    // 5.1 - according to payload you can only change your unit name so make other field disabled.
    // for user to update details call event and handle that event

    //7. on click update button call function handle click
    <>
      <h1 style={{ textAlign: "center" }}>Update Your Details here !</h1>
      <div className="container">
        <form onSubmit={handleClick}>
          <input
            name="unitName"
            onChange={onChangeHandler}
            value={unitData.unitName}
            placeholder="Unit Name"
          />
          <input
            name="erpId"
            disabled
            onChange={onChangeHandler}
            value={unitData.erpId}
            placeholder="ERP Id"
          />
          <input
            name="createdBy"
            disabled
            onChange={onChangeHandler}
            value={unitData.createdBy}
            placeholder="Created By"
          />

          <button className="btn" type="submit">
            Update Details
          </button>
        </form>
      </div>
    </>
  );
};

export default Patch;
