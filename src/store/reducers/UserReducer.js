const initState = {
    loading: false,
    profileData: {},
    metricsData: {},
    isFollow: false,
}


export const FetchData = (state = initState, action) =>{
    if(action.type === 'SET_LOADER'){
        return {
            ...state,
            loading: true,
        }
    }else if(action.type === 'CLOSE_LOADER'){
        return {
            ...state,
            loading: true,
        }
    }
    else if(action.type === 'SET_PROFILE_DATA'){
        return {
            ...state,
            profileData: action.payload,
        }
    }
    else if(action.type === 'SET_METRIC_DATA'){
        return {
            ...state,
            metricsData: action.payload,
        }
    }
    else if(action.type === 'FOLLOW'){
        return {
            ...state,
            isFollow: true,
            profileData: {
              ...state.profileData,
              followers: (state.profileData.followers || 0) + 1, // Increase followers by 1
            },
        }
    }
    else if(action.type === 'UNFOLLOW'){
        console.log("Unfollow");
        return {
            ...state,
        isFollow: false,
        profileData: {
          ...state.profileData,
          followers: Math.max((state.profileData.followers || 0) - 1, 0), // Decrease followers by 1 but keep it >= 0
        },
        }
    }else{
        return state;
    }

}