import { combineReducers } from "redux";
import auth from "./auth";
import learningMode from "./learningMode";
import message from "./message";
import dogUploaded from "./dogUploaded";
export default combineReducers({
  auth,
  message,
  learningMode,
  dogUploaded
});
