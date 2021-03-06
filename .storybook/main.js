module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    '@storybook/addon-a11y', //Accessibility tab
    '@storybook-addon-material-ui',
    '@storybook/addon-storysource',
    '@storybook/addon-docs'

    
  ]
  
}