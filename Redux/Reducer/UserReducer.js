import React from 'react';
import { USER_STATE_CHANGED } from '../types';

const initialState = {
  currentUser: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_STATE_CHANGED:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
