<<<<<<< HEAD
// index.js
const root = document.getElementById('root');

class Project {
  constructor(title, body, image, repoName, repoLink, live) {
    this.title = title;
    this.body = body;
    this.image = image;
    this.repo = {
      name: repoName,
      link: repoLink,
    };
    this.live = live || null;
  }
}

const data = [
  new Project(
    'Project 1',
    'This is a description of project 1.',
    'project-1.jpg',
    'View on Github',
    'https://github.com/user/project-1',
    'https://user-project-1.herokuapp.com'
  ),
  new Project(
    'Project 2',
    'This is a description of project 2.',
    'project-2.jpg',
    'View Project',
    'https://github.com/user/project-2',
  )
];

function renderProject(project) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img 
      class="card__image" 
      src="${project.image}" 
      alt="${project.title}" 
      loading="lazy" 
      onerror="this.src='./files/fallback.png'; this.style.height='72px'; this.style.width='72px'; this.alt='Placeholder image';"
    >
    <h3 class="card__title">${typewriterEffect(project.title)}</h2>
    <p class="card__body">${project.body}</p>
    <div class="card__actions">
      <a href="${project.repo.link}" target="_blank" tabindex="0">${project.repo.name}</a>
      ${project.live ? `<a href="${project.live}" target="_blank" tabindex="0">Live Demo</a>` : ``}
    </div>
  `;
  root.appendChild(card);
}

function typewriterEffect(text) {
  return text
    .split('')
    .map((char, index) => `${char}`)
    .join('');
}

data.forEach(project => renderProject(project));
=======
const sentence =
  "Lowkey sipping tea while the rizz is immaculate, but this whole situationship? Big sus, no cap."
const sentenceArr = sentence.split("").map((item) => ({
  letter: item,
  status: 0,
}))
let counter = 0
const root = document.getElementById("root")
let keysArr = []
const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
resetButton.onclick = handleReset;
root.after(resetButton);

for (var i = 0; i < sentenceArr.length; i++) {
  var letterSpan = document.createElement("span")
  letterSpan.id = `letter-${i}`
  letterSpan.style.opacity = ".5"
  if (i === 0) {
    letterSpan.style.textDecoration = "underline"
  }
  letterSpan.innerHTML = sentenceArr[i].letter
  root.appendChild(letterSpan)
}

function logger() {
  console.log(keysArr)
}

function handleKeyPress(e) {
  if (e.key === sentenceArr[counter].letter) {
    var letter = document.getElementById(`letter-${counter}`)
    letter.style.opacity = "1"
    letter.style.textDecoration = "none"
    counter++

    letter = document.getElementById(`letter-${counter}`)
    if (counter < sentenceArr.length) {
      letter.style.textDecoration = "underline"
    }
  }
  keysArr.push({ key: `${e.key}`, time: `${Math.round(e.timeStamp / 1000)}` })
}

function handleReset() {
  counter = 0;
  for (let i = 0; i < sentenceArr.length; i++) {
    var letterSpan = document.getElementById(`letter-${i}`)
    if (i === 0) {
      letterSpan.style.textDecoration = "underline"
    } else {
      letterSpan.style.textDecoration = ""
    }
    letterSpan.style.opacity = ".5"
    letterSpan.innerHTML = sentenceArr[i].letter
  }
  keysArr = []
}

document.addEventListener("keydown", handleKeyPress)
>>>>>>> parent of cdfd12a (added ai integration)
