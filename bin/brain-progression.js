#!/usr/bin/env node
import { generateProgression, searchMissingNumber, condition } from '../games/progression.js';
import startGame from '../src/index.js';

startGame(generateProgression, searchMissingNumber, condition);
