export const getRequestOptions = (url) => {
  return { method: "GET", url };
};

export const deleteRequestOptions = (url, index) => {
  return {
    method: "DELETE",
    url: `${url}${index}`,
  };
};

export const postRequestOptions = (url, data) => {
  return {
    method: "POST",
    url,
    data,
  };
};
