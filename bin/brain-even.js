#!/usr/bin/env node
import run from '../src/index.js';
import game from '../games/even.js';
import questions from '../games/conditions.js';

run(game, questions.even);
