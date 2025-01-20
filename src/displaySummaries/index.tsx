import { ExtensionWebExports } from "@moonlight-mod/types";

// https://moonlight-mod.github.io/ext-dev/webpack/#patching
export const patches: ExtensionWebExports["patches"] = [
  {
    find: "SUMMARIZEABLE.has",
    replace: {
      match: /\i\.hasFeature\(\i\.\i\.SUMMARIES_ENABLED\w+?\)/g,
      replacement: "true"
    }
  }
];
// https://moonlight-mod.github.io/ext-dev/webpack/#webpack-module-insertion
export const webpackModules: ExtensionWebExports["webpackModules"] = {
  entrypoint: {
    entrypoint: true
  },

  someLibrary: {
    // Keep this object, even if it's empty! It's required for the module to be loaded.
  }
};
