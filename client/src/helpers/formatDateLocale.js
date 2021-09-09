import { DATETIMEDISPLAYFORMAT } from './../constants';

/**
 * Returns a formatted language-sensitive date given a date string in ISO format (uses browser's language).
 * 
 * @param {very_long_type} name           Description.
 * @param {type}           very_long_name Description.
 */
const formatDateLocale = (dateString) => (
  new Date(dateString).toLocaleDateString(undefined, DATETIMEDISPLAYFORMAT)
)

export default formatDateLocale;