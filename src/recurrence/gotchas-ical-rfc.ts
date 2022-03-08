import { RRule, RRuleSet } from '@mackgevanni/rrule-es6';

const start = new Date(Date.UTC(2012, 1, 1, 10, 30));

const rule_set1 = new RRuleSet();
rule_set1.rrule(new RRule({
  freq: RRule.MONTHLY,
  count: 5,
  dtstart: start,
}));

const rule_set2 = new RRuleSet();
rule_set2.rdate(start);

// Logs
console.log(JSON.stringify({
  start,
  rule_set1,
  rule_set2,
}, null, '\t'));
const log = {
  "start": "2012-02-01T10:30:00.000Z",
  "rule_set1": {
    "_cache": {
      "all": false,
      "before": [],
      "after": [],
      "between": []
    },
    "origOptions": {},
    "options": {
      "freq": 0,
      "dtstart": "2022-03-08T23:07:49.000Z",
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
        7
      ],
      "bysecond": [
        49
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
          "dtstart": "2012-02-01T10:30:00.000Z"
        },
        "options": {
          "freq": 1,
          "dtstart": "2012-02-01T10:30:00.000Z",
          "interval": 1,
          "wkst": 0,
          "count": 5,
          "until": null,
          "tzid": null,
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
      }
    ],
    "_rdate": [],
    "_exrule": [],
    "_exdate": []
  },
  "rule_set2": {
    "_cache": {
      "all": false,
      "before": [],
      "after": [],
      "between": []
    },
    "origOptions": {},
    "options": {
      "freq": 0,
      "dtstart": "2022-03-08T23:07:49.000Z",
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
        7
      ],
      "bysecond": [
        49
      ],
      "byeaster": null
    },
    "_rrule": [],
    "_rdate": [
      "2012-02-01T10:30:00.000Z"
    ],
    "_exrule": [],
    "_exdate": []
  }
};
(log);

