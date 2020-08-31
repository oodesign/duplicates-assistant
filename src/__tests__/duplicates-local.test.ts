import { resolve } from 'path'
import { testAssistant } from '@sketch-hq/sketch-assistant-utils'

import Assistant from '..'

test('Test local duplicate symbols', async () => {
  const { violations, ruleErrors } = await testAssistant(
    resolve(__dirname, './Duplicates-Local.sketch'),
    Assistant,
  )
  expect(violations[1].message).toBe('💎 There are 2 duplicate symbols in this file.');
  expect(violations[3].message).toBe('💎 There are 3 duplicate layer styles in this file.');
  expect(violations[5].message).toBe('💎 There are 2 duplicate text styles in this file.');
  expect(ruleErrors).toHaveLength(0);
})
