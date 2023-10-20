export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_GRAY_TOKEN}`
    }
  };

export function getImage(imagePath: string) {
    const baseURL = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';
    return baseURL + imagePath;
  }
