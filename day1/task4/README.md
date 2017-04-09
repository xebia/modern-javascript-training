# Task 4: Init your own package

Sharing code packages cross projects is very common, using external dependencies can be really productive.
These bits of code are packaged and placed in a package-registry. NPM is node's package manager.

When you're consuming node packages, you should initialize npm in that directory. This generates a `package.json`.
This will list all dependencies of this package.

## Task
1. Create a package by running `npm init`. This will ask you a few questions, just press enter a few times.
2. Add `eslint` as a dependency.
3. Add a npm-script that will run eslint on the src folder.
4. Run the script. (see tips)
5. Fix the issues. *optional* (see tips)

## Tips
So eslint without a configuration will do nothing.
You can either pick a config file from another project you've seen and liked the code-style of. Or you can generate a code-style by:
1. Install eslint globally `npm install --global eslint`
2. Run `eslint --init` and awnser the questions.

If you choose to generate, these options are pretty good:
> ? How would you like to configure ESLint? **Use a popular style guide**
> ? Which style guide do you want to follow? **Airbnb**
> ? Do you use React? **No**
> ? What format do you want your config file to be in? **JavaScript**

Generating will also add any dependencies to your `package.json`.

If you pick an eslint configuration from somewhere, make sure to install all the dependencies.

---

If you have time, you could add eslint intergration in your editor, or perhaps it already has it.
This way, you editor can perhaps auto-fix some things for you, or show you visually where problems are, and how to resolve them.

---

You can can ask eslint to fix things for you by adding `--fix` to the command: `eslint ./src --fix`.
