interface IShoutProps {
  text: string
}
export function shout({text}: IShoutProps): string {
  return `${text.toUpperCase()}!`
}
