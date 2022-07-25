#! /usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers');
const dedent = require('dedent');

const arg = hideBin(process.argv);
const cli = yargs(arg);

cli
  .usage('Usage: clitest-hill [command] <options>')
  .demandCommand(1, "A command is required. Pass --help to see all available commands and options.")
  .alias("h", "help")
  .alias("v", "version")
  .wrap(cli.terminalWidth())
  .epilog(dedent`
  When a command fails, all logs are written to lerna-debug.log in the current working directory.

  For more information, check out the docs at https://lerna.js.org/docs/introduction
`)
  .options({
    debug: {
      type: 'boolean',
      describe: "bootstrap debug mode",
      alias: 'd'
    }
  })
  .group(['debug', 'ci'], "Dev Options:")
    .option("ci", {
      // hidden: true,
      type: "boolean",
      describe: "ci debug mode",
    })
  .argv

if (argv.ships > 3 && argv.distance < 53.5) {
  console.log('Plunder more riffiwobbles!')
} else {
  console.log('Retreat from the xupptumblers!')
}