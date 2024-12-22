export function Render(data) {
  const root = document.getElementById("root");
  const child = document.createElement("div");
  child.id = "qp-main";
  child.innerHTML = data;
  root.appendChild(child);
}

export async function loadData(database) {
  try {
    const response = await fetch(database);
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Could not fetch data. Reason: ${error.message}`);
  }
}
