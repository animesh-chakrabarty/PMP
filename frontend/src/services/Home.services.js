import api from "./Axios";
import { HomeEndpoints } from "../common/EndPoints";

export const getLatestModels = async () => {
  let res = await api.get(HomeEndpoints.products);
  return res?.data?.data?.filter((item) => item.isLatestModel == true);
};


export const getBestSales = async () => {
  let res = await api.get(HomeEndpoints.products);
  return res?.data?.data?.filter((item) => item.isBestSale == true);
};