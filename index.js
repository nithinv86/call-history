#!/usr/bin/env node

const { filterCalls, removeEmpty } = require('./services/filter');
const initNpm = async () => {
  let [type, ...values] = (process.argv || []).splice(2);

  if (!type) {
    console.error('Arrgument missing...');
    console.error("Try 'call -help'");
    process.exit(1);

    return;
  }

  if (type === '-help') {
    console.log('Usage: call -[type] [values]');
  } else if (type === 'filter') {
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

module.exports = { initNpm, filterCalls };
