import {withConsole} from '@storybook/addon-console' //Display the console message in storybook
import {addDecorator} from '@storybook/react'
import { muiTheme } from 'storybook-addon-material-ui'



export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      {
        name: 'white',
        value: '#FFFFFF',
      },
      {
        name: 'black',
        value: '#000000',
      },
      {
        name: 'gray',
        value: 'rgb(242, 242, 242)',
      },
    ],
  },


}


addDecorator((storyFn, context) => withConsole()(storyFn)(context))// Console message

export const decorators = [
	muiTheme()
];