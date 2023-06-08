export const apiRequest = () => {
  return fetch(`https://newsapi.org/v2/everything?q=Apple&from=2023-06-07&sortBy=popularity&apiKey=de01d880c91b40fcab375895897a7b08`)
  .then(res => {
    if(res.ok) {
      return res.json(); 
    } else {
      throw new Error(res.status);
    }
  });
}