# 30DaysOfCode

Series of projects which I plan on building for next 30 days without fail 🤨

## Day 1: Bin2Dec

Built a Binary 2 Decimal converter

![Bin2Dec](./day-1/Bin2Dec.gif)

### What I learned so far (Pro's)

- I learned `parseInt()` function and how it takes in string/number argument and returns an integer of the specified `radix` (the base in mathematical numeral systems)
- In above app I passed a `redix` or `base` of 2 specifying function should return a Decimal value

### What I should've also done (Con's)

- I should've added regex validation for input feild reather than `alert`ing a message when keycode is not `0 or 1`


## Day 2: Border Radius Previewer

Built a Border Radius Previewer

![Border Radius Previewer](./day-2/Border-Radius-Previewer.gif)

### What I learned so far (Pro's)

- I learned `getComputedStyle()` methos and how it returns an object containing the values of all CSS properties of an element, after applying active stylesheets and resolving any basic computation those values may contain.
- In above project I used `getComputedStyle()` to get current styling properties of `border-radius` which I was able to target through `getPropertyValue()` method

### What I should've also done (Con's)

- Maybe I should've used functions to change border styling instead hard coading values 😅
- Also I should've added ability to copy the border radius property on click


## Day 3: Calculator

Today I built a calculator (I was barely able 😅)

![Calculator](./day-3/Calculator.gif)

### What I learned so far (Pro's)

- I learned about `eval()` method evaluates JavaScript code represented as a string

### What I should've also done (Con's)

- I initially started out thinking of implementing switch cases for each operation, but eventually I got lazy and use `eval()` function to return the calculated result
