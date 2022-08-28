#!/usr/bin/env node
import startGame from '../src/index.js';
import { getMathExpression, calcExpression, condition } from '../games/calc.js';

startGame(getMathExpression, calcExpression, condition);
