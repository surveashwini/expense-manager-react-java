import { SUCCESS } from "../constants/staticValues";

export const getToastMessage = (summary, detail) => {
  return {
    severity: SUCCESS,
    summary,
    detail,
  };
};
