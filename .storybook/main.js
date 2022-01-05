module.exports = {
  core: { builder: "storybook-builder-vite" },
  stories: [
    "../src/**/*.stories.mdx",
    "../src/components/**/*.+(js|ts|svelte)",
  ],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf",
  ],
};
