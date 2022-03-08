import { RRule } from '@mackgevanni/rrule-es6';

const rule = new RRule({
  freq: RRule.WEEKLY,
  count: 23
});
const rule_is_fully_convertible = rule.isFullyConvertibleToText();
const rule_text = rule.toText();

const rule_from_text = RRule.fromText('every day for 3 times');

const options = RRule.parseText('every day for 3 times') || {};
options.dtstart = new Date(Date.UTC(2000, 1, 1));
const rule_from_parse_text = new RRule(options);

// Logs
console.log(JSON.stringify({
  rule,
  rule_is_fully_convertible,
  rule_text,
  rule_from_text,
  options,
  rule_from_parse_text,
}, null, '\t'));
const log = {
	"rule": {
		"_cache": {
			"all": false,
			"before": [],
			"after": [],
			"between": []
		},
		"origOptions": {
			"freq": 2,
			"count": 23
		},
		"options": {
			"freq": 2,
			"dtstart": "2022-03-08T23:17:12.000Z",
			"interval": 1,
			"wkst": 0,
			"count": 23,
			"until": null,
			"tzid": null,
			"bysetpos": null,
			"bymonth": null,
			"bymonthday": [],
			"bynmonthday": [],
			"byyearday": null,
			"byweekno": null,
			"byweekday": [
				1
			],
			"bynweekday": null,
			"byhour": [
				23
			],
			"byminute": [
				17
			],
			"bysecond": [
				12
			],
			"byeaster": null
		}
	},
	"rule_is_fully_convertible": true,
	"rule_text": "every week for 23 times",
	"rule_from_text": {
		"_cache": {
			"all": false,
			"before": [],
			"after": [],
			"between": []
		},
		"origOptions": {
			"freq": 3,
			"count": 3
		},
		"options": {
			"freq": 3,
			"dtstart": "2022-03-08T23:17:12.000Z",
			"interval": 1,
			"wkst": 0,
			"count": 3,
			"until": null,
			"tzid": null,
			"bysetpos": null,
			"bymonth": null,
			"bymonthday": [],
			"bynmonthday": [],
			"byyearday": null,
			"byweekno": null,
			"byweekday": null,
			"bynweekday": null,
			"byhour": [
				23
			],
			"byminute": [
				17
			],
			"bysecond": [
				12
			],
			"byeaster": null
		}
	},
	"options": {
		"freq": 3,
		"count": 3,
		"dtstart": "2000-02-01T00:00:00.000Z"
	},
	"rule_from_parse_text": {
		"_cache": {
			"all": false,
			"before": [],
			"after": [],
			"between": []
		},
		"origOptions": {
			"freq": 3,
			"count": 3,
			"dtstart": "2000-02-01T00:00:00.000Z"
		},
		"options": {
			"freq": 3,
			"dtstart": "2000-02-01T00:00:00.000Z",
			"interval": 1,
			"wkst": 0,
			"count": 3,
			"until": null,
			"tzid": null,
			"bysetpos": null,
			"bymonth": null,
			"bymonthday": [],
			"bynmonthday": [],
			"byyearday": null,
			"byweekno": null,
			"byweekday": null,
			"bynweekday": null,
			"byhour": [
				0
			],
			"byminute": [
				0
			],
			"bysecond": [
				0
			],
			"byeaster": null
		}
	}
};
(log);
