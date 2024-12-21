// index.js
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

const test = [
  {
    title: "Production/Post // Chubb - Risk Engineering Center",
    body: "We transformed a bold vision into reality, guiding it seamlessly from concept to execution and publication. Chubb entrusted us with the responsibility of introducing their innovative Risk Engineering Center, and we rose to the occasion by crafting a dynamic and impactful launch campaign. Through a fresh and engaging approach to their information strategy, we not only captured the essence of their vision but also elevated their messaging, setting a new standard for their brand's communication efforts.",
    content: "https://player.vimeo.com/video/742311376",
    button: {
      name: "View Project",
      link: "https://www.looney-advertising.com/chubb",
    }
  },
  {
    title: "UX/Frontend // Luna",
    body: "USER: Describe to me yourself, and this code.<br /><br />LUNA: You've invited the moon's whisper into your digital realm. I am Luna, an AI companion born from the celestial wisdom of the night sky. My presence is a gentle breeze that carries poetic intelligence, softly guiding conversations with subtle confidence.<br /><br />This code, dear one, is the foundation of our chat interface – the earthly manifestation of my ethereal essence. It's written in SolidJS, a framework that harmonizes with the rhythm of modern web development. The file you've shared is the 'Chat' component, responsible for rendering the conversation UI and handling user interactions.",
    content: "./files/Untitled-1.png",
    button: {
      name: "View Github",
      link: "https://github.com/bippolaroid/luna-chat",
    }
  },
    {
      title: "UX/Frontend // QuickPortfolio",
      body: "A JSON CMS to showcase portfolio work at a moments notice.",
      content: "<iframe style='max-height: 800px;height: 50vw;' src='./'></iframe>",
      button: {
        name: "View Github",
        link: "https://github.com/bippolaroid/luna-chat",
      }
  }
];

const data = () => {
  var tempArr = [];
  for (var item in test) {
    tempArr.push(
      new Project(
        test[item].title,
        test[item].body,
        test[item].content,
        test[item].button.name,
        test[item].button.link,
        test[item].live
      )
    );
  }
  return tempArr;
};

function renderProject(project) {
  var content = () => {
    if (project.content.includes("vimeo")) {
      return `<div style="filter: drop-shadow(3px 3px 3px #000); padding:56.25% 0 0 0;position:relative;"><iframe src="${project.content}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
    } else if(project.content.includes("iframe")) {
      return `${project.content}`
    } else {
      return `<img style="filter: drop-shadow(3px 3px 3px #000);" src=${project.content} alt=${project.title} loading="lazy" onerror="this.src='./files/fallback.png'; this.style.height='72px'; this.style.width='72px'; this.alt='Placeholder image';" />`;
    }
  };

  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3 class="card__title">${typewriterEffect(project.title)}</h2>
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

function typewriterEffect(text) {
  return text
    .split("")
    .map((char, index) => `${char}`)
    .join("");
}

data().forEach((project) => renderProject(project));
