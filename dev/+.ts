export const completionSpec: Fig.Spec = {
  name: "+",
  description: "Fig shortcuts",
  subcommands: [
    {
      icon: "💻",
      name: "Jump to autocomplete repo",
      insertValue: "\b\bcd ~/fig/projects/autocomplete\n",
      description: "Go ~/fig/projects/autocomplete",
    },
    {
      icon: "🛠",
      name: "Start dev server",
      insertValue: "\b\bnpm run dev",
      description: "npm run dev",
    },
    {
      icon: "fig://icon?type=github",
      name: "withfig/autocomplete",
      insertValue: "\b\bopen https://github.com/withfig/autocomplete",
      description: "Open Fig Autocomplete Github page",
    },
    {
      icon: "fig://icon?type=github",
      name: "withfig/fig issues",
      insertValue: "\b\bopen https://github.com/withfig/fig/issues",
      description: "Open Fig Issues Github page",
    },
    {
      icon: "fig://icon?type=git",
      name: "Push to staging",
      insertValue: "\b\bgit push origin staging",
      description: "Push current repo to origin/staging",
    },
    {
      icon: "fig://icon?type=heroku",
      name: "View logs",
      insertValue: "\b\bheroku logs --tail",
      description: "Tail logs for current heroku app",
    },
  ],
};
