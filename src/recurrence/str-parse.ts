import { RRule, rrulestr } from '@mackgevanni/rrule-es6';

const rrulestr_default_options = rrulestr(
  'DTSTART:20120201T023000Z\nRRULE:FREQ=MONTHLY;COUNT=5',
);
const rrulestr_rfc_compatible = rrulestr(
  'DTSTART:20120201T023000Z\nRRULE:FREQ=MONTHLY;COUNT=5',
  {
    compatible: true,
    cache: true,
    forceset: true,
    tzid: 'UTC',
    unfold: true,
  },
);
const rrulestr_complex = rrulestr(
  `DTSTART:20120201T023000Z\nRRULE:FREQ=MONTHLY;COUNT=5\nRDATE:20120701T023000Z,\
20120702T023000Z\nEXRULE:FREQ=MONTHLY;COUNT=2\nEXDATE:20120601T023000Z`,
);

const rule_from_parse_str = new RRule(
  RRule.parseString('DTSTART:20120201T093000Z\nRRULE:FREQ=WEEKLY'),
);
const options_from_parse_str = RRule.parseString('FREQ=DAILY;INTERVAL=6');
options_from_parse_str.dtstart = new Date(Date.UTC(2000, 1, 1));
const rule_from_custom_options = new RRule(options_from_parse_str);

