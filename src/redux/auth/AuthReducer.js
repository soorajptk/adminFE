const initailState = {
  admin:JSON.parse(localStorage.getItem('admin')),
};

export const AuthReducer = (state = initailState, action) => {
  switch (action.type) {
    case "AUTHENTICATION":
        localStorage.setItem("admin",JSON.stringify(action.payload))
        return { ...state, admin:action.payload};
    case "LOGOUT":
      localStorage.removeItem("admin")
       return {...state,admin:null}
    default:
      return state;
  }
};
