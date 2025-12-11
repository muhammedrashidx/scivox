import * as post1 from "./posts/imagination.mdx";
import * as post2 from "./posts/launch-window.mdx";
import * as post3 from "./posts/climate-ledger.mdx";
import * as post4 from "./posts/health-frontiers.mdx";
import * as post5 from "./posts/mobility-shift.mdx";
import * as post6 from "./posts/policy-signals.mdx";

import * as review1 from "./reviews/wireless-audio.mdx";
import * as review2 from "./reviews/robot-companion.mdx";

import * as ep1 from "./podcasts/signal-noise.mdx";
import * as ep2 from "./podcasts/ethics-ai.mdx";
import * as ep3 from "./podcasts/orbital-habitats.mdx";
import * as ep4 from "./podcasts/climate-dashboards.mdx";

import * as expl1 from "./explainers/quantum-basics.mdx";
import * as expl2 from "./explainers/fusion-101.mdx";

export type MdxModule = {
  metadata: Record<string, any>;
  default: React.ComponentType;
};

function shapePosts(mod: MdxModule) {
  return { ...mod.metadata, Content: mod.default };
}

export const posts = [post1, post2, post3, post4, post5, post6].map(shapePosts);
export const reviews = [review1, review2].map(shapePosts);
export const episodes = [ep1, ep2, ep3, ep4].map(shapePosts);
export const explainers = [expl1, expl2].map(shapePosts);

