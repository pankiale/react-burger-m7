export function getCookie(cname: string) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');

  for(let i = 0; i <ca.length; i++) {
    if (ca[i].indexOf(name) === 0) {
      return ca[i].substring(name.length);
    }
  }
  return "";
}
export function setCookie(name: string, value: string | null, expireMin: any) {
  const d = new Date();
  d.setTime(d.getTime() + (expireMin * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

export function deleteCookie(name: string) {
  setCookie(name, null, { expires: -1 });
}