import { RRule, RRuleSet } from '@mackgevanni/rrule-es6';

const rule_set = new RRuleSet();
const log_empty_rule_set = rule_set.toString();

rule_set.rrule(
  new RRule({
    freq: RRule.MONTHLY,
    count: 5,
    dtstart: new Date(Date.UTC(2012, 1, 1, 10, 30)),
  }),
);
const log_rule_set_r1 = rule_set.toString();

rule_set.rdate(new Date(Date.UTC(2012, 6, 1, 10, 30)));
const log_rule_set_r2 = rule_set.toString();

rule_set.rdate(new Date(Date.UTC(2012, 6, 2, 10, 30)));
const log_rule_set_r3 = rule_set.toString();

rule_set.exdate(new Date(Date.UTC(2012, 5, 1, 10, 30)));
const log_rule_set_r4 = rule_set.toString();

const rule_set_all = rule_set.all();
const rule_set_between = rule_set
  .between(
    new Date(Date.UTC(2012, 2, 1)),
    new Date(Date.UTC(2012, 6, 2)),
  );
const rule_set_value = rule_set.valueOf();
const rule_set_str = rule_set.toString();

// deprecated
rule_set.exrule(new RRule({
  freq: RRule.MONTHLY,
  count: 2,
  dtstart: new Date(Date.UTC(2012, 2, 1, 10, 30))
}));
const log_rule_set_r5_deprecated = rule_set.toString();

const rule_set_all_deprecated = rule_set.all();
const rule_set_between_deprecated = rule_set
  .between(
    new Date(Date.UTC(2012, 2, 1)),
    new Date(Date.UTC(2012, 6, 2)),
  );
const rule_set_value_deprecated = rule_set.valueOf();
const rule_set_str_deprecated = rule_set.toString();

// Logs
console.log(JSON.stringify({
  log_empty_rule_set,
  log_rule_set_r1,
  log_rule_set_r2,
  log_rule_set_r3,
  log_rule_set_r4,
  log_rule_set_r5_deprecated,
  rule_set_all,
  rule_set_between,
  rule_set_value,
  rule_set_str,
  rule_set_all_deprecated,
  rule_set_between_deprecated,
  rule_set_value_deprecated,
  rule_set_str_deprecated,
}, null, '\t'));
const log = {
  "log_empty_rule_set": "",
  "log_rule_set_r1": "DTSTART:20120201T103000Z\nRRULE:FREQ=MONTHLY;COUNT=5",
  "log_rule_set_r2": "DTSTART:20120201T103000Z\nRRULE:FREQ=MONTHLY;COUNT=5\nRDATE:20120701T103000Z",
  "log_rule_set_r3": "DTSTART:20120201T103000Z\nRRULE:FREQ=MONTHLY;COUNT=5\nRDATE:20120701T103000Z,20120702T103000Z",
  "log_rule_set_r4": "DTSTART:20120201T103000Z\nRRULE:FREQ=MONTHLY;COUNT=5\nRDATE:20120701T103000Z,20120702T103000Z\nEXDATE:20120601T103000Z",
  "log_rule_set_r5_deprecated": "DTSTART:20120201T103000Z\nRRULE:FREQ=MONTHLY;COUNT=5\nEXRULE:FREQ=MONTHLY;COUNT=2\nRDATE:20120701T103000Z,20120702T103000Z\nEXDATE:20120601T103000Z",
  "rule_set_all": [
    "2012-02-01T10:30:00.000Z",
    "2012-03-01T10:30:00.000Z",
    "2012-04-01T10:30:00.000Z",
    "2012-05-01T10:30:00.000Z",
    "2012-07-01T10:30:00.000Z",
    "2012-07-02T10:30:00.000Z"
  ],
  "rule_set_between": [
    "2012-03-01T10:30:00.000Z",
    "2012-04-01T10:30:00.000Z",
    "2012-05-01T10:30:00.000Z",
    "2012-07-01T10:30:00.000Z"
  ],
  "rule_set_value": [
    "DTSTART:20120201T103000Z",
    "RRULE:FREQ=MONTHLY;COUNT=5",
    "RDATE:20120701T103000Z,20120702T103000Z",
    "EXDATE:20120601T103000Z"
  ],
  "rule_set_str": "DTSTART:20120201T103000Z\nRRULE:FREQ=MONTHLY;COUNT=5\nRDATE:20120701T103000Z,20120702T103000Z\nEXDATE:20120601T103000Z",
  "rule_set_all_deprecated": [
    "2012-02-01T10:30:00.000Z",
    "2012-03-01T10:30:00.000Z",
    "2012-04-01T10:30:00.000Z",
    "2012-05-01T10:30:00.000Z",
    "2012-07-01T10:30:00.000Z",
    "2012-07-02T10:30:00.000Z"
  ],
  "rule_set_between_deprecated": [
    "2012-03-01T10:30:00.000Z",
    "2012-04-01T10:30:00.000Z",
    "2012-05-01T10:30:00.000Z",
    "2012-07-01T10:30:00.000Z"
  ],
  "rule_set_value_deprecated": [
    "DTSTART:20120201T103000Z",
    "RRULE:FREQ=MONTHLY;COUNT=5",
    "EXRULE:FREQ=MONTHLY;COUNT=2",
    "RDATE:20120701T103000Z,20120702T103000Z",
    "EXDATE:20120601T103000Z"
  ],
  "rule_set_str_deprecated": "DTSTART:20120201T103000Z\nRRULE:FREQ=MONTHLY;COUNT=5\nEXRULE:FREQ=MONTHLY;COUNT=2\nRDATE:20120701T103000Z,20120702T103000Z\nEXDATE:20120601T103000Z"
};
(log);
