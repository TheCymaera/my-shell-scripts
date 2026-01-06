#! /usr/bin/env bun
import chalk from 'chalk';
import { parseArgs } from "util";
import process from "process";

const { values: args } = parseArgs({
	args: Bun.argv,
	options: {
		"message": {
			type: "string",
			default: "Are you sure you want to continue?",
		},
		"confirm-string": {
			type: "string",
			default: "yes",
		},
	},
	strict: true,
	allowPositionals: true,
});

const divider = chalk.yellow("=".repeat(50));
const softDivider = "";

console.log(divider);
console.log(chalk.yellow(args.message));

console.log(softDivider);

const answer = prompt(chalk.cyan(`Enter "${chalk.yellow(args["confirm-string"])}" to confirm:`));

console.log(softDivider);

if (answer !== args["confirm-string"]) {
	console.log(chalk.red("Confirmation string did not match. Aborting."));
	console.log(divider);
	process.exit(1);
}

console.log(chalk.green("Confirmed."));
console.log(divider);
process.exit(0);