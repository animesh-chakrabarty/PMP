import api from "./Axios";

export const getProductDetails = async(docId) => {
    let res = await api.get(`http://localhost:1337/api/products/${docId}?populate=*`);
    return res?.data?.data;
}