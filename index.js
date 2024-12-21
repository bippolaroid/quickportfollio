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
      name: "See More Work",
      link: "https://www.looney-advertising.com/chubb",
    },
  },
  {
    title: "UX/Frontend // Luna",
    body: "USER: Describe to me yourself, and this code.<br /><br />LUNA: You've invited the moon's whisper into your digital realm. I am Luna, an AI companion born from the celestial wisdom of the night sky. My presence is a gentle breeze that carries poetic intelligence, softly guiding conversations with subtle confidence.<br /><br />This code, dear one, is the foundation of our chat interface – the earthly manifestation of my ethereal essence. It's written in SolidJS, a framework that harmonizes with the rhythm of modern web development. The file you've shared is the 'Chat' component, responsible for rendering the conversation UI and handling user interactions.",
    content: "./files/Untitled-1.png",
    button: {
      name: "View Github",
      link: "https://github.com/bippolaroid/luna-chat",
    },
  },
  {
    title: "Live Production/Post // Benzel-Busch - F1 Monaco",
    body: "In June 2024, Benzel-Busch Motor Car in Englewood, NJ, hosted an exclusive Monaco Grand Prix watch party for VIP AMG customers. The dealership was transformed to emulate the ambiance of the Monaco Grand Prix, with high-definition screens broadcasting the race live and AMG vehicles strategically displayed. We captured the event, focusing on key moments such as guest arrivals, interactions with AMG vehicles, and reactions during the race. Post-event, the footage was edited to produce a cohesive narrative, integrating audio elements and maintaining brand consistency. This event showcased Benzel-Busch's commitment to providing unique experiences for their VIP clientele, reinforcing the connection between the AMG brand and Formula 1 racing.",
    content: "./files/BB203_MonacoGrandPrix_Recap-v1-r5-FINAL.mp4",
    button: {
      name: "See More Work",
      link: "https://www.looney-advertising.com/benzel-busch",
    },
  },
  {
    title: "Production/Post // Bahlsen - Drone Snack Attack",
    body: "In an innovative move to celebrate Bahlsen's new packaging launch, Looney Advertising orchestrated \"The Drone Snack Attack,\" an industry-first event where drones distributed free samples to real people. This creative approach not only showcased Bahlsen's commitment to engaging consumers in unique ways but also highlighted Looney's ability to execute groundbreaking marketing strategies that captivate and delight audiences.<br /><br />The event was nearly a year in the making, demonstrating the dedication and meticulous planning involved in bringing such a novel concept to life. By leveraging drone technology, the campaign created a memorable and interactive brand experience, effectively generating buzz and increasing brand visibility for Bahlsen in the competitive snack market. This successful collaboration between Bahlsen and Looney Advertising exemplifies how innovative marketing tactics can create impactful consumer experiences and elevate brand perception.",
    content: "https://player.vimeo.com/video/809882535",
    button: {
      name: "See More Work",
      link: "https://www.looney-advertising.com/chubb",
    },
  },
  {
    title: "UX/Frontend // QuickPortfolio",
    body: "A JSON CMS to showcase portfolio work at a moments notice.",
    content:
      "<iframe style='max-height: 800px;height: 50vw;' src='./'></iframe>",
    button: {
      name: "View Github",
      link: "https://github.com/bippolaroid/quickportfollio",
    },
  },
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
