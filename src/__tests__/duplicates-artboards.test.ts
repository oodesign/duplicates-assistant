import { resolve } from 'path'
import { testAssistant } from '@sketch-hq/sketch-assistant-utils'

import Assistant from '..'

test('Test local duplicate artboards', async () => {
  const { violations } = await testAssistant(
    resolve(__dirname, './Duplicates-Artboards.sketch'),
    Assistant,
  )
  expect(violations).toHaveLength(14);
})
