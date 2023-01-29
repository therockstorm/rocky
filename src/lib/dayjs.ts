import dayjs from "dayjs";

export type DateOrPresent = dayjs.Dayjs | "Present";

export function duration(end: DateOrPresent, start: dayjs.Dayjs) {
  const e = dayjs(end === "Present" ? new Date() : end);
  const years = e.diff(start, "year");
  const months = e.diff(start, "month") - years * 12;
  const days = e.diff(start.add(years, "year").add(months, "month"), "day");

  const mos = months + (days > 0 ? 1 : 0);
  const y = `${
    years > 0
      ? `${years} ${years > 1 ? "yrs" : "yr"}${mos > 0 ? ", " : ""}`
      : ""
  }`;
  const m = `${mos > 0 ? `${mos} ${mos > 1 ? "mos" : "mo"}` : ""}`;
  return ` (${y}${m})`;
}

export function format(d: DateOrPresent) {
  return d === "Present" ? d : d.format("MMM YYYY");
}
