// Remova os comentários a medida que for implementando as funções

export const searchCities = async (term) => {
  try {
    const API_CITY = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=adc8c4af72734b528fd220507231008&q=${term}`);
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

export const getWeatherByCity = (/* cityURL */) => {
//   seu código aqui
};
