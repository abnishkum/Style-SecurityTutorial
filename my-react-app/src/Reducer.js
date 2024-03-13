export const todoReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [...state, { ...action.payload }];
      case "REMOVE_TODO":
        return state.filter((_, index) => index !== action.payload);
      case "TOGGLE_COMPLETED":
        return state.map((item, index) => {
          if (action.payload === index) {
            return {
              ...item,
              completed: !item.completed
            };
          }
          return item;
        });
      default:
        return state;
    }
  };
  
  export const errorReducer = (state, action) => {
    switch (action.type) {
      case "CLEAR_ERROR":
        return {
          ...state,
          message: ""
        };
  
      case "ERROR_ACTIVE":
        console.log(action.payload);
        return {
          ...state,
          message: action.payload
        };
      default:
        return state;
    }
  };
  