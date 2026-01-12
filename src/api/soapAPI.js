export const getSoaps = async () => {
  return fetch("http://localhost:8080/api/soaps").then((res) => res.json());
};
