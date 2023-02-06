import axios from "axios";

const instance = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	params: {
		api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
		language: "ko-KR",
	},
});

export default instance;            // 파일 밖에서도 사용할 수 있게 export 