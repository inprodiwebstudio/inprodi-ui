# inprodi icons
[![NPM](https://img.shields.io/npm/v/@inprodi/icons)](https://www.npmjs.com/package/@inprodi/icons)
[![npm downloads](https://img.shields.io/npm/dm/@inprodi/icons)](https://www.npmjs.com/package/@inprodi/icons)

Inprodi icons library.

[View documentation](https://guileless-parfait-5f3c72.netlify.app/?path=/story/all-icons-iconography--page)


## Installation

```bash
# With yarn
yarn add @inprodi/icons

# With npm
npm install @inprodi/icons
```

### Usage

```jsx
import React from "react";
import { User } from "@inprodi/icons";

const App = () => {
  return <User />;
};

export default App;
```
## Consideration
This package not pre-compile its ES modules, so you need to transpile it to avoid jest errors.
To setup the jest environment, you need to create the following files.

_babel.config.js_
````js
module.exports = {
	presets : [
		["@babel/preset-env", { targets : { node : "current" } }],
		[ "@babel/preset-react", { "runtime" : "automatic" } ],
		"@babel/preset-typescript",
	],
};

````
_jest.config.js_
````js
module.exports = {
	verbose         : true,
	testEnvironment : "jsdom",
	transformIgnorePatterns : [
		"/node_modules/(?!(@inprodi/icons)/)",
	],
};
````
To know about visist [unexpected token erro](https://jaketrent.com/post/jest-unexpected-token-typescript/) or [transformignorepatterns](https://jestjs.io/docs/configuration#transformignorepatterns-arraystring)
## License

MIT
