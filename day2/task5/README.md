# Task 5: Composing functions

Let's experiment with functional composition by combining functions using the `flow` function (also known as `pipe` or `composeRight`).

## Task

Create a `slugify` function that takes a string and returns a new string:

- Spaces should be replaced by dashes (-)
- Result should be all lowercase
- Result should be URL encoded (`encodeURIComponent`)

Use the provided functions to implement this using function composition.

## Notes

A slug is a user friendly and URL valid string, usually based on the title of a webpage.
It's commonly used for SEO purposes and to make URLs more user friendly.
