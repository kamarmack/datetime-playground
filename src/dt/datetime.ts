import { DateTime } from 'luxon';

// DateTime specified
const dt_local = DateTime.local(2017, 5, 15, 8, 30);
const dt_from_object = DateTime
  .fromObject(
    { day: 22, hour: 12 },
    {
      zone: 'America/Los_Angeles',
      numberingSystem: 'beng',
    },
  );
const dt_from_iso1 = DateTime.fromISO('2017-05-15');
const dt_from_iso2 = DateTime.fromISO('2017-05-15T08:30:00');

// DateTime now
const dt_now = DateTime.now();
const now_str = DateTime.now().toString();
const now_str_iso = dt_now.toISO();
const now_str_locale = dt_now.toLocaleString();
const now_str_locale_med = dt_now.toLocaleString(DateTime.DATETIME_MED);
const {
  year,
  month,
  day,
  second,
  weekday,
  zoneName,
  offset,
  daysInMonth,
  millisecond,
} = dt_now;
(year);

// DateTime transforms
const dt_plus_3h = dt_now.plus({ hours: 3, minutes: 2 });
const dt_minus_7d = dt_now.minus({ days: 7 });
const dt_start_of_day = dt_now.startOf('day');
const dt_end_of_current_hr = dt_now.endOf('hour');
const dt_modify_hr = dt_now.set({ hour: 3 });

// Logs
console.log(JSON.stringify({
  dt_local,
  dt_from_object,
  dt_from_iso1,
  dt_from_iso2,
  dt_now,
  now_str,
  now_str_iso,
  now_str_locale,
  now_str_locale_med,
  year,
  month,
  day,
  second,
  weekday,
  zoneName,
  offset,
  daysInMonth,
  millisecond,
  dt_plus_3h,
  dt_minus_7d,
  dt_start_of_day,
  dt_end_of_current_hr,
  dt_modify_hr,
}, null, '\t'));
const log = {
  "dt_local": "2017-05-15T08:30:00.000-05:00",
  "dt_from_object": "2022-03-22T12:00:00.000-07:00",
  "dt_from_iso1": "2017-05-15T00:00:00.000-05:00",
  "dt_from_iso2": "2017-05-15T08:30:00.000-05:00",
  "dt_now": "2022-03-07T11:26:30.553-06:00",
  "now_str": "2022-03-07T11:26:30.553-06:00",
  "now_str_iso": "2022-03-07T11:26:30.553-06:00",
  "now_str_locale": "3/7/2022",
  "now_str_locale_med": "Mar 7, 2022, 11:26 AM",
  "year": 2022,
  "month": 3,
  "day": 7,
  "second": 30,
  "weekday": 1,
  "zoneName": "America/Chicago",
  "offset": -360,
  "daysInMonth": 31,
  "millisecond": 553,
  "dt_plus_3h": "2022-03-07T14:28:30.553-06:00",
  "dt_minus_7d": "2022-02-28T11:26:30.553-06:00",
  "dt_start_of_day": "2022-03-07T00:00:00.000-06:00",
  "dt_end_of_current_hr": "2022-03-07T11:59:59.999-06:00",
  "dt_modify_hr": "2022-03-07T03:26:30.553-06:00"
};
(log);
