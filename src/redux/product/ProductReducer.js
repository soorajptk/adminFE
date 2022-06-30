const initailState = {
    product:[],
  };
  
  export const ProductReducer = (state = initailState, action) => {
    switch (action.type) {
      case "PRODUCT":
          return { ...state,product:action.payload.response};
      default:
        return state;
    }
  };
  