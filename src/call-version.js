#!/usr/bin/env node
const version = require('../package.json').version;
const program = require('commander');

program.version(version).parse(process.argv);

console.log('Call version ', version);
