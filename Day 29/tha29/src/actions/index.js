const UpdateLocation = (location) => {
  return {
    type: "UPDATE_LOCATION",
    payload: location,
  };
};

const UpdateLocationData = (location) => {
  return (dispatch) => {
    fetchData();
    async function fetchData() {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=dd80f56a143b4d7388275739213107&q=${location}`
      );
      const data = await res.json();
      try {
        console.log(data.location.name);
        dispatch({
          type: "UPDATE_LOCATION_DATA",
          payload: data,
        });
      } catch (error) {
        console.log(data.error.message);
        dispatch({
          type: "UPDATE_LOCATION_DATA",
          payload: data,
        });
      }
    }
  };
};

const ToggleTheme = () => {
  return {
    type: "TOGGLE_THEME",
  };
};

export { UpdateLocation, UpdateLocationData, ToggleTheme };
