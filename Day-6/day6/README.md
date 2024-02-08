# Exercises: Level 1

## Why you need to map an array ?

in react if we simply pass the array then all the items will be glued together 

for example: 
```
import React from 'react'
import ReactDOM from 'react-dom'
const App = () => {
  return (
    <div className='container'>
      <div>
        <h1>Numbers List</h1>
        {[1, 2, 3, 4, 5]}
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

```
therefore we use map to run the elements separately

```
import React from 'react'
import ReactDOM from 'react-dom'

const Numbers = ({ numbers }) => {
  // modifying array to array of li JSX
  const list = numbers.map((number) => <li>{number}</li>)
  return list
}

// App component

const App = () => {
  const numbers = [1, 2, 3, 4, 5]

  return (
    <div className='container'>
      <div>
        <h1>Numbers List</h1>
        <ul>
          <Numbers numbers={numbers} />
        </ul>
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

```

## Why we need keys during mapping an array ?

Keys help React to identify items which have changed, added, or removed. Keys should be given to the elements inside the array to give the elements a stable identity. The key should be unique. Mostly data will come with as an id and we can use id as key. If we do not pass key to React during mapping it raises a warning on the browser. If the data does not have an id we have to find a way to create a unique identifier for each element when we map it. See the following example:

```
import React from 'react'
import ReactDOM from 'react-dom'

const Numbers = ({ numbers }) => {
  // modifying array to array of li JSX
  const list = numbers.map((num) => <li key={num}>{num}</li>)
  return list
}

const App = () => {
  const numbers = [1, 2, 3, 4, 5]

  return (
    <div className='container'>
      <div>
        <h1>Numbers List</h1>
        <ul>
          <Numbers numbers={numbers} />
        </ul>
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

```

## What is the importance of destructuring your code ?

Destructuring in JavaScript is a powerful feature that allows you to extract data from arrays, objects, and other iterable structures into distinct variables. It helps simplify your code and make it more readable by reducing repetition and improving clarity. Here are some reasons why destructuring is important:

1. **Clarity and Readability**: Destructuring allows you to extract values from complex data structures and assign them to variables with meaningful names. This makes your code more self-explanatory and easier to understand, especially when dealing with nested objects or arrays.

2. **Reduced Boilerplate**: Destructuring can significantly reduce the amount of boilerplate code needed to access nested data. Instead of manually accessing properties or elements multiple times, you can destructure them in a single line.

3. **Shorter Syntax**: Destructuring provides a concise syntax for extracting values from data structures. It can make your code more compact and expressive, especially when combined with other JavaScript features like arrow functions and spread syntax.

4. **Improved Maintainability**: By improving clarity and reducing boilerplate, destructuring can make your code easier to maintain. When you or other developers revisit the code later, they can quickly understand the structure of the data and how it's being used.

5. **Avoiding Repetition**: Destructuring allows you to extract multiple values from an object or array in a single statement, avoiding the need to repeat access to the same data multiple times.

6. **Facilitates Function Parameter Handling**: Destructuring is commonly used in function parameters to extract specific values from objects passed as arguments. This can make function signatures more explicit and provide a clear indication of the expected input structure.

Overall, destructuring is an important tool in JavaScript for improving code readability, reducing repetition, and enhancing maintainability. It's a feature that can make your code more elegant and easier to work with, especially when dealing with complex data structures.

## Does destructuring make your code clean and easy to read ?

yes

