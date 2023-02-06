import axios from "axios";

const instance = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	params: {
		api_key: "96400250aa5d7abe9f98153d7e39d825",
		language: "ko-KR",
	},
});

export default instance;            // 파일 밖에서도 사용할 수 있게 export 