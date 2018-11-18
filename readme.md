# One React Component: radio

<p align="center"><img width="150" src="https://cdn.rawgit.com/one-react/assets/master/logo%402x.png" alt="logo"></p>

[![TravisCI Build](https://img.shields.io/travis/one-react/radio.svg)](https://travis-ci.org/one-react/radio)
[![CircieCI Build](https://img.shields.io/circleci/project/github/one-react/radio.svg)](https://circleci.com/gh/one-react/radio)
[![Coverage](https://img.shields.io/codecov/c/github/one-react/radio.svg)](https://codecov.io/gh/one-react/radio) 
[![Version](https://img.shields.io/npm/v/or-radio.svg)](https://www.npmjs.com/package/or-radio)
[![Chat](https://img.shields.io/gitter/room/one-react-org/Lobby.svg)](https://gitter.im/one-react-org/Lobby)
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Greenkeeper badge](https://badges.greenkeeper.io/one-react/radio.svg)](https://greenkeeper.io/) 

## Installation
```
// with npm
npm install or-radio

// with yarn
yarn add or-radio
```

## Usage
- Config webpack `sass-loader` if you are using webpack.

```js
// webpack.config.js
{
  test: /\.scss$/,
  use: [
    'style-loader',
    'css-loader',
    'sass-loader'
  ],
  include: [
    /node_modules\/or\-\w+/ //include or-components
  ]
}
```

## Basic Example

```jsx
import Button from 'or-button'
import React from 'react'

import { SvgClose } from 'or-icons'
import Modal from 'or-modal'

export class Example extends React.Component {
  state = {
    isOpenCenter: false
  }

  render() {
    return (
      <div>
        <div className="example-wrapper">
          <Button type="primary" onClick={this.handelOpen('isOpenCenter')}>
            Open default Center
          </Button>
          <Modal
            className="modal-center"
            isOpen={this.state.isOpenCenter}
            onClose={this.handleClose('isOpenCenter')}
          >
            <div>
              <div className="right-side">
                <div
                  className="close-icon"
                  onClick={this.handleClose('isOpenCenter')}
                >
                  <SvgClose
                    className="or-modal-close-icon"
                    fill="#333"
                    size="30"
                  />
                </div>
                <div className="slogan">
                  <div>LIFE IS SHORT</div>
                  <div>BUY A</div>
                  <div>LIPSTICK</div>
                </div>
                <Button
                  type="primary"
                  onClick={this.handleClose('isOpenCenter')}
                >
                  SHOP NOW
                </Button>
              </div>
              <div className="footer">@Rice here 2018</div>
            </div>
          </Modal>
        </div>
      </div>
    )
  }

  handelOpen = state => {
    return () => {
      this.setState({
        [`${state}`]: true
      })
    }
  }

  handleClose = state => {
    return () => {
      this.setState({
        [`${state}`]: false
      })
    }
  }
}

```

## API

Radio:

```ts
interface Props {
  /**
   * type for the radio
   * @default 'normal'
   **/
  type?: 'button'

  /**
   * value of the radio
   **/
  value: string

  /**
   * whether the radio is checked or not
   **/
  checked?: boolean

  /**
   * children of the radio
   **/
  children: React.ReactNode

  /**
   * whether the radio can be clicked
   **/
  disabled?: boolean

  /**
   * callback triggered by click
   **/
  onClick?: () => void
}
```

RadioGroup:

```jsx
interface Props {
  /**
   * type for the radio
   * @default 'normal'
   **/
  type?: string

  /**
   * radio group layouts horizontally or vertically
   * @default false
   **/
  horizontal?: boolean

  /**
   * children of the radio group
   **/
  children: React.ReactNode

  /**
   * current value of the radio group
   **/
  value?: string

  /**
   * custom className
   **/
  className?: string

  /**
   * callback triggered by click
   **/
  onChange: (value) => void
}
```

## Customize Theme
**Customize in webpack**

The following variables in or-radio can be overridden:

```scss
$or-radio-primary-color: $or-primary-color !default;
$or-radio-disabled-color: $or-disabled-color !default;

```

Alternatively, you can override variables from [or-theme](https://github.com/one-react/theme/blob/master/src/variables.scss) to keep all or-components in a unified theme style.

First you should create a `theme.scss` file to declare the variables you want to override.

Then use the [data](https://github.com/webpack-contrib/sass-loader#environment-variables)  option provided by `sass-loader` to override the default values of the variables.

We take a typical `webpack.config.js` file as example to customize it's sass-loader options.

```js
// webpack.config.js
{
  test: /\.scss$/,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'sass-loader',
      options: {
        data: fs.readFileSync(path.resolve(__dirname, 'theme.scss')) // pass theme.scss to sass-loader
      }
    }
  ],
  include: [
    /node_modules\/or\-\w+/ //include or-components
  ]
}
```

## Demos and Docs
> powered by [storybook](https://storybook.js.org/)

[Click Here](https://one-react.github.io/radio)

## License

MIT &copy; foryuki
