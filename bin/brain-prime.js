#!/usr/bin/env node
import startGame from '../src/index.js';
import generateRandomNumber from '../src/random.js';
import { isPrime, condition } from '../games/prime.js';

startGame(generateRandomNumber, isPrime, condition);
