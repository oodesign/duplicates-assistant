import { resolve } from 'path'
import { testAssistant } from '@sketch-hq/sketch-assistant-utils'

import Assistant from '..'

test('Test library duplicate symbols', async () => {
  const { violations, ruleErrors } = await testAssistant(
    resolve(__dirname, './Duplicates-Libraries-Local.sketch'),
    Assistant,
  )
  expect(violations[1].message).toBe('💎🔶 There is 1 symbol that exist in your file and in external libraries related to this file.');
  expect(violations[3].message).toBe('💎🔶 There is 1 layer style that exist in your file and in external libraries related to this file.');
  expect(violations[5].message).toBe('💎🔶 There are 2 text styles that exist in your file and in external libraries related to this file.');
  expect(ruleErrors).toHaveLength(0);
})
