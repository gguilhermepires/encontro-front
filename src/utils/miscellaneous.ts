export function iniFrame() {
  if (window.location !== window.parent.location) return true;

  return false;
}

export function pageTitlePrefix() {
  const { hostname } = window.location;

  const prefix =
    hostname === 'localhost'
      ? 'Schola Dev'
      : hostname.includes('edhec-dev')
      ? 'Schola QA'
      : hostname.includes('preprod')
      ? 'Schola Preprod'
      : 'Schola';

  return prefix;
}
