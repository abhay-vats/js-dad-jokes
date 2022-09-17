// Select elements
const button = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke');

// Helper data
const buttonText = [
  'Ugh.',
  '🤦🏻‍♂️',
  'omg dad.',
  'you are the worst',
  'seriously',
  'stop it.',
  'please stop',
  'that was the worst one'
];

// Setup joke fetch function
async function fetchJoke() {
  const url = 'https://icanhazdadjoke.com/';

  const response = await fetch(url, {
    headers: { Accept: 'application/json' }
  });

  return await response.json();
}

// Get a random text on each joke fetch
function getRandomArrayItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Handle the button click
async function handleClick() {
  const { joke } = await fetchJoke();

  jokeHolder.textContent = joke;
  button.textContent = getRandomArrayItem(buttonText);
}

// Attach event listener
button.addEventListener('click', handleClick);
