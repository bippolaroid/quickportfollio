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
