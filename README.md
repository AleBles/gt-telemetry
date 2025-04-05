# GT-Telemetry

GT-Telemetry is a Node.js application designed to retrieve telemetry data from Gran Turismo games. This project is inspired by [Nenkai](https://twitter.com/Nenkaai)'s [SimulatorInterface](https://github.com/Nenkai/PDTools).

## Features

- Retrieve and process telemetry data from Gran Turismo games.
- Built with modern web technologies including React and TypeScript.
- Utilizes a variety of libraries for UI components, animations, and more.

## Installation

To get started with GT-Telemetry, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd gt-telemetry
npm install
```

## Usage

### Running the Server

To start the server, use the following command:

```bash
npm run run-server
```

### Command Line Arguments for the Server

When running the server, you can specify the mode of operation using command line arguments. The available options are:

- `--mode` or `-m`: Sets the mode of the server. The options are:
  - `playstation`: Connects to the PlayStation for telemetry data (default).
  - `local`: Uses a mock server for local testing and development.

- `--logFilePath` or `-l`: Sets the log file path for the MockServer. Default is `null`.

Example usage:

```bash
npm run run-server -- --mode local
```

### Running the Application

To start the application in development mode, use:

```bash
npm start
```

To build the application for production, use:

```bash
npm run build
```

## Dependencies

GT-Telemetry uses a variety of dependencies, including but not limited to:

- React
- TypeScript
- Framer Motion
- React Router DOM
- Tabler Icons React

For a full list of dependencies, see the `package.json` file.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Acknowledgments

Special thanks to [Nenkai](https://twitter.com/Nenkaai) for the inspiration and foundational work on the SimulatorInterface.
