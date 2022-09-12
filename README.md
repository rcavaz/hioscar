# hioscar

## Running with Docker (preferred method)

This test suite is built in **Docker** for your convenience and should be run using the `cli.sh` script provided as shown below:

```sh
bash cli.sh run
```

The above will configure the docker image, launch the playwright tests, and place the test reports in the current directory.

Once done, you can clean your docker environment with the following:

```sh
bash cli.sh clean
```

### More on the CLI shell script

This is just a wrapper around docker commands to greatly simplify interacting with this project.

## Running with Node

```sh
# Activate Node version 16.16.0 using NVM
nvm use 16.16.0

# Download node dependencies
yarn

# Setup dotenv file
cp env.example.E2E .env

# Run the chromium tests only
yarn test:chromium
```

## The Test Suite

This test suite is powered by [Playwright][1]. To learn more about the design decisions that paved the way for this project, please see the [DEVELOPMENT][2] guide.

[1]: https://playwright.dev/
[2]: ./docs/DEVELOPMENT.md
