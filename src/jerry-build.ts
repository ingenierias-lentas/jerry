#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();

program
  .option('-f, --force', 'force build');

program.parse(process.argv);

console.log();
console.log('-----');
console.log('Building SCORE smart contract');