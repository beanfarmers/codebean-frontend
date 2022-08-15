# CodeBean Frontend

The frontend repository for _CodeBean_.

## Package Information

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Select](https://react-select.com/home)
- For **displaying** and **writing** in **code blocks** and **highlighting syntax**:
    - [react-code-blocks](https://github.com/rajinwonderland/react-code-blocks)
    - [react-simple-code-editor](https://github.com/satya164/react-simple-code-editor)
    - [Prism.js](https://prismjs.com/) and [babel-plugin-prismjs](https://github.com/mAAdhaTTah/babel-plugin-prismjs)

## Setup & Run

### 1. Install required packages

```bash
$ yarn
```

### 2. Run the development server:

```bash
$ yarn run dev
```

## Adding more languages to be syntax-highlighted

`babel-plugin-prismjs` is a `Babel` plugin, and is used to support `Prism.js` with `React` with Babel.

Any language that should be syntax-highlighted in the code editor **must be included in `.babelrc`, to be bundled** with Prism.

You can take a look at the languages available for Prism.js [here](https://prismjs.com/).

The way I did is creating a dictionary of supported languages in Prism.js to be used in the website in _`PrismUtils.ts`_, which must be included in `.babelrc`. 

By doing this, I am able to manage supported languages for Prism.js like a type, and also make it in sync with `react-code-blocks`, which are totally different modules.
