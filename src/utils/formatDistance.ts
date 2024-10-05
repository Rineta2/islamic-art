import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";

export const formatDistanceToNowInIndonesian = (date: Date) => {
  const distance = formatDistanceToNow(date, { addSuffix: true, locale: id });
  return distance.replace("sekitar ", "");
};
