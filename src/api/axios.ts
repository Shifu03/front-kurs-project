import axios from "axios";


const agent = axios.create({
	baseURL: "http://localhost:8383",
});

agent.defaults.headers.post["Content-Type"] = "application/json";
agent.defaults.headers.post["Accept"] = "application/json";

agent.interceptors.request.use((config: any) => {
	const result = { ...config };
	if (result.headers) {
		result.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;
	}
	return result;
});

agent.interceptors.response.use(
	(config: any) => {
	  return config;
	},
	async (error: any) => {
	  const originRequest = error.config;
	  if (
		error.response?.status === 401 &&
		error.config &&
		!error.config._isRetry
	  ) {
		originRequest._isRetry = true;
		try {
		  const refreshToken = localStorage.getItem("refreshToken");
		  const serverResponse = await agent.post(`/auth/refresh`, {
			refreshToken: refreshToken,
		  });
  
		  localStorage.setItem("accessToken", serverResponse.data.accessToken);
		  localStorage.setItem("refreshToken", serverResponse.data.refreshToken);
  
		  return agent.request(originRequest);
		} catch (repeatedError) {
		  localStorage.removeItem("accessToken");
		  localStorage.removeItem("refreshToken");
		  localStorage.removeItem("typeAuthorization");
		}
	  }
	  // When error code !== 401
	  throw error;
	},
  );

export default agent;
