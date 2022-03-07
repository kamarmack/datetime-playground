import { DateTime } from 'luxon';

const dt_now_la_obj = DateTime.fromObject({}, { zone: 'America/Los_Angeles' });
const dt_now_la_manual = DateTime.now().setZone('America/Los_Angeles');

const dt_utc_args = DateTime.utc(2017, 5, 15);
const dt_utc = DateTime.utc();
const dt_now_utc = DateTime.now().toUTC();
const dt_utc_local = DateTime.utc().toLocal();

// Logs
console.log(JSON.stringify({
  dt_now_la_obj,
  dt_now_la_manual,
  dt_utc_args,
  dt_utc,
  dt_now_utc,
  dt_utc_local,
}, null, '\t'));
const log = {
	"dt_now_la_obj": "2022-03-07T09:41:31.919-08:00",
	"dt_now_la_manual": "2022-03-07T09:41:31.920-08:00",
	"dt_utc_args": "2017-05-15T00:00:00.000Z",
	"dt_utc": "2022-03-07T17:41:31.920Z",
	"dt_now_utc": "2022-03-07T17:41:31.920Z",
	"dt_utc_local": "2022-03-07T11:41:31.921-06:00"
};
(log);
