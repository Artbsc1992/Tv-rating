const fetchShow = async (showId) => {
  const res = await fetch(`https://api.tvmaze.com/shows/${showId}`);
  if (!res.ok) {
    throw new Error('Something went wrong fetching the given show.');
  }
  const show = await res.json();
  return show;
};

export default fetchShow;