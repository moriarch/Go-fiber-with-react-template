import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: {
      index: "./resources/js/index.tsx",
    },
  },
  output: {
    cleanDistPath: true,
    distPath: {
      root: "public",
    },
    copy: [{ from: "resources/images/", to: "images/" }],
  },
  html: {
    title: "Go Fiber",
  },
  dev: {
    writeToDisk: true,
  },
});
