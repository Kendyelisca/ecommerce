import { axiosInstance } from '../api/axiosInstance';

export const getAllProductCart = async (token) => {
  try {
    const res = await axiosInstance.get('cart', {
      headers: { Authorization: `Bearer${token}` },
    });
    return (await res).data;
  } catch (error) {
    console.log(error);
  }
};
