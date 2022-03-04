#!/usr/bin/env node

export {};

const { Command } = require('commander');
const program = new Command();

program
  .option('-f, --force', 'force build');

program.parse(process.argv);

console.log();
console.log('-----');
console.log('Testing SCORE smart contract');