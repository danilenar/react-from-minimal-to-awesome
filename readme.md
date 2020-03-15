# ReactJs from minimal project to awesome

The goal of this project is to offer a path to follow in order to configurate a React app using the lastest technologies, but in order to have in control the adition of each one of them. Surges from an own inconvenience, I needed to create a React App using several technologies an no boilerplate offers this combination. My first attempt was to get a boilerplate, such as create-react-app, and try to add the missing technologies to the stack. Of course it ends up in a complete mess, but also gave me a good lesson. I needed to lear how to setup my own, customized project. No boilerplates allowed. :no_entry:

## First step: Minimal project

First things first. We need a minimal setup for a working project. In this milestone we end up with some basic required technology such as [Webpack](https://webpack.js.org/concepts/), a static module bundler for modern JavaScript applications. This will help us with the set up of most of the tools we want to have in the stack. Also added [Babel](https://babeljs.io/docs/en/), a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. For me, the possibility to write ES6+ code is a must. Also will help us with the addition of type annotations with Typescript. In order to achieve this, I've just started following this pretty simple and nicely explained tutorial. I've just made small changes on the code.

In order to achieve this, I've just started following this pretty simple and nicely explained tutorial: [The Minimal React Project Setup using Webpack and Babel - theshravan.net](https://theshravan.net/blog/the-minimal-react-project-setup-using-webpack-and-babel/). I've just made small changes on the code. 

But, in order to get a deeper background on these tools, and what did we actually made adding those config files, I've recurred to the documentation:

- ***Webpack***: Check first the [concepts page](https://webpack.js.org/concepts) and don't miss the definitions of [mode](https://webpack.js.org/concepts/#mode), [entry](https://webpack.js.org/concepts/#entry), [output](https://webpack.js.org/concepts/#output) and [loaders](https://webpack.js.org/concepts/#loaders).

- ***Babel***: Check [What is Babel?](https://babeljs.io/docs/en/) and [Usage Guide](https://babeljs.io/docs/en/usage). Then make sure you understand the concepts of [plugins](https://babeljs.io/docs/en/plugins) and [presets](https://babeljs.io/docs/en/presets)