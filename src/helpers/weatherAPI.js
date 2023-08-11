// Remova os comentários a medida que for implementando as funções
const myToken = import.meta.env.VITE_TOKEN;
export const searchCities = async (term) => {
  try {
    const API_CITY = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${myToken}&q=${term}`);
    const data = await API_CITY.json();
    if (data.length > 0) {
      return data;
    }
    window.alert('Nenhuma cidade encontrada');
    return [];
  } catch (err) {
    alert(err.message);
  }
};

export const getWeatherByCity = async (cityURL) => {
  const API_WEATHER = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${myToken}&q=${cityURL}`);
  const data = await API_WEATHER.json();
  return {
    name: data.location.name,
    country: data.location.country,
    temp: data.current.temp_c,
    condition: data.current.condition.text,
    icon: data.current.condition.icon,
    url: cityURL,
  };
};
