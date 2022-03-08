import { DateTime } from 'luxon';
import { RRule } from '@mackgevanni/rrule-es6';

const rule = RRule.fromString(
  "DTSTART;TZID=America/Denver:20181101T190000;\n"
  + "RRULE:FREQ=WEEKLY;BYDAY=MO,WE,TH;INTERVAL=1;COUNT=3"
);
const rule_all = rule.all();;
const date = new Date();
const date_utc_date = date.getUTCDate();
const date_utc_hours = date.getUTCHours();

const rule_all_luxon = rule.all().map(function (date) {
  return DateTime.fromJSDate(date)
    .toUTC()
    .setZone('local', { keepLocalTime: true })
    .toJSDate();
});

// Logs
console.log(JSON.stringify({
  rule_all,
  date,
  date_utc_date,
  date_utc_hours,
  rule_all_luxon,
}, null, '\t'));
const log = {
	"rule_all": [
		"2018-11-01T19:00:00.000Z",
		"2018-11-05T19:00:00.000Z",
		"2018-11-07T19:00:00.000Z"
	],
	"date": "2022-03-08T23:15:31.999Z",
	"date_utc_date": 8,
	"date_utc_hours": 23,
	"rule_all_luxon": [
		"2018-11-02T00:00:00.000Z",
		"2018-11-06T01:00:00.000Z",
		"2018-11-08T01:00:00.000Z"
	]
};
(log);
