import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    // request
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: "11.847676",
        tr_latitude: "12.838442",
        bl_longitude: "109.095887",
        tr_longitude: "109.149359",
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": "746d8d3052msh5cc31c8ec2a5a96p1de4f4jsnf28b2cf53674",
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