// Logs
console.log(JSON.stringify({
  rrulestr_default_options,
  rrulestr_rfc_compatible,
  rrulestr_complex,
  rule_from_parse_str,
  options_from_parse_str,
  rule_from_custom_options,
}, null, '\t'));
const log = {
	"rrulestr_default_options": {
		"_cache": null,
		"origOptions": {
			"freq": 1,
			"count": 5,
			"dtstart": "2012-02-01T02:30:00.000Z"
		},
		"options": {
			"freq": 1,
			"dtstart": "2012-02-01T02:30:00.000Z",
			"interval": 1,
			"wkst": 0,
			"count": 5,
			"until": null,
			"bysetpos": null,
			"bymonth": null,
			"bymonthday": [
				1
			],
			"bynmonthday": [],
			"byyearday": null,
			"byweekno": null,
			"byweekday": null,
			"bynweekday": null,
			"byhour": [
				2
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
	"rrulestr_rfc_compatible": {
		"_cache": {
			"all": false,
			"before": [],
			"after": [],
			"between": []
		},
		"origOptions": {},
		"options": {
			"freq": 0,
			"dtstart": "2022-03-08T23:36:07.000Z",
			"interval": 1,
			"wkst": 0,
			"count": null,
			"until": null,
			"tzid": null,
			"bysetpos": null,
			"bymonth": [
				3
			],
			"bymonthday": [
				8
			],
			"bynmonthday": [],
			"byyearday": null,
			"byweekno": null,
			"byweekday": null,
			"bynweekday": null,
			"byhour": [
				23
			],
			"byminute": [
				36
			],
			"bysecond": [
				7
			],
			"byeaster": null
		},
		"_rrule": [
			{
				"_cache": {
					"all": false,
					"before": [],
					"after": [],
					"between": []
				},
				"origOptions": {
					"freq": 1,
					"count": 5,
					"dtstart": "2012-02-01T02:30:00.000Z"
				},
				"options": {
					"freq": 1,
					"dtstart": "2012-02-01T02:30:00.000Z",
					"interval": 1,
					"wkst": 0,
					"count": 5,
					"until": null,
					"bysetpos": null,
					"bymonth": null,
					"bymonthday": [
						1
					],
					"bynmonthday": [],
					"byyearday": null,
					"byweekno": null,
					"byweekday": null,
					"bynweekday": null,
					"byhour": [
						2
					],
					"byminute": [
						30
					],
					"bysecond": [
						0
					],
					"byeaster": null
				}
			}
		],
		"_rdate": [],
		"_exrule": [],
		"_exdate": [],
		"_dtstart": "2012-02-01T02:30:00.000Z"
	},
	"rrulestr_complex": {
		"_cache": null,
		"origOptions": {},
		"options": {
			"freq": 0,
			"dtstart": "2022-03-08T23:36:07.000Z",
			"interval": 1,
			"wkst": 0,
			"count": null,
			"until": null,
			"tzid": null,
			"bysetpos": null,
			"bymonth": [
				3
			],
			"bymonthday": [
				8
			],
			"bynmonthday": [],
			"byyearday": null,
			"byweekno": null,
			"byweekday": null,
			"bynweekday": null,
			"byhour": [
				23
			],
			"byminute": [
				36
			],
			"bysecond": [
				7
			],
			"byeaster": null
		},
		"_rrule": [
			{
				"_cache": null,
				"origOptions": {
					"freq": 1,
					"count": 5,
					"dtstart": "2012-02-01T02:30:00.000Z"
				},
				"options": {
					"freq": 1,
					"dtstart": "2012-02-01T02:30:00.000Z",
					"interval": 1,
					"wkst": 0,
					"count": 5,
					"until": null,
					"bysetpos": null,
					"bymonth": null,
					"bymonthday": [
						1
					],
					"bynmonthday": [],
					"byyearday": null,
					"byweekno": null,
					"byweekday": null,
					"bynweekday": null,
					"byhour": [
						2
					],
					"byminute": [
						30
					],
					"bysecond": [
						0
					],
					"byeaster": null
				}
			}
		],
		"_rdate": [
			"2012-07-01T02:30:00.000Z",
			"2012-07-02T02:30:00.000Z"
		],
		"_exrule": [
			{
				"_cache": null,
				"origOptions": {
					"freq": 1,
					"count": 2,
					"dtstart": "2012-02-01T02:30:00.000Z"
				},
				"options": {
					"freq": 1,
					"dtstart": "2012-02-01T02:30:00.000Z",
					"interval": 1,
					"wkst": 0,
					"count": 2,
					"until": null,
					"bysetpos": null,
					"bymonth": null,
					"bymonthday": [
						1
					],
					"bynmonthday": [],
					"byyearday": null,
					"byweekno": null,
					"byweekday": null,
					"bynweekday": null,
					"byhour": [
						2
					],
					"byminute": [
						30
					],
					"bysecond": [
						0
					],
					"byeaster": null
				}
			}
		],
		"_exdate": [
			"2012-06-01T02:30:00.000Z"
		],
		"_dtstart": "2012-02-01T02:30:00.000Z"
	},
	"rule_from_parse_str": {
		"_cache": {
			"all": false,
			"before": [],
			"after": [],
			"between": []
		},
		"origOptions": {
			"dtstart": "2012-02-01T09:30:00.000Z",
			"freq": 2
		},
		"options": {
			"freq": 2,
			"dtstart": "2012-02-01T09:30:00.000Z",
			"interval": 1,
			"wkst": 0,
			"count": null,
			"until": null,
			"tzid": null,
			"bysetpos": null,
			"bymonth": null,
			"bymonthday": [],
			"bynmonthday": [],
			"byyearday": null,
			"byweekno": null,
			"byweekday": [
				2
			],
			"bynweekday": null,
			"byhour": [
				9
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
	"options_from_parse_str": {
		"freq": 3,
		"interval": 6,
		"dtstart": "2000-02-01T00:00:00.000Z"
	},
	"rule_from_custom_options": {
		"_cache": {
			"all": false,
			"before": [],
			"after": [],
			"between": []
		},
		"origOptions": {
			"freq": 3,
			"interval": 6,
			"dtstart": "2000-02-01T00:00:00.000Z"
		},
		"options": {
			"freq": 3,
			"dtstart": "2000-02-01T00:00:00.000Z",
			"interval": 6,
			"wkst": 0,
			"count": null,
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
