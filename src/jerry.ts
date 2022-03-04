#!/usr/bin/env node

import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import * as path from 'path';
import { Command } from 'commander';

const program = new Command();

clear();
console.log(chalk.magenta(figlet.textSync('jerry-cli', { horizontalLayout: 'full' })));

program
  .name('jerry')
  .version('0.0.1')
  .description('ICON SCORE smart contract tool')
  .command('build', 'build smart contract').alias('b')
  .command('test', 'test smart contract').alias('t')
  .command('deploy', 'deploy smart contract').alias('d');

console.log('Jerry-rigging');

if (!process.argv.slice(2).length) {
    program.outputHelp();
}

program.parse(process.argv);