import React from 'react'
import { storiesOf } from '@storybook/react'

import './example.scss'
import Example from './example'

storiesOf('Radio', module)
  .add('example', () =>
    <Example />
  )
