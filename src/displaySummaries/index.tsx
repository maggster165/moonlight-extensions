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
