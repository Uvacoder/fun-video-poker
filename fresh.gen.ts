// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_404.jsx";
import * as $1 from "./routes/_middleware.jsx";
import * as $2 from "./routes/api/joke.ts";
import * as $3 from "./routes/deal.jsx";
import * as $4 from "./routes/draw.jsx";
import * as $5 from "./routes/index.jsx";
import * as $6 from "./routes/player.jsx";
import * as $$0 from "./islands/Card.jsx";
import * as $$1 from "./islands/Debug.jsx";
import * as $$2 from "./islands/PokerPlayer.jsx";

const manifest = {
  routes: {
    "./routes/_404.jsx": $0,
    "./routes/_middleware.jsx": $1,
    "./routes/api/joke.ts": $2,
    "./routes/deal.jsx": $3,
    "./routes/draw.jsx": $4,
    "./routes/index.jsx": $5,
    "./routes/player.jsx": $6,
  },
  islands: {
    "./islands/Card.jsx": $$0,
    "./islands/Debug.jsx": $$1,
    "./islands/PokerPlayer.jsx": $$2,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
