const likesApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RAGwAMc1vyzTWmF6xGjO/likes';

export const getLikes = async () => {
  const response = await fetch(likesApi);
  const showLikes = await response.json();
  return showLikes;
};

export const putLikes = async (itemId) => {
  const response = await fetch(likesApi, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ itemId }),
  });
  const likes = response.json();
  return likes;
};
