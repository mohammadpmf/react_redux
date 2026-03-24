const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-6RAubenEiFsz29R5G3Khy4pP";

const getCoinList = (page, currency) =>
    `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=${API_KEY}`;

const serachCoin = (query) =>
    `${BASE_URL}/search?query=${query}&x_cg_demo_api_key=${API_KEY}`;


const marketChart = (coin, currency = "usd", days = 7) =>
    `${BASE_URL}/coins/${coin}/market_chart?vs_currency=${currency}&days=${days}&x_cg_demo_api_key=${API_KEY}`;

export { getCoinList, serachCoin, marketChart };
