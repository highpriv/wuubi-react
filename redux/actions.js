export const setAppSettings = (settings) => ({
  type: "SET_APP_SETTINGS",
  payload: settings,
});

export const fetchAppSettings = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/settings"
      );
      const settings = await response.json();
      dispatch(setAppSettings(settings));
    } catch (error) {
      console.error("Error fetching app settings:", error);
    }
  };
};
