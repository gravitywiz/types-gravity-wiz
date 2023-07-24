# 🧙‍♂️ Hi! Welcome to Gravity Wiz's Typescript Definitions.

Herein find TypeScript definitions for Gravity Forms, Perks crafted by Gravity Wiz and other Gravity Forms plugins.

## 💾 Installation

```sh
yarn add -D types-gravity-wiz
```

or...
```sh
npm install --save-dev types-gravity-wiz
```

## 🚀 Usage

### `tsconfig.json`

To make ambient types automatically available, you can add `@gravitywiz` to the TypeScript `typeRoots` like so:

(By default, `node_modules/@types` is included in `typeRoots` and it's recommended to keep it.)

```json
{
	"compilerOptions": {
		"typeRoots": [
			"node_modules/@types",
			"node_modules/@gravitywiz"
		]
	}
}
```

### `/// <reference path="..." />`

To use the ambient module definitions without modifying `tsconfig.json`, you can load in the types using
[`/// <reference path="..." />`](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-path-).

(Make sure to the path is correct for your setup.)

```ts
/// <reference path="../../../node_modules/@gravitywiz/types/index.d.ts" />
```
