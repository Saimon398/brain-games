#!/usr/bin/env node
import startGame from '../src/index.js';
import { getNumbers, gcd, condition } from '../games/gcd.js';

startGame(getNumbers, gcd, condition);
