const program = require('commander');

program.parse(process.argv);

console.log('Usage: call [filter] -[from] -[to] -[task]');
console.log('Usage: call [version] | [help]');
console.log(`Below are common Call History commands utilized in various scenarios:\n
Format call history to time entry:
  filter\t: Select and group each person's call history. For example "call filter -task <task id> -from <start_date> -to <end_date>"`);

/* const initNpm = async () => {
  const args = process.argv.slice(2);
  const [type, ...values] = args;

  if (!type) {
    console.error('Argument missing...');
    console.error("Try 'call help'");
    process.exit(1);
    return;
  }

  if (program.help) {
    displayHelp();
  } else if (program.version) {
    displayVersion();
    } else if (type === 'filter') {
    applyFilter(values);
  }
};

const displayHelp = () => {
  console.log('Usage: call [filter] -[from] -[to] -[task]');
  console.log('Usage: call [version] | [help]');
  console.log(`Below are common Call History commands utilized in various scenarios:\n
Format call history to time entry:
  filter\t: Select and group each person's call history. For example "call filter -task <task id> -from <start_date> -to <end_date>"`);
};

const displayVersion = () => {
  const path = require('path');
  const packageJson = require(path.resolve(__dirname, './package.json'));
  const packageVersion = packageJson.version;

  console.log('Package version:', packageVersion);
};

const applyFilter = (values) => {
  const { filterCalls, removeEmpty } = require('./call-filter');

  if (values?.length) {
    values[0] = ` ${values[0]}`;
  }

  const filteredValues = removeEmpty(values.join(' '))
    .split(' -')
    .filter((item) => item);

  filterCalls(filteredValues);
};

if (program.version || program.help) {
  initNpm();
} */
