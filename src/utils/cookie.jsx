export function getCookie(name) {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function setCookie(name, value, expireMin) {
  const d = new Date();
  d.setTime(d.getTime() + (expireMin * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

export function deleteCookie(name) {
  setCookie(name, null, { expires: -1 });
}