import Fuse from "fuse.js";
import gamesData from "~/static/games.json";
export default defineEventHandler((event) => {
  const query = getQuery(event);
  const q = query?.searchValue || "";
  
  const options = {
    keys: ["title", "provider"],
    threshold: 0.3,
  };

  const fuse = new Fuse(gamesData, options);

  if (!q) {
    return { data: gamesData };
  } else {
    return { data: fuse.search(q).map((o) => o.item) };
  }
});
