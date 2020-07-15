// Action Suite!
// 1 - Action Creators
//      function that create (return) action objects
// 2 - Action Objects
// 3 - Action Types

export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const removeFeature = (feature) => {
  return { type: REMOVE_FEATURE, payload: feature };
};

export const ADD_FEATURE = "ADD_FEATURE";
export const addFeature = (feature) => {
  return { type: ADD_FEATURE, payload: feature };
};
