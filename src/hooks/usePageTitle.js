import { useEffect } from "react";
import { setTitle } from "../helpers/jsHelper";

// TODO: use react-helmet instead if time allows
export const usePageTitle = (title, deps = []) => {
  useEffect(() => {
    setTitle(title);
  }, [title, ...deps]);
}