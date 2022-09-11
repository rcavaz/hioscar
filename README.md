# hioscar

This test suite is built in **Docker** for your convenience and should be run using the `cli.sh` script provided as shown below:

```sh
bash cli.sh run
```

The above will configure the docker image, launch the playwright tests, and place the test reports in the current directory.

## PROJECT DEPENDENCIES

* Node: `v16.16.0`
* Playwright docker image: `mcr.microsoft.com/playwright:v1.25.0-focal`

When developing, ensure you are using the same node environment than the one being used by the docker image.
You can use **Node Version Manager** to maintain your nodejs versions.
