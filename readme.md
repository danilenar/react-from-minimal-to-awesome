# ReactJs from minimal project to awesome

The goal of this project is to offer a path to follow in order to start a React app using the lastest nice-to-have technologies, but also gaining control over each one of these tools, by understanding their configuration. It arose from an own inconvenience, I wanted to create a React app using several technologies I couldn't find a boilerplate that offered this particular stack. My first attempt was taking a boilerplate, anyone looking similar to what I needed, such as Create-React-app, and trying to add the lacking technologies to the stack. Of course it ended up in a complete mess, but it also gave me a good lesson. I needed to learn how to setup my own, customized project. No boilerplates allowed. :no_entry:

## First step: Minimal project

First things first. We need a minimal setup for a working project. In this milestone we end up with some basic required technology such as [Webpack](https://webpack.js.org/concepts/), a static module bundler for modern JavaScript applications. This will help us with the set up of most of the tools we want to have in the stack. Also added [Babel](https://babeljs.io/docs/en/), a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. For me, the possibility to write ES6+ code is a must. Also will help us with the addition of type annotations with Typescript. In order to achieve this, I've just started following this pretty simple and nicely explained tutorial. I've just made small changes on the code.

In order to achieve this, I've just started following this pretty simple and nicely explained tutorial: [The Minimal React Project Setup using Webpack and Babel - theshravan.net](https://theshravan.net/blog/the-minimal-react-project-setup-using-webpack-and-babel/). I've just made small changes on the code. 

But, in order to get a deeper background on these tools, and what did we actually made adding those config files, I've recurred to the documentation:

- ***Webpack***: Check first the [concepts page](https://webpack.js.org/concepts) and don't miss the definitions of [mode](https://webpack.js.org/concepts/#mode), [entry](https://webpack.js.org/concepts/#entry), [output](https://webpack.js.org/concepts/#output) and [loaders](https://webpack.js.org/concepts/#loaders).

- ***Babel***: Check [What is Babel?](https://babeljs.io/docs/en/) and [Usage Guide](https://babeljs.io/docs/en/usage). Then make sure you understand the concepts of [plugins](https://babeljs.io/docs/en/plugins) and [presets](https://babeljs.io/docs/en/presets)

You will see the result code from this step by doing:

```shell
git checkout step-1
```

## Step 2: Adding test support

Test an aplication is a fundamental part of every project. Personally, I strongly disagree with those who think that certain testing code is just unnecesary. Even when it's testing the obvious, this code is forcing to think twice every change you made on your app.

In this section we will add minimal testing support with [Jest snapshots](https://jestjs.io/docs/es-ES/snapshot-testing). This will not be the only type of test we will add, but looks like the only thing we can do with such a minimal code to test.

First step is to add the dependencies needed those are:

```
npm i --dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer

```

Second, we are going to test the only component we already have on our app. This is the code to add:

```jsx
import React from 'react'
import HelloWorld from '../src/hello-world'
import renderer from 'react-test-renderer'

test('HelloWorld match snapshot', () => {
    const component = renderer.create( 
        < HelloWorld/>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
```

Lastly, I don't really like extra long names. To avoid name the tests folder `___Tests___` (default Jest config) I took a look to the [custom configs docs](https://jestjs.io/docs/en/configuration#testmatch-arraystring) and added the following code to [`jest.config.js`](jest.config.js):

```js
const {
    defaults
} = require('jest-config')

module.exports = {
   testMatch: ['**/test/**/*.[jt]s?(x)']
}
```

As an extra, we are already inducted on how to add custom configs to Jest tests.

We also need to add a test command on [`package.json`](package.json), this will be:

```
  "scripts": {
    "start": "webpack-dev-server --mode development --open --hot",
    "test": "jest" // < add test command.
  }
```

Running this will produce this [`hello-world.js`](test/__snapshots__/hello-world.js.snap) file as output. Every file on this snapshots folder needs to be under git version control.

