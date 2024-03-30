#!/usr/bin/env node

const { filterCalls } = require('./services/filter');
const initNpm = async () => {
  const [type, ...values] = (process.argv || []).splice(2);

  if (!type) {
    console.error('Arrgument missing...');
    console.error("Try 'call -help'");
    process.exit(1);

    return;
  }

  if (type === '-help') {
    console.log('Usage: call -[type] [values]');
  } else if (type === 'filter') {
    filterCalls(values);
  }
};

initNpm();

module.exports = { initNpm, filterCalls };
