import { createSlice } from "@reduxjs/toolkit";
import warehouseData from "../assets/json/Warehouse.json";

const initialState = {
  data: warehouseData,
  filteredData: warehouseData,
  searchData: warehouseData,
  likedData: [],
};

const homeSlice = createSlice({
  name: "home",
  initialState: initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setFilteredData: (state, action) => {
      const newFilteredData = warehouseData.filter(
        (warehouse) =>
          warehouse.city
            .toLowerCase()
            .includes(action.payload.city.toLowerCase()) &&
          warehouse.cluster
            .toLowerCase()
            .includes(action.payload.cluster.toLowerCase()) &&
          warehouse.space_available
            .toString()
            .toLowerCase()
            .includes(action.payload.space.toLowerCase())
      );
      state.filteredData = newFilteredData;
      state.data = newFilteredData;
    },
    setSearchData: (state, action) => {
      const newSearchData = warehouseData.filter((item) => {
        return item.name
          .toLowerCase()
          .includes(action.payload.search.toLowerCase());
      });
      console.log(newSearchData);
      state.searchData = newSearchData;
      state.data = newSearchData;
    },
    setLikedData: (state, action) => {
      state.likedData = [...state.likedData, action.payload];
      if (
        action.payload.type === "fromLocal" ||
        action.payload.type === "removed"
      ) {
        state.likedData = [...action.payload.payload];
      }
      localStorage.setItem("likedWarehouse", JSON.stringify(state.likedData));
    },
  },
});

export const { setFilteredData, setData, setSearchData, setLikedData } =
  homeSlice.actions;
export default homeSlice.reducer;
