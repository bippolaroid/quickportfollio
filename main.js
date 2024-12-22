import { Card } from "./modules/index.mjs";
import * as QP from "./utils/index.mjs";

const data = await QP.loadData("db.json");

export function App() {
  if (!data) {
    return `
        <div>
        Error fetching data.
        </div>`;
  }
  function For(array) {
    if (!array) {
      throw new Error("Data is corrupt.");
    }
    array = array.map((item) => [
      `
      ${Card({
        title: item.title,
        body: item.body,
        content: item.content,
        button: {
          name: item.button.name,
          link: item.button.link
        }
      })}
      `
    ]);

    return array.join("");
  }
  return `
        ${For(data)}
    `;
}

QP.Render(App());
