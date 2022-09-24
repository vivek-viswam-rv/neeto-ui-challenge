import dayjs from "dayjs";

export const timeAgoInWords = dateTime => dayjs(dateTime).fromNow();
