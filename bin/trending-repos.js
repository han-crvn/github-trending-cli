#!/usr/bin/env node
import { program } from 'commander';
import run from '../src/index.js';

program
  .name('trending-repos')
  .description('🔥 Discover trending GitHub repositories')
  .version('1.0.0')
  .option('-d, --duration <time>', 'Time period: day, week, month, or year', 'week')
  .option('-l, --limit <number>', 'Number of repositories to display', '10')
  .parse();

const options = program.opts();
run(options);
