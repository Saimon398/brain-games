#!/usr/bin/env node
import run from '../src/index.js';
import game from '../games/progression.js';
import questions from '../games/conditions.js';

run(game, questions.progression);
