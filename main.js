const ConsonantList = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z'];
const VowelList = ['a','e','i','o','u'];
const TodoList = [
  'Page with a grid of Products',
  'Page with a Nav bar and a Carousel',
  'Page with emphasis on one Product',
  'Page with emphasis on the local of the company local:(https://randomstreetview.com)',
  'Page with Neon Theme design',
  'Page with Parallax on the background and floating modals',
  'Page with Gifs like Valorant webpage',
  'Page showing a mobile app of the company',
  'Page with Sketch design (pencil-like)',
];
const GenreList = [
  'Technology',
  'Food',
  'Nature',
  'Sports',
  'E-sports',
  'Aviation',
  'Medical',
  'Sleep/Meditate',
  'Music',
  'Geometry',
  'Love/Emotions',
  'Clothes'
];
const ColorsPalleteList = [
  ['#7F58E8', '#5C5DF2', '#5E80DB'],
  ['#5DE833', '#35F28A', '#3BCEDB'],
  ['#18688F', '#DB933B', '#8F540E'],
  ['#FFD66E','#17378F','#486FDB'],
  ['#6EFFB8','#8F2517','#DB4E3B'],
  ['#768A8C','#F2FEFF','#B8D6D9'],
  ['#1FA88D','#667370','#6AD984'],
  ['#D96466','#A8FFC9','#418C5D'],
  ['#4A5F8F','#A8C2FF','#E6C270'],
  ['#FF82C6','#69E9F1','#86D6DB'],
]


function chooseRandom(Array) {
  const bottomRange = 0;
  const topRange = Array.length;
  return Array[Math.floor(Math.random() * (topRange - bottomRange) + bottomRange)];
}

function createName() {
  let name = '';
  for(let numberOfSyllables = Math.floor(Math.random() * (6 - 1) + 1); numberOfSyllables > 0; numberOfSyllables--){
    let syllable = chooseRandom(ConsonantList) + chooseRandom(VowelList);
    name = name + syllable;
  }
  let upperName = name.replace(name[0], name[0].toUpperCase());
  return upperName;
}


function createRandomIdeia() {
  const name = createName();
  const age = Math.floor(Math.random() * 300);
  const todo = chooseRandom(TodoList);
  const genre = chooseRandom(GenreList);
  const pallete = chooseRandom(ColorsPalleteList);

  linkToHtml(name, age, todo, genre, pallete);

  /* console.log(`Olá Somos a ${name}\nestamos no mercado à ${age} anos\nqueremos que você faça: ${todo}\nNosso setor do mercado é ${genre}`);
  console.log('\nQueremos que use as seguintes cores: \n');
  pallete.forEach(color => {
    console.log(color);
  }); */
}

function linkToHtml(name, age, todo, genre, pallete) {
  let nameH1 = document.querySelector('.js-name');
  let ageSpan = document.querySelector('.js-age');
  let todoSpan = document.querySelector('.js-todo');
  let genreSpan = document.querySelector('.js-genre');
  let colorDiv1 = document.querySelector('.js-color1');
  let colorDiv2 = document.querySelector('.js-color2');
  let colorDiv3 = document.querySelector('.js-color3');

  nameH1.innerHTML = name;
  ageSpan.innerHTML = "No mercado há " + age + " Anos";
  todoSpan.innerHTML = "Faça: " + todo;
  genreSpan.innerHTML = "Área de Atuação: " + genre;
  colorDiv1.innerHTML = pallete[0];
  colorDiv1.style.backgroundColor = pallete[0];
  colorDiv2.innerHTML = pallete[1];
  colorDiv2.style.backgroundColor = pallete[1];
  colorDiv3.innerHTML = pallete[2];
  colorDiv3.style.backgroundColor = pallete[2];
}

document.querySelector('.js-button').addEventListener('click', createRandomIdeia);
