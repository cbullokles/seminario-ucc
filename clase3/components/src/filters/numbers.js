export function localeNumbers (value, locale = 'es-ES') {
  if (!value) return '';
  return value.toLocaleString(locale);
}
