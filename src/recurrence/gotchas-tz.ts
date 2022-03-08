import { RRule } from '@mackgevanni/rrule-es6';

const rule_asia = new RRule({
  dtstart: new Date(Date.UTC(2018, 1, 1, 10, 30)),
  count: 1,
  tzid: 'Asia/Tokyo',
}).all();

const rule_incorrect_dates_with_tz_offsets = new RRule({
  freq: RRule.MONTHLY,
  dtstart: new Date(2018, 1, 1, 10, 30),
  until: new Date(2018, 2, 31)
}).all();

const rule_correct_dates = new RRule({
  freq: RRule.MONTHLY,
  dtstart: new Date(Date.UTC(2018, 1, 1, 10, 30)),
  until: new Date(Date.UTC(2018, 2, 31))
}).all();

// Logs
console.log(JSON.stringify({
  rule_asia,
  rule_incorrect_dates_with_tz_offsets,
  rule_correct_dates,
}, null, '\t'));
const log = {
	"rule_asia": [
		"2018-02-01T10:30:00.000Z"
	],
	"rule_incorrect_dates_with_tz_offsets": [
		"2018-02-01T16:30:00.000Z",
		"2018-03-01T16:30:00.000Z"
	],
	"rule_correct_dates": [
		"2018-02-01T10:30:00.000Z",
		"2018-03-01T10:30:00.000Z"
	]
};
(log);
