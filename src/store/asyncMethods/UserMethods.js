import axios from "axios";

export const fetchData = (userId) => {

  const API_URL = "https://wicked-bear-ring.cyclic.cloud/api";

  console.log("fetching data");

  return async (dispatch, getState) => {
    dispatch({ type: "SET_LOADER" });

    try {

      const profileData = await axios.get(`${API_URL}/users/${userId}/profile`);
      const metricData =  await axios.get(`${API_URL}/users/${userId}/metrics`);



      dispatch({ type: "SET_PROFILE_DATA", payload: profileData.data });
      dispatch({ type: "SET_METRIC_DATA", payload: metricData.data });

      dispatch({ type: "CLOSE_LOADER" });
    

    } catch (error) {
        console.log(error);
        dispatch({ type: "CLOSE_LOADER" });
    }

  };
};

export const follow = (userId) =>{

    const API_URL = "https://wicked-bear-ring.cyclic.cloud/api";

    console.log("Calling follow API");

    return async (dispatch) => {
        try {
            axios.post(`${API_URL}/users/${userId}/follow`)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
              console.error('Error following user:', error);
            });
        } catch (error) {
            console.log();
        }
    };

}

export const unFollow = (userId) =>{

    const API_URL = "https://wicked-bear-ring.cyclic.cloud/api";

    console.log("Calling Unfollow API");

    return async (dispatch) => {
        try {
            axios.post(`${API_URL}/users/${userId}/unfollow`)
            .then(response => {
             // Update the state to indicate that the user is now unfollowed
             console.log(response);
            })
            .catch(error => {
              console.error('Error unfollowing user:', error);
            });
        } catch (error) {
            console.log();
        }
    };

}

