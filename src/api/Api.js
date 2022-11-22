import axios from "axios";

const url = 'https://investing-cryptocurrency-markets.p.rapidapi.com/coins/get-news'

const cryptoNews = async ()=>{
  try {
    const {data: {data}} = await axios.get(url, {
      params: {
        pair_ID: '1057391', 
        page: '1', 
        time_utc_offset: '28800', 
        lang_ID: '1'
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_API_KEY,
        'X-RapidAPI-Host': 'investing-cryptocurrency-markets.p.rapidapi.com'
      }
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default cryptoNews