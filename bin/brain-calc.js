#!/usr/bin/env node
import game from '../games/calc.js';
import run from '../src/index.js';
import questions from '../games/conditions.js';

run(game, questions.calc);
