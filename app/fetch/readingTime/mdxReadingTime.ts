import getReadingTime from "reading-time";

export function calcReadingTime(content: string) {
  return Math.ceil(getReadingTime(content).minutes);
}
