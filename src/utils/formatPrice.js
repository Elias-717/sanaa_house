/**
 * Formats a YER price number according to locale.
 * EN: 7,000 YER
 * AR: ٧٬٠٠٠ ريال  (Arabic-Indic numerals, Eastern comma separator)
 */
export function formatPrice(priceNum, locale) {
  if (locale === 'ar') {
    // toLocaleString with ar-YE gives Arabic-Indic numerals + Arabic comma
    const formatted = priceNum.toLocaleString('ar-YE')
    return `${formatted} ريال`
  }
  return `${priceNum.toLocaleString('en-US')} YER`
}
