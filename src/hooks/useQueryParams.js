import React from "react";
import { useLocation, useHistory } from "react-router-dom";

function useQueryParams() {
  const { search, pathname } = useLocation();
  const history = useHistory();

  const searchParams = new URLSearchParams(search);
  const queryParams = React.useMemo(() => searchParams, [search]);

  const createQueryString = (queryObject = {}) => {
    let queryString = Object.keys(queryObject)
      .filter(
        (key) =>
          queryObject[key] &&
          !(Array.isArray(queryObject[key]) && !queryObject[key].length)
      )
      .map((key) => {
        return Array.isArray(queryObject[key])
          ? queryObject[key]
              .map(
                (item) =>
                  `${encodeURIComponent(key)}=${encodeURIComponent(item)}`
              )
              .join("&")
          : `${encodeURIComponent(key)}=${encodeURIComponent(
              queryObject[key]
            )}`;
      })
      .join("&");
    return queryString ? `?${queryString}` : "";
  };

  function setQueryParams(queryObj) {
    history.push({
      pathname: pathname,
      search: createQueryString(queryObj),
    });
  }

  return [queryParams, setQueryParams];
}

export default useQueryParams;
