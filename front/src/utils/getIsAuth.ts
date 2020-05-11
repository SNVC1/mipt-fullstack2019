export default function getIsAuth(): boolean {
  const auth = window.localStorage.getItem('access')
  return Boolean(auth) && auth !== 'undefined'
}