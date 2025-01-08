import { AxiosResponse } from "axios";
import agent from "./axios";

export const fetchPostLogin = (email: string, password: string): Promise<AxiosResponse<any>> => {
    return agent.post("/api/auth/login", {
      email,
      password
    });
  };

export const fetchGetProfile = (): Promise<AxiosResponse<any>> => {
  return agent.get("/api/user/profile");
};

export const fetchPostRegistration = (email: string, password: string): Promise<AxiosResponse<any>> => {
  return agent.post("/api/auth/registration", {
    email,
    password
  });
};

export const fetchGetAllEvents = (): Promise<AxiosResponse<any>> => {
  return agent.get("/api/events/all_events");
};

export const fetchGetEvents = (category: number): Promise<AxiosResponse<any>> => {
  return agent.get("/api/events/catalog", {params: {category: category}});
};

export const fetchGetCurrentEvent = (title: string): Promise<AxiosResponse<any>> => {
  return agent.get("/api/events/catalog", {params: {title: title}});
};