# 🧙‍♂️ Hi! Welcome to Gravity Wiz's Typescript Definitions.

Herein find TypeScript definitions for Gravity Forms, Perks crafted by Gravity Wiz and other Gravity Forms plugins.

# 🚀 Usage

### Install

```sh
yarn add -D types-gravity-wiz
```

or...
```sh
npm install --save-dev types-gravity-wiz
```

### Extending `window`

To use the ambient module definitions to make types available on the `window` object, reference the respective types files you need like this. (Make sure to the path is correct for your setup.)

```ts
/// <reference path="../../../node_modules/types-gravity-wiz/gravityforms.d.ts" />
```

### Importing types individually

This also supports importing individual types like so:

```ts
import type { Field } from 'types-gravity-wiz/gravityforms';
```
