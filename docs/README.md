# Project Workspace

This project contains two workspaces: `web` and `mobile`. Below is a description of the available scripts for each workspace.

## Workspaces

### Web

The `web` workspace is a React application configured with `react-scripts`. Below are the available scripts:

- **`start`**: Starts the development server.
  `yarn workspace web start`
- **`build`**: Builds the application for production.
  `yarn workspace web build`
- **`test`**: Runs tests with coverage.
  `yarn workspace web test`
- **`eject`**: Ejects the configuration for more customization.
  `yarn workspace web eject`

### Mobile

The `mobile` workspace is an Expo application. Below are the available scripts:

- **`start`**: Starts the Expo development server.
  `yarn workspace mobile start`
- **`android`**: Starts the Expo development server and opens the Android emulator.
  `yarn workspace mobile android`
- **`ios`**: Starts the Expo development server and opens the iOS simulator.
  `yarn workspace mobile ios`
- **`web`**: Starts the Expo development server for web.
  `yarn workspace mobile web`
- **`eject`**: Ejects the Expo configuration for more customization.
  `yarn workspace mobile eject`
- **`test`**: Runs tests with coverage.
  `yarn workspace mobile test`

## Usage

To run a script, use the following command pattern:

`yarn workspace <workspace-name> <script-name>`

Replace `<workspace-name>` with `web` or `mobile`, and `<script-name>` with the desired script.

For example, to start the `web` workspace, use:

`yarn workspace web start`

To start the `mobile` workspace on an Android emulator, use:

`yarn workspace mobile android`
