import { DATETIMEDISPLAYFORMAT } from './../constants';

/**
 * Returns a formatted language-sensitive date given a date string in ISO format (uses browser's language).
 * 
 * @param {string} dateString   String date (ISO format).
 */
const formatDateLocale = (dateString) => (
  new Date(dateString).toLocaleDateString(undefined, DATETIMEDISPLAYFORMAT)
)

export default formatDateLocale;