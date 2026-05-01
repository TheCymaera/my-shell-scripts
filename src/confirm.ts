#! /usr/bin/env bun
import { parseArgs, styleText } from "node:util";
import process from "node:process";

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

const divider = styleText("yellow", "=".repeat(50));
const softDivider = "";

console.log(divider);
console.log(styleText("yellow", args.message));

console.log(softDivider);

const answer = prompt(styleText("cyan", `Enter "`) + styleText("yellow", args["confirm-string"]) + styleText("cyan", `" to confirm:`));

console.log(softDivider);

if (answer !== args["confirm-string"]) {
	console.log(styleText("red", "Confirmation string did not match. Aborting."));
	console.log(divider);
	process.exit(1);
}

console.log(styleText("green", "Confirmed."));
console.log(divider);
process.exit(0);