import { DateTime, Duration } from 'luxon';

const dt_now = DateTime.now();
const dur = Duration.fromObject({ hours: 2, minutes: 7 });
const dt_plus_2h = dt_now.plus(dur);

const {
  hours,
  minutes,
  seconds,
} = dur;
(hours);

const dur_sec = dur.as('seconds');
const dur_obj = dur.toObject();
const dur_iso_str = dur.toISO();

// Logs
console.log(JSON.stringify({
  dt_now,
  dur,
  dt_plus_2h,
  hours,
  minutes,
  seconds,
  dur_sec,
  dur_obj,
  dur_iso_str,
}, null, '\t'));
const log = {
	"dt_now": "2022-03-07T11:28:46.070-06:00",
	"dur": "PT2H7M",
	"dt_plus_2h": "2022-03-07T13:35:46.070-06:00",
	"hours": 2,
	"minutes": 7,
	"seconds": 0,
	"dur_sec": 7620,
	"dur_obj": {
		"hours": 2,
		"minutes": 7
	},
	"dur_iso_str": "PT2H7M"
};
(log);
