const initailState = {
    product:[],
    singleProduct:{}
  };
  
  export const ProductReducer = (state = initailState, action) => {
    switch (action.type) {
      case "PRODUCT":
          return { ...state,product:action.payload.response};
      case "SINGLEPRODUCT":
          return { ...state,singleProduct:action.payload};
      default:
        return state;
    }
  };
  