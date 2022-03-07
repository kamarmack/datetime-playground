import { DateTime, Interval } from 'luxon';

const dt_now = DateTime.now();
const dt_past = DateTime.local(2020, 10, 12);
const dt_later = DateTime.local(2025, 10, 12);

const i_invalid = Interval.fromDateTimes(dt_now, dt_past);
const i_invalid_len = i_invalid.length();
const i_invalid_len_yrs = i_invalid.length('years');
const i_invalid_contains_dt = i_invalid.contains(DateTime.local(2019));
const i_invalid_str = i_invalid.toString();
const i_invalid_str_iso = i_invalid.toISO();

const i_same = Interval.fromDateTimes(dt_now, dt_now);
const i_same_len = i_same.length();
const i_same_len_yrs = i_same.length('years');
const i_same_contains_dt = i_same.contains(DateTime.local(2019));
const i_same_str = i_same.toString();
const i_same_str_iso = i_same.toISO();

const i_valid = Interval.fromDateTimes(dt_now, dt_later);
const i_valid_len = i_valid.length();
const i_valid_len_yrs = i_valid.length('years');
const i_valid_contains_dt = i_valid.contains(DateTime.local(2019));
const i_valid_str = i_valid.toString();
const i_valid_str_iso = i_valid.toISO();

// Logs
console.log(JSON.stringify({
  dt_now,
  dt_past,
  dt_later,
  i_invalid,
  i_invalid_len,
  i_invalid_len_yrs,
  i_invalid_contains_dt,
  i_invalid_str,
  i_invalid_str_iso,
  i_same,
  i_same_len,
  i_same_len_yrs,
  i_same_contains_dt,
  i_same_str,
  i_same_str_iso,
  i_valid,
  i_valid_len,
  i_valid_len_yrs,
  i_valid_contains_dt,
  i_valid_str,
  i_valid_str_iso,
}, null, '\t'));
const log = {
	"dt_now": "2022-03-07T11:37:14.530-06:00",
	"dt_past": "2020-10-12T00:00:00.000-05:00",
	"dt_later": "2025-10-12T00:00:00.000-05:00",
	"i_invalid": {
		"invalid": {
			"reason": "end before start",
			"explanation": "The end of an interval must be after its start, but you had start=2022-03-07T11:37:14.530-06:00 and end=2020-10-12T00:00:00.000-05:00"
		},
		"isLuxonInterval": true
	},
	"i_invalid_len": null,
	"i_invalid_len_yrs": null,
	"i_invalid_contains_dt": false,
	"i_invalid_str": "Invalid Interval",
	"i_invalid_str_iso": "Invalid Interval",
	"i_same": {
		"s": "2022-03-07T11:37:14.530-06:00",
		"e": "2022-03-07T11:37:14.530-06:00",
		"invalid": null,
		"isLuxonInterval": true
	},
	"i_same_len": 0,
	"i_same_len_yrs": 0,
	"i_same_contains_dt": false,
	"i_same_str": "[2022-03-07T11:37:14.530-06:00 – 2022-03-07T11:37:14.530-06:00)",
	"i_same_str_iso": "2022-03-07T11:37:14.530-06:00/2022-03-07T11:37:14.530-06:00",
	"i_valid": {
		"s": "2022-03-07T11:37:14.530-06:00",
		"e": "2025-10-12T00:00:00.000-05:00",
		"invalid": null,
		"isLuxonInterval": true
	},
	"i_valid_len": 113570565470,
	"i_valid_len_yrs": 3.59855928050482,
	"i_valid_contains_dt": false,
	"i_valid_str": "[2022-03-07T11:37:14.530-06:00 – 2025-10-12T00:00:00.000-05:00)",
	"i_valid_str_iso": "2022-03-07T11:37:14.530-06:00/2025-10-12T00:00:00.000-05:00"
};
(log);
