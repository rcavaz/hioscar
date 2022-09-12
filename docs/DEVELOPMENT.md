# DEVELOPMENT

## PROJECT DEPENDENCIES

* Node: `v16.16.0`

When developing, ensure you are using the same node environment than the one being used by the docker image.
**Node Version Manager** is the recommended tool to maintain your nodejs versions.

## PROJECT SKELETON

```txt
├───docs                    # Project documentation
├───lib                     # Shared libraries and helper methods
├───src                     # Project source code
│   └───pages               # Page Object models
│       ├───CareOptions
│       └───Home
└───tests
    ├───e2e                 # End-to-End tests
    └───integration         # Integration tests
```

## DESIGN DECISIONS

### Yarn as the node package manager

For this project, I choose the **yarn** over **npm** because it downloads dependencies faster by parallelizing downloads.

Yarn also offers an advanced feature called [Zero Installs][1] which can greatly improve the performance of docker builds and, consequently, the pipelines. This is done by storing compressing the node_modules in such a way that's friendly to repositories such as **git** so you can get the dependencices right after you checkout a branch. This feature is enabled for this project, you may need to upgrade your version of **yarn** for this to work properly in your local environment.

### Dotenv

This project is configured with **dotenv** and it will fetch the environment settings from the `.env` file. It's a good idea to have examples such as `env.example` commited to the repository to keep track of which variables are used, but never commit sensitive information.

### Page Object Model

The use of this design pattern provides greater stability, readability and extensibility of the test suite since interactions with the web pages is done through abstractions. The [Playwright website][2] offers great and detailed documentation about implementing this pattern.

For this project, page object models are located under `src/pages/<PageName>`, and when implementing new ones they must always extend from the **BasePage** located in `lib/basePage.ts`.

### Reusable Selectors

Element selectors are commonly written as class attributes of page object models for simplicity when reading tutorials but in practice these should be abstracted away. The benefit of doing so is that you can also import them within unit tests and eliminate a source of false alarms; updating a selector will not break tests referencing it.

A list of selectors must be provided when instantiating page object models so that the [Playwright locators][3] can be auto-generated.

Also, to avoid leaking knowledge of selectors to integration and end-to-end tests, factory methods are provided for each page object model.

### Integration tests

For this project, integration tests are be scoped to a single page at a time and do not transition between pages.

If an action would request or redirect to a different page such request must be intercepted; in Playwright this is done by [routing calls][4].

If you would like to test a page with a given context, such context must be defined in the test arrangement section and then be injected to the Page Object Model before loading the page.

### Ent-to-End tests

With these types of tests transitioning between pages is ok but assertions are only made at the very end of the user journey.

[1]: https://yarnpkg.com/features/zero-installs
[2]: https://playwright.dev/docs/test-pom
[3]: https://playwright.dev/docs/locators
[4]: https://playwright.dev/docs/api/class-route
