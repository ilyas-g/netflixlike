export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWU5MTIxM2I2Y2UxZDI5MWMxZDllZDIyMGIzMmU5NiIsInN1YiI6IjVlNTdmNmU0YTkzZDI1MDAxNzUzOTI4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jh77ZUV9adKPaGsxJbDRw08IlK-kRTS46jJLCDzl9Ek`
    }
  };

export function getImage(imagePath: string) {
    const baseURL = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';
    return baseURL + imagePath;
  }
