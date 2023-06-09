import React from "react";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setApiData } from "../redux/unitSlice";
import Delete from "../images/delete.png";

function Get() {
  const [Unitdata, setUnitData] = useState([]); // 2. for setup the details locally
  const dispatch = useDispatch(); // for updating the data on redux store

  const arrayToMapUnitData = (res) => {
    const responseMap = {}; // creatig a map
    res.forEach((unit) => {
      // for each data in response from api make unit id as key and other data as value in a hashmap
      responseMap[unit.unitId] = unit;
    });
    dispatch(setApiData(responseMap));
  };

  useEffect(() => {
    axios
      .get(
        `https://admin-api-dev.effigo.in/effigo/api/admin/v1/uom/nccltd/getAllUoms`
      )
      .then((response) => {
        //1. fetching data
        setUnitData(response.data); // afte fetch set the data
        arrayToMapUnitData(response.data); // callling this fuction to manipulate the data and usin dispatch store it in ur redux store
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDeleteClick = async (e) => {
    //8. do your patch req for delete
    e.preventDefault();
    try {
      const reponse = await axios.patch(
        "https://admin-api-dev.effigo.in/effigo/api/admin/v1/uom/nccltd/deleteUoms",
        [
          {
            unitName: Unitdata.unitName,
            unitId: Unitdata.unitName,
          },
        ]
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Grid container spacing={2} mt={3} ml={1.5}>
        {Unitdata.map((unit) => (
          <Grid
            item
            xs={3}
            key={unit.unitId}
            sx={{
              border: 1,
              borderColor: "grey.500",
              m: 6,
              borderRadius: 4,
              backgroundColor: "#526D82",
              color: "white",
              textAlign: "center",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Status : {unit.status} </h3>

              <img
                src={Delete}
                onClick={handleDeleteClick}
                style={{
                  float: "right",
                  height: "40px",
                  width: "40px",
                  margin: "10px",
                }}
                alt="delete"
              />
            </div>
            <h3>Unit Name : {unit.unitName}</h3>
            <p>Created On : {unit.createdOn}</p>
            <p>Created By : {unit.createdBy}</p>
            <Link
              to={`/get/${unit.unitId}`}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <button className="btn">Update</button>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Get;

// passing the unitid to go to patch component when we click on update button
