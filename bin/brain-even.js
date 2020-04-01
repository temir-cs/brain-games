#!/usr/bin/env node
import { askNameAndGreet, evenGame } from '../src/index.js';

console.log('Welcome to the Brain Games!');
const name = askNameAndGreet();
evenGame(name);
