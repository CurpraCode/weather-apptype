/* eslint-disable import/no-anonymous-default-export */
import { AlertState, AlertAction, SET_ALERT } from "../types";

const initialState: AlertState = {
  message: ''
}

export default (state = initialState, action: AlertAction): AlertState => {
  switch(action.type) {
    case SET_ALERT:
      return {
        message: action.payload
      }
    default:
      return state;
  }
}