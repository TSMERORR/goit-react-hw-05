import axios from 'axios';

export const getTrendingMovies = async () => {
  const options = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODczMTAxY2VjMzBjMThkZTJmYzMwZDQyMWJiYjI3OCIsIm5iZiI6MTcyNDg3MjIxMS4zODMyNSwic3ViIjoiNjZjZjcyMWVmNTA3ZmIxODYzYmQ4NDliIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.eEmqaVr7ikEUW_ByWkLWeMZw7gYBCe7EVxVx1rfitHo',
    },
  };
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  );

  return data;
};

export const getMovieDetails = async movieId => {
  const options = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODczMTAxY2VjMzBjMThkZTJmYzMwZDQyMWJiYjI3OCIsIm5iZiI6MTcyNDg3MjIxMS4zODMyNSwic3ViIjoiNjZjZjcyMWVmNTA3ZmIxODYzYmQ4NDliIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.eEmqaVr7ikEUW_ByWkLWeMZw7gYBCe7EVxVx1rfitHo',
    },
  };
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    options
  );

  return data;
};

export const getMovieCredits = async movieId => {
  const options = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODczMTAxY2VjMzBjMThkZTJmYzMwZDQyMWJiYjI3OCIsIm5iZiI6MTcyNDg3MjIxMS4zODMyNSwic3ViIjoiNjZjZjcyMWVmNTA3ZmIxODYzYmQ4NDliIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.eEmqaVr7ikEUW_ByWkLWeMZw7gYBCe7EVxVx1rfitHo',
    },
  };
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    options
  );

  return data;
};

export const getMovieReviews = async movieId => {
  const options = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODczMTAxY2VjMzBjMThkZTJmYzMwZDQyMWJiYjI3OCIsIm5iZiI6MTcyNDg3MjIxMS4zODMyNSwic3ViIjoiNjZjZjcyMWVmNTA3ZmIxODYzYmQ4NDliIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.eEmqaVr7ikEUW_ByWkLWeMZw7gYBCe7EVxVx1rfitHo',
    },
  };
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    options
  );

  return data;
};

export const getMovies = async searchValue => {
  const options = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODczMTAxY2VjMzBjMThkZTJmYzMwZDQyMWJiYjI3OCIsIm5iZiI6MTcyNDg3MjIxMS4zODMyNSwic3ViIjoiNjZjZjcyMWVmNTA3ZmIxODYzYmQ4NDliIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.eEmqaVr7ikEUW_ByWkLWeMZw7gYBCe7EVxVx1rfitHo',
    },
  };
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${searchValue}`,
    options
  );

  return data;
};