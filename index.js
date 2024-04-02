#!/usr/bin/env node

const initNpm = async () => {
  let [type, ...values] = (process.argv || []).splice(2);

  if (!type) {
    console.error('Arrgument missing...');
    console.error("Try 'call -help'");
    process.exit(1);

    return;
  }

  if (type === 'help' || type === 'h') {
    console.log('Usage: call [filter] -[from] -[to] -[task]');
    console.log(`Below are common Call History commands utilized in various scenarios:\n
Format call history to time entry:
  filter\t: Select and group each person's call history. For example "call filter -task <task id> -from <start_date> -to <end_date>"`);
  } else if (type === 'version' || type === 'v') {
    const path = require('path');
    const packageJson = require(path.resolve(__dirname, './package.json'));
    const packageVersion = packageJson.version;

    console.log('Package version:', packageVersion);
  } else if (type === 'filter') {
    const { filterCalls, removeEmpty } = require('./services/filter');

    if (values?.length) {
      values[0] = ` ${values[0]}`;
    }

    values = removeEmpty(values.join(' '))
      .split(' -')
      .filter((item) => item);

    filterCalls(values);
  }
};

initNpm();

module.exports = { initNpm };
