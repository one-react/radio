import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import React, { PureComponent } from 'react'

import './styles.scss'

import { Radio, RadioGroup } from '../../src'

import RadioExample from './example'

storiesOf('or-radio', module).add(
  'RadioExample',
  withInfo({
    inline: true,
    source: false,
    propTables: [Radio, RadioGroup],
    propTablesExclude: [RadioExample],
    text: `
\`\`\`
${require('!!raw-loader!./example.tsx')}
\`\`\`
    `
  })(() => <RadioExample />)
)
