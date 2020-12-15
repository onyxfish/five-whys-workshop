# Five Whys Workshop

This repository contains a code sample for use in teaching **refactoring** strategies. The code creates simple ASCII tables. It is written in Javascript/Node and includes a test suite written using [Jest](https://jestjs.io/).

This code is particularly helpful for understanding the real world applications of five software design principles:

1. Separation of concerns
2. Single Responsibility Principle
3. Principle of Least Knowledge
4. Don’t Repeat Yourself (DRY)
5. Minimize upfront design (YAGNI)

It is also useful for learning how to puzzle apart messy code and how to use testing as an aid in refactoring.

For further reading on refactoring buy Martin Fowler's excellent book, [Refactoring](https://refactoring.com/).

## How to run this workshop

1. Setup with everyone on video chat or, if you are co-located, together in a room with a large screen.
2. Go through [the slides](https://docs.google.com/presentation/d/15SAtKjdkXy5-WbWMJEmVB6tJTLT4Z1hz0kUg8wo8DZs/edit#slide=id.p8) and explain each concept.
3. Put the code up on the screen and solicit suggestions for improvements. You can either...
    * Have folks suggest improvements for you to make, or
    * Pass the keyboard around the room
4. The person making/suggesting the change must justify _why_ their change improves the code, either by referencing one of the five principles, or a more general principle of good programming. (e.g. readability)
5. Ask the room: Does this change improve the code? If there is disagreement, discuss.
6. After each change is made, run the tests. The tests must pass before moving on to the next person.
7. The workshop is over when time is up or nobody can suggest additional improvements.

Note that changes can and _should_ build on one another. Participants can modify or undo one another's changes.

## Setup

```
yarn
```

## Running tests

```
yarn test
```