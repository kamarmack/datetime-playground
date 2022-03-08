import { RRule } from '@mackgevanni/rrule-es6';

const options = {
  freq: RRule.WEEKLY,
  interval: 5,
  byweekday: [RRule.MO, RRule.FR],
  dtstart: new Date(Date.UTC(2012, 1, 1, 10, 30)),
  until: new Date(Date.UTC(2012, 12, 31))
};
const rule = new RRule(options);
const rule_rfc_str = rule.toString();
const rule_orig_options_str = RRule.optionsToString(rule.origOptions);
const rule_full_options_str = RRule.optionsToString(rule.options);
const rule_manual_options_str = RRule.optionsToString({
  freq: rule.options.freq,
  dtstart: rule.options.dtstart
});

// Logs
console.log(JSON.stringify({
  options,
  rule,
  rule_rfc_str,
  rule_orig_options_str,
  rule_full_options_str,
  rule_manual_options_str,
}, null, '\t'));
const log = {
	"options": {
		"freq": 2,
		"interval": 5,
		"byweekday": [
			{
				"weekday": 0
			},
			{
				"weekday": 4
			}
		],
		"dtstart": "2012-02-01T10:30:00.000Z",
		"until": "2013-01-31T00:00:00.000Z"
	},
	"rule": {
		"_cache": {
			"all": false,
			"before": [],
			"after": [],
			"between": []
		},
		"origOptions": {
			"freq": 2,
			"interval": 5,
			"byweekday": [
				{
					"weekday": 0
				},
				{
					"weekday": 4
				}
			],
			"dtstart": "2012-02-01T10:30:00.000Z",
			"until": "2013-01-31T00:00:00.000Z"
		},
		"options": {
			"freq": 2,
			"dtstart": "2012-02-01T10:30:00.000Z",
			"interval": 5,
			"wkst": 0,
			"count": null,
			"until": "2013-01-31T00:00:00.000Z",
			"tzid": null,
			"bysetpos": null,
			"bymonth": null,
			"bymonthday": [],
			"bynmonthday": [],
			"byyearday": null,
			"byweekno": null,
			"byweekday": [
				0,
				4
			],
			"bynweekday": null,
			"byhour": [
				10
			],
			"byminute": [
				30
			],
			"bysecond": [
				0
			],
			"byeaster": null
		}
	},
	"rule_rfc_str": "DTSTART:20120201T103000Z\nRRULE:FREQ=WEEKLY;INTERVAL=5;BYDAY=MO,FR;UNTIL=20130131T000000Z",
	"rule_orig_options_str": "DTSTART:20120201T103000Z\nRRULE:FREQ=WEEKLY;INTERVAL=5;BYDAY=MO,FR;UNTIL=20130131T000000Z",
	"rule_full_options_str": "DTSTART:20120201T103000Z\nRRULE:FREQ=WEEKLY;INTERVAL=5;WKST=MO;UNTIL=20130131T000000Z;BYDAY=MO,FR;BYHOUR=10;BYMINUTE=30;BYSECOND=0",
	"rule_manual_options_str": "DTSTART:20120201T103000Z\nRRULE:FREQ=WEEKLY"
};
(log);
