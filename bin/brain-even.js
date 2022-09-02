#!/usr/bin/env node
import startGame from '../src/index.js';
import { sayIsEven, condition } from '../games/even/even.js';
import generateRandomNumber from '../src/random.js';

startGame(generateRandomNumber, sayIsEven, condition);
