const joke = document.querySelector('#joke');
const button = document.querySelector('#jokeBtn');

const fetchJoke = () => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  fetch('https://icanhazdadjoke.com/', config)
    .then((response) => response.json())
    .then((data) => {
      joke.innerHTML = data.joke;
    });
};

fetchJoke();

button.addEventListener('click', fetchJoke);
