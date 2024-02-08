# What is props in a React component ?

In React, "props" is short for "properties," and it refers to a mechanism for passing data from parent components to child components. Props are read-only and are used to customize and configure child components. They are essentially like function arguments in JavaScript.

Here's a basic example:

```jsx
// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  return (
    <div>
      <ChildComponent name="John" age={30} />
    </div>
  );
}

export default ParentComponent;
```

In this example, `name` and `age` are props being passed to the `ChildComponent`. The `ChildComponent` can then access these props:

```jsx
// ChildComponent.js
import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default ChildComponent;
```

Inside `ChildComponent`, `props` is an object containing all the properties passed to it from the parent component. You can access these properties using dot notation (`props.name`, `props.age`, etc.).

### more example

// function syntax

const getUserInfo = (firstName, lastName, country) => {
  return `${firstName} ${lastName}. Lives in ${country}.`
}

// calling a functons

getUserInfo('Asabeneh', 'Yeteyeh', 'Finland')

//component syntax

// User component, component should start with an uppercase
const User = (props) => {
  return (
    <div>
      <h1>
        {props.firstName}
        {props.lastName}
      </h1>
      <small>{props.country}</small>
    </div>
  )
}
// calling or instantiating a component, this component has three properties and we call them props:firstName, lastName, country
<User firstName = 'Asabeneh', lastName='Yetayeh' country = 'Finland' />


# How do you access props in a React component ?

In a React component, you can access props by using the `props` object that is automatically passed to every functional component or by referencing `this.props` in a class component. Here's how you would access props in both types of components:

1. **Functional Component:**

```jsx
import React from 'react';

function MyComponent(props) {
  return (
    <div>
      <p>Prop value: {props.propName}</p>
    </div>
  );
}
```

In this example, `props.propName` is used to access the value of the prop named `propName`.

2. **Class Component:**

```jsx
import React, { Component } from 'react';

class MyComponent extends Component {
  render() {
    return (
      <div>
        <p>Prop value: {this.props.propName}</p>
      </div>
    );
  }
}
```

Similarly, in a class component, you can access props using `this.props.propName`.

Regardless of the type of component, you can access props inside the component's render method or any other method where you need to use them.

# What data types can we pass as props to components ?

props could be different data types. It could be a string, number, boolean, array, object or a function. We will cover different kind of props in the next sections.

#  What is a propTypes?

`propTypes` is a property available in React components that allows you to define the type of each prop that a component should receive. It helps in debugging by providing warnings if the data types of props passed to a component don't match the expected types.

`propTypes` are optional and are particularly useful in large projects or when working in a team to ensure that components are used correctly.

Here's how you can define `propTypes` for a component:

```jsx
import React from 'react';
import PropTypes from 'prop-types';

function MyComponent(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

export default MyComponent;
```

In this example:

- `PropTypes` is imported from the 'prop-types' package.
- `MyComponent.propTypes` is an object where keys represent prop names and values represent the expected prop types.
- `PropTypes.string` specifies that the `name` prop should be a string, and `PropTypes.number` specifies that the `age` prop should be a number.
- `isRequired` is used to indicate that the prop is required. If the prop is not provided, React will issue a warning in the console.

Using `propTypes` helps catch errors early and provides documentation about the expected interface of your components. It's important to note that `propTypes` are only checked in development mode for performance reasons and are not enforced in production builds.

# What is a default propTypes?

prop-types is a library with which you can check the type of props in React. With defaultProps, we can pass default values to props


