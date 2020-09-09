export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=sY6D8QOI7yF8akNLvO4ClZ9lDfdzrmZI`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map(gif => ({
    id: gif.id,
    title: gif.title,
    url: gif.images?.downsized_medium.url
  }))

  return gifs;
};