import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: {
      index: "./resources/index.tsx",
    },
  },
  output: {
    distPath: {
      root: "public",
    },
  },
  html: {
    title: "Example",
  },
  dev: {
    writeToDisk: true,
  },
});
