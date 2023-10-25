
/*
 This script is responsible for fetching dad jokes from the icanhazdadjoke API and displaying them on the page.
 
const jokes = document.querySelector('#jokes');
const button = document.querySelector('#dadJokeButton');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    console.log(jokeText);
    const newLI = document.createElement('LI');
    
}
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json', } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        console.log(res.data.joke);
        return res.data.joke;
    }
    catch (e) {
        return "Sorry No Jokes right now."
    }   
}
*/

const jokeButton = document.querySelector('.getJoke');
const jokeButtonSpan = jokeButton.querySelector('.jokeText');
const jokeHolder = document.querySelector('.joke p');
const loader = document.querySelector('.loader');

const buttonText = [
  'push',
  '🤦🏻‍♂️',
  'keep it coming.',
  'one more ',
  'push me',
  'last time.',
  'you cant stop',
  'oh yea',
];

async function fetchJoke() {
  // turn loader on
  loader.classList.remove('hidden');
  const response = await fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await response.json();
  // turn the loader off
  loader.classList.add('hidden');
  return data;
}

function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if (item === not) {
    console.log('Ahh we used that one last time, look again');
    return randomItemFromArray(arr, not);
  }
  return item;
}

async function handleClick() {
  const { joke } = await fetchJoke();
  jokeHolder.textContent = joke;
  jokeButtonSpan.textContent = randomItemFromArray(
    buttonText,
    jokeButtonSpan.textContent
  );
}

jokeButton.addEventListener('click', handleClick);








