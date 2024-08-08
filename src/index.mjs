import { parseArgs } from "node:util";

import { startServer } from "./server.mjs";

const {
	values: { port },
} = parseArgs({
	options: {
		port: {
			default: "43594",
			type: "string",
			short: "p",
		},
	},
	strict: true,
});

const portNumber = Number.parseInt(port, 10);

startServer(portNumber);
