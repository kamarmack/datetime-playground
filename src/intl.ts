import { DateTime, Info } from 'luxon';

const dt_local = DateTime.now();
const f = { month: 'long', day: 'numeric' } as const;

const dt_fr = dt_local.setLocale('fr').toLocaleString(f);
const dt_en_gb = dt_local.setLocale('en-GB').toLocaleString(f);
const dt_en_us = dt_local.setLocale('en-US').toLocaleString(f);

const months_short_fr = Info.months('short', { locale: 'fr' });
const months_long_fr = Info.months('long', { locale: 'fr' });

// Logs
console.log(JSON.stringify({
  dt_local,
  dt_fr,
  dt_en_gb,
  dt_en_us,
  months_short_fr,
  months_long_fr,
}, null, '\t'));
const log = {
	"dt_local": "2022-03-07T11:40:08.990-06:00",
	"dt_fr": "7 mars",
	"dt_en_gb": "7 March",
	"dt_en_us": "March 7",
	"months_short_fr": [
		"janv.",
		"févr.",
		"mars",
		"avr.",
		"mai",
		"juin",
		"juil.",
		"août",
		"sept.",
		"oct.",
		"nov.",
		"déc."
	],
	"months_long_fr": [
		"janvier",
		"février",
		"mars",
		"avril",
		"mai",
		"juin",
		"juillet",
		"août",
		"septembre",
		"octobre",
		"novembre",
		"décembre"
	]
};
(log);
