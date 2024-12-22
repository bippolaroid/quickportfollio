export function Card(props) {
  const { title, body, content, button } = props;
  const { name, link } = props.button;

  if (props.content.includes("vimeo")) {
    props.content = `<div style="filter: drop-shadow(3px 3px 3px #000); padding:56.25% 0 0 0;position:relative;"><iframe src="${props.content}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
  } else if (props.content.includes("iframe")) {
    props.content = `${props.content}`;
  } else if (props.content.includes("mp4")) {
    props.content = `
      <video width="100%" controls>
        <source src="${props.content}" type="video/mp4">
          Your browser does not support the video tag.
      </video>
      `;
  } else {
    props.content = `<img style="filter: drop-shadow(3px 3px 3px #000);" src=${props.content} alt=${props.title} loading="lazy" onerror="this.src='./assets/fallback.png'; this.style.height='72px'; this.style.width='72px'; this.alt='Placeholder image';" />`;
  }

  return `
  <div class="card">
  <h3 class="card__title">${props.title}</h3>
  ${props.content}
      <p class="card__body">${props.body}</p>
  <div class="card__actions">
        <a href="${props.button.link}">${props.button.name}</a>
  </div>
</div>
`;
}
