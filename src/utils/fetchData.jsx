export const exercisesOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5dda520d68msh03c5e1d21a74d5ep1c47ecjsn1954df4da40d',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
