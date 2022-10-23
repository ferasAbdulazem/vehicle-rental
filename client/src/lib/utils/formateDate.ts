/**
 * @param utcDateString the date in UTC format
 * @returns a datetime formatted using the de-AT local
 */
export default function formatDate(utcDateString: string) {
  return new Date(utcDateString).toLocaleString('de-AT');
}
