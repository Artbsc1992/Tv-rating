const apiShows = 'https://api.tvmaze.com/shows?page=0';

const fetchShows = async () => {
  const response = await fetch(apiShows);
  let shows = await response.json();
  shows = shows.slice(0, 10);
  const mapedShows = shows.map((show) => ({
    id: show.id,
    name: show.name,
    img: show.image.medium,
  }));
  return mapedShows;
};

export default fetchShows;