const root = document.getElementById("root");

class Project {
  constructor(title, body, content, name, link, live) {
    this.title = title;
    this.body = body;
    this.content = content;
    this.button = {
      name: name,
      link: link,
    };
    this.live = live || null;
  }
}

async function data() {
  const tempArr = [];
  await fetch('db.json')
  .then(response => response.json())
  .then(data => {
    for(var item in data) {
      tempArr.push(new Project(data[item].title, data[item].body, data[item].content, data[item].button.name, data[item].button.link, data[item].live));
    }
  })
  return await tempArr;
}

const database = await data();

function renderProject(project) {
  var content = () => {
    if (project.content.includes("vimeo")) {
      return `<div style="filter: drop-shadow(3px 3px 3px #000); padding:56.25% 0 0 0;position:relative;"><iframe src="${project.content}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
    } else if (project.content.includes("iframe")) {
      return `${project.content}`;
    } else if (project.content.includes("mp4")) {
      return `<video width="100%" controls>
  <source src="${project.content}" type="video/mp4">
Your browser does not support the video tag.
</video>`;
    } else {
      return `<img style="filter: drop-shadow(3px 3px 3px #000);" src=${project.content} alt=${project.title} loading="lazy" onerror="this.src='./files/fallback.png'; this.style.height='72px'; this.style.width='72px'; this.alt='Placeholder image';" />`;
    }
  };

  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3 class="card__title">${project.title}</h2>
    ${content()}
    <p class="card__body">${project.body}</p>
    <div class="card__actions">
      <a href="${project.button.link}" target="_blank" tabindex="0">${
    project.button.name
  }</a>
      ${
        project.live
          ? `<a href="${project.live}" target="_blank" tabindex="0">Live Demo</a>`
          : ``
      }
    </div>
  `;
  root.appendChild(card);
}
console.log(database);
database.forEach((project) => renderProject(project));
