#!/usr/bin/env node
import startGame from '../src/index.js';
import generateRandomNumber from '../src/random.js';
import { sayIsPrime, condition } from '../games/prime.js';

startGame(generateRandomNumber, sayIsPrime, condition);
