# inprodi-ui
## Content

- [Links](#links)
- [Packages](#packages)
- [Monorepo](#monorepo)
    - [What is a monorepo?](#what-is-a-monorepo)
    - [Lerna](#lerna)
    - [Project structure](#project-structure)
    - [Task](#task)
    - [Publish](#publish)

## Links
- [Storybook documentation](https://guileless-parfait-5f3c72.netlify.app/?path=/story/core-form-textarea--basic)
## Packages
- [@inprodi/core](https://github.com/inprodiwebstudio/inprodi-ui/tree/main/packages/inprodi-core): ui library boosted by [mantine](https://mantine.dev/)
## Monorepo
To archive the following aproach @inprodi/core, @inprodi/icons, @inprodi/dropzone, etc. We need to decide the monorepo system.
### What is a monorepo?
A monorepo is a version-controlled code repository that holds many projects. While these projects may be related, they are often logically independent and run by different teams... 
To know more about monorepo [visit](https://semaphoreci.com/blog/what-is-monorepo).

## Lerna
[Lerna](https://lerna.js.org/) is a fast modern build system for managing and publishing multiple JavaScript/TypeScript packages from the same repository.
## Project structure
````
examples/
    src/
        ...
    package.json
    tsconfig.json
    vite.confi.ts
packages/
    inrpodi-core/
        src/
            ...
        package.json
        jest.config.js
        tsconfig.json

package.json
````
- **examples:** we provide to the user an example folder ready to run an application to show how to use the inprodi library.
- **packages:** all the inprodi library package.

To visualize the workspace run:
````
npx nx graph
````
## Publish
In the root.
To make a conventional commits.
````
git add <file>
yarn commit
git push
````
To versioning all your packages to publish run
````
yarn lerna-version
````
To create your tag
````
yarn lerna-publish
````
To publish our package we need to be logge
````
npm login
````
Finally move to the directory package example _inprodi-core_ and run
````
npm publish
````