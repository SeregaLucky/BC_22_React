import axios from 'axios';

axios.defaults.baseURL = 'https://newsapi.org/v2';
const apiKey = '33597ec26ed845a18da1dd8decec5ea1';

export const getNews = (value, page) => {
  return axios
    .get(`/everything?q=${value}&page=${page}&apiKey=${apiKey}`)
    .then(({ data }) => {
      console.log(data);
      return {
        articles: data.articles,
        value,
        totalResults: data.totalResults,
      };
    });
};

// export const getNews = (value, page) =>
//   axios.get(`/everything?q=${value}&page=${page}&apiKey=${apiKey}`);
