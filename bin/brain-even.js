#!/usr/bin/env node
import startGame from '../src/index.js';
import { isEven, condition } from '../games/even.js';
import generateRandomNumber from '../src/random.js';

startGame(generateRandomNumber, isEven, condition);
