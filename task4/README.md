# Task 4: Init your own package

Sharing code packages cross projects is very common, using external dependencies can be really productive.
These bits of code are packaged and placed in a package-registry. NPM is node's package manager.

When you're consuming node packages, you should initialize npm in that directory. This generates a `package.json`.
This will list all dependencies of this package.

## Task
1. Create a package by running `npm init`. This will ask you a few questions.
2. Add `eslint` as a dependency.
3. Add a npm-script that will run eslint on the src folder.
4. Run the script.
5. Fix the issues.

## Tips
If you have time, you could add eslint intergration in your editor, or perhaps it already has it.
This way, you editor can perhaps auto-fix some things for you, or show you visually where problems are, and how to resolve them.
