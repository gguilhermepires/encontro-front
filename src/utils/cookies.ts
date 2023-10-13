export function getCookie<T>(key: string) {
  const unCodedCookie = document.cookie.match(
    `(^|;)\\s*${key}\\s*=\\s*([^;]+)`
  );

  const decodedCookie: T | null = unCodedCookie
    ? JSON.parse(decodeURIComponent(unCodedCookie.pop() ?? '{}'))
    : null;

  return decodedCookie;
}

export function setCookie(
  key: string,
  value: string | Record<string, unknown>
) {
  let valueToStore = value;

  if (typeof value !== 'string') valueToStore = JSON.stringify(value);

  document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(
    valueToStore as string
  )}; path=/; SameSite=None; Secure`;
}

export function deleteCookie(key: string) {
  document.cookie = `${encodeURIComponent(
    key
  )}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}
