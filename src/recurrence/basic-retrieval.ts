import { RRule } from '@mackgevanni/rrule-es6';

const rule = new RRule({
  freq: RRule.WEEKLY,
  interval: 5,
  byweekday: [RRule.MO, RRule.FR],
  dtstart: new Date(Date.UTC(2012, 1, 1, 10, 30)),
  until: new Date(Date.UTC(2012, 12, 31))
});

const rule_all = rule.all();
const rule_all_first_two = rule.all(function (date, i) {
  (date);
  return i < 2;
});
const rule_between = rule.between(
  new Date(Date.UTC(2012, 7, 1)),
  new Date(Date.UTC(2012, 8, 1))
);
const rule_after_default = rule.after(new Date(Date.UTC(2012, 7, 1)));
const rule_after_dec = rule.after(new Date(Date.UTC(2012, 7, 1)), false);
const rule_after_inc = rule.after(new Date(Date.UTC(2012, 7, 1)), true);
const rule_before_default = rule.before(new Date(Date.UTC(2012, 8, 1)));
const rule_before_dec = rule.before(new Date(Date.UTC(2012, 8, 1)), false);
const rule_before_inc = rule.before(new Date(Date.UTC(2012, 8, 1)), true);

// Logs
console.log(JSON.stringify({
  rule,
  rule_all,
  rule_all_first_two,
  rule_between,
  rule_after_default,
  rule_after_dec,
  rule_after_inc,
  rule_before_default,
  rule_before_dec,
  rule_before_inc,
}, null, '\t'));
const log = {
  "rule": {
    "_cache": {
      "all": [
        "2012-02-03T10:30:00.000Z",
        "2012-03-05T10:30:00.000Z",
        "2012-03-09T10:30:00.000Z",
        "2012-04-09T10:30:00.000Z",
        "2012-04-13T10:30:00.000Z",
        "2012-05-14T10:30:00.000Z",
        "2012-05-18T10:30:00.000Z",
        "2012-06-18T10:30:00.000Z",
        "2012-06-22T10:30:00.000Z",
        "2012-07-23T10:30:00.000Z",
        "2012-07-27T10:30:00.000Z",
        "2012-08-27T10:30:00.000Z",
        "2012-08-31T10:30:00.000Z",
        "2012-10-01T10:30:00.000Z",
        "2012-10-05T10:30:00.000Z",
        "2012-11-05T10:30:00.000Z",
        "2012-11-09T10:30:00.000Z",
        "2012-12-10T10:30:00.000Z",
        "2012-12-14T10:30:00.000Z",
        "2013-01-14T10:30:00.000Z",
        "2013-01-18T10:30:00.000Z"
      ],
      "before": [
        {
          "dt": "2012-09-01T00:00:00.000Z",
          "inc": false,
          "_value": "2012-08-31T10:30:00.000Z"
        },
        {
          "dt": "2012-09-01T00:00:00.000Z",
          "inc": true,
          "_value": "2012-08-31T10:30:00.000Z"
        }
      ],
      "after": [
        {
          "dt": "2012-08-01T00:00:00.000Z",
          "inc": false,
          "_value": "2012-08-27T10:30:00.000Z"
        },
        {
          "dt": "2012-08-01T00:00:00.000Z",
          "inc": true,
          "_value": "2012-08-27T10:30:00.000Z"
        }
      ],
      "between": [
        {
          "before": "2012-09-01T00:00:00.000Z",
          "after": "2012-08-01T00:00:00.000Z",
          "inc": false,
          "_value": [
            "2012-08-27T10:30:00.000Z",
            "2012-08-31T10:30:00.000Z"
          ]
        }
      ]
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
  "rule_all": [
    "2012-02-03T10:30:00.000Z",
    "2012-03-05T10:30:00.000Z",
    "2012-03-09T10:30:00.000Z",
    "2012-04-09T10:30:00.000Z",
    "2012-04-13T10:30:00.000Z",
    "2012-05-14T10:30:00.000Z",
    "2012-05-18T10:30:00.000Z",
    "2012-06-18T10:30:00.000Z",
    "2012-06-22T10:30:00.000Z",
    "2012-07-23T10:30:00.000Z",
    "2012-07-27T10:30:00.000Z",
    "2012-08-27T10:30:00.000Z",
    "2012-08-31T10:30:00.000Z",
    "2012-10-01T10:30:00.000Z",
    "2012-10-05T10:30:00.000Z",
    "2012-11-05T10:30:00.000Z",
    "2012-11-09T10:30:00.000Z",
    "2012-12-10T10:30:00.000Z",
    "2012-12-14T10:30:00.000Z",
    "2013-01-14T10:30:00.000Z",
    "2013-01-18T10:30:00.000Z"
  ],
  "rule_all_first_two": [
    "2012-02-03T10:30:00.000Z",
    "2012-03-05T10:30:00.000Z"
  ],
  "rule_between": [
    "2012-08-27T10:30:00.000Z",
    "2012-08-31T10:30:00.000Z"
  ],
  "rule_after_default": "2012-08-27T10:30:00.000Z",
  "rule_after_dec": "2012-08-27T10:30:00.000Z",
  "rule_after_inc": "2012-08-27T10:30:00.000Z",
  "rule_before_default": "2012-08-31T10:30:00.000Z",
  "rule_before_dec": "2012-08-31T10:30:00.000Z",
  "rule_before_inc": "2012-08-31T10:30:00.000Z"
};
(log);
