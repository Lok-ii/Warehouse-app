import React, { useRef } from "react";
import warehouseData from "../../assets/json/Warehouse.json";
import { nanoid } from "nanoid";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredData, setData } from "../../Redux/homeSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const { data, filteredData } = useSelector((state) => state.home);
  const navigate = useNavigate();

  const cityRef = useRef("");
  const clusterRef = useRef("");
  const spaceRef = useRef("");

  const cities = [...new Set(warehouseData.map((warehouse) => warehouse.city))];
  const clusters = [
    ...new Set(warehouseData.map((warehouse) => warehouse.cluster)),
  ];
  const spaceAvailable = [
    ...new Set(warehouseData.map((warehouse) => warehouse.space_available)),
  ];
  return (
    <form
      className="flex items-center w-[90%] justify-between"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(
          setFilteredData({
            city: cityRef.current.value,
            cluster: clusterRef.current.value,
            space: spaceRef.current.value,
          })
        );
        navigate("/filter");
      }}
    >
      <div className="flex items-center justify-evenly w-[90%]">
        <div className="flex items-center gap-4">
          <label htmlFor="city">Enter City</label>
          <select name="city" id="city" ref={cityRef}>
            <option value="">All Cities</option>
            {cities.map((item) => {
              return (
                <option key={nanoid()} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex items-center gap-4">
          <label htmlFor="cluster">Cluster</label>
          <select name="cluster" id="cluster" ref={clusterRef}>
            <option value="">All Clusters</option>
            {clusters.map((item) => {
              return (
                <option key={nanoid()} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex items-center gap-4">
          <label htmlFor="space">Space Available</label>
          <select name="space" id="space" ref={spaceRef}>
            <option value="">All Spaces</option>
            {spaceAvailable.map((item) => {
              return (
                <option key={nanoid()} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <button type="submit" className="py-2 px-4 rounded-lg bg-buttonColor text-white font-medium">
        Filter
      </button>
    </form>
  );
};

export default Filter;
