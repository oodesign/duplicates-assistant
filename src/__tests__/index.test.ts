import { resolve } from 'path'
import { testAssistant } from '@sketch-hq/sketch-assistant-utils'

import Assistant from '..'

test('test duplicate symbols', async () => {
  const { ruleErrors } = await testAssistant(
    resolve(__dirname, './empty.sketch'),
    Assistant,
  )
  expect(ruleErrors).toHaveLength(0)
})
