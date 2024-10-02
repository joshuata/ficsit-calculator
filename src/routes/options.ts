import { writable } from 'svelte/store';

class CalculatorOptions {}

export const options = writable(new CalculatorOptions());
