import net from "node:net";

function handleConnection(socket) {
	socket.on("data", (buffer) => {
		console.log(buffer);
	});
}

/**
 * Handles starting the server on the supplied port and accepting connections
 *
 * @param {number} port
 */
export function startServer(port) {
	const server = net.createServer();

	server.on("error", (error) => {
		console.error("Server encountered an error - Closing...");
		console.error(error.stack);

		server.close();
	});

	server.on("connection", (socket) => {
		handleConnection(socket);
	});

	server.on("listening", () => {
		const address = server.address();

		console.log(`Server listening on ${address.address}:${address.port}`);
	});

	server.listen(port);
}
