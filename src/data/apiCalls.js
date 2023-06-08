export const fetchData = () => {
  return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=de01d880c91b40fcab375895897a7b08`)
  .then(res => {
    if(res.ok) {
      return res.json(); 
    } else {
      throw new Error(res.status);
    }
  });
}