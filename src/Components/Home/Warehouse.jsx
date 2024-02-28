import React, { useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import { setLikedData } from "../../Redux/homeSlice";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Warehouse = ({ warehouse }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { likedData } = useSelector((state) => state.home);

  useEffect(() => {
    const liked = JSON.parse(localStorage.getItem("likedWarehouse"));
    if (liked) {
      dispatch(setLikedData({ type: "fromLocal", payload: liked }));
    }
  }, []);
  return (
    <div className="w-[95%] mobile-large:w-[45%] laptop:w-[30%] border-2 border-buttonColor rounded-tl-[3rem] rounded-br-[3rem] p-4 cursor-pointer transition-all duration-300 hover:shadow-3xl">
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold">{warehouse.name}</p>
        <div
          className={`rounded-[50%] border-2 w-[2rem] h-[2rem] flex items-center justify-center z-[8] ${
            likedData.includes(warehouse.id) ? "fill-red-600" : "border-tabColor"
          } transition-all duration-200`}
          onClick={() => {
            if (!likedData.includes(warehouse.id)) {
              dispatch(setLikedData(warehouse.id));
            } else {
              const newLiked = likedData.filter((item) => {
                return item != warehouse.id;
              });
              dispatch(setLikedData({ type: "removed", payload: newLiked }));
            }
            // localStorage.setItem("liked", JSON.stringify(likedData));
          }}
        >
          <FaRegHeart
            className={`${
              likedData.includes(warehouse.id) ? "fill-red-600" : ""
            } transition-all duration-200`}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <p className="font-semibold">{warehouse.city}</p>
        <p>
          Type: <span>{warehouse.type}</span>
        </p>
        <p>
          Cluster: <span>{warehouse.cluster}</span>
        </p>
        <p>
          Registered: <span>{warehouse.is_registered ? "Yes" : "No"}</span>
        </p>
        <p>
          Live: <span>{warehouse.is_live ? "Yes" : "No"}</span>
        </p>
      </div>
    </div>
  );
};

export default Warehouse;
