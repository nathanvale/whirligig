import { sayMessage, shoutMessage, sayMessageWithUnderScores } from '..'

test('should say hello world', () => {
  expect(sayMessage()).toBe('hello world')
})

test('should shout hello world', () => {
  expect(shoutMessage()).toBe('HELLO WORLD!')
})

test('should say hello world with underscores', () => {
  expect(sayMessageWithUnderScores()).toBe('hello_world')
})
