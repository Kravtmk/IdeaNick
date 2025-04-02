"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trpcRouter = void 0;
const server_1 = require("@trpc/server");
const ideas = [
  {
    nick: "cool-idea-nick-1",
    name: "Idea 1",
    description: "Description of idea 1...",
  },
  {
    nick: "cool-idea-nick-2",
    name: "Idea 2",
    description: "Description of idea 2...",
  },
  {
    nick: "cool-idea-nick-3",
    name: "Idea 3",
    description: "Description of idea 3...",
  },
  {
    nick: "cool-idea-nick-4",
    name: "Idea 4",
    description: "Description of idea 4...",
  },
  {
    nick: "cool-idea-nick-5",
    name: "Idea 5",
    description: "Description of idea 5...",
  },
];
const trpc = server_1.initTRPC.create();
exports.trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas };
  }),
});
//# sourceMappingURL=trpc.js.map
