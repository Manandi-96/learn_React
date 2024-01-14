# DAY-1

## Exercises:

### What is React?

React is an open-source JavaScript library used for building user interfaces or UI components, particularly for single-page applications where UI updates need to be efficient. It was developed and is maintained by Facebook. React allows developers to create reusable UI components and manage the state of the application efficiently.

Key features of React include:

1. **Component-Based Architecture:** React applications are structured as a hierarchy of components. Each component represents a part of the user interface, and these components can be reused throughout the application.

2. **Virtual DOM:** React uses a virtual representation of the DOM (Document Object Model) called the Virtual DOM. Instead of directly manipulating the actual DOM, React updates a virtual version first and then calculates the most efficient way to update the real DOM. This helps improve performance by minimizing unnecessary updates.

3. **Declarative Syntax:** React uses a declarative approach to define how the UI should look. Developers specify the desired outcome, and React takes care of updating the DOM to match that outcome. This is in contrast to an imperative approach where developers would explicitly define each step of the UI update process.

4. **JSX (JavaScript XML):** JSX is a syntax extension for JavaScript recommended by React. It allows developers to write HTML-like code in their JavaScript files, making it more readable and convenient. JSX is then transpiled into regular JavaScript.

5. **State and Props:** React components can have state, which represents the current condition of the component, and props, which are properties passed from a parent component. By managing state and props, React makes it easier to build dynamic and interactive user interfaces.

React is often used in combination with other tools and libraries, such as Redux for state management, React Router for handling navigation, and various build tools like Webpack and Babel. It has gained widespread adoption in the web development community due to its efficiency, flexibility, and the large community support.



### What is a library?

A library, in the context of software development, refers to a collection of pre-written code, functions, and routines that developers can use to perform common tasks or implement specific functionalities without having to write the code from scratch. Libraries are essentially reusable chunks of code that provide a set of functions and procedures, often organized in a way that makes them easy to use.

Libraries can serve various purposes, such as:

1. **Code Reusability:** Developers can use functions and modules from libraries to avoid reinventing the wheel. This promotes efficiency and consistency in software development.

2. **Abstraction:** Libraries abstract away complex operations or implementations behind a simple interface, allowing developers to use high-level functionality without needing to understand the underlying details.

3. **Modularity:** Libraries promote modular programming by allowing developers to break down their code into smaller, manageable pieces. Each piece can be a function, class, or module provided by a library.

4. **Collaboration:** Libraries facilitate collaboration by enabling developers to share common solutions and tools. This can lead to the creation of a larger ecosystem where developers can build on each other's work.

In the case of React, it is often referred to as a library because it provides a set of pre-written code and functions for building user interfaces. React is specifically a JavaScript library for creating UI components in a modular and reusable manner. The distinction between a library and a framework is that while a library provides specific tools and utilities that developers can choose to use, a framework typically imposes a more structured architecture and dictates the flow of control in the application.


### What is a single page application?

A Single Page Application (SPA) is a type of web application or website that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from the server. In SPAs, the content is updated dynamically through AJAX (Asynchronous JavaScript and XML) or similar technologies, without requiring a full page reload.

Key characteristics of Single Page Applications include:

1. **Dynamic Content Loading:** SPAs load the initial HTML, CSS, and JavaScript resources when the user first visits the application. Subsequent interactions, such as clicking on links or buttons, trigger asynchronous requests for data (often in JSON format) from the server. The retrieved data is used to update the content on the page dynamically without requiring a full page reload.

2. **Smooth User Experience:** Since SPAs avoid full page reloads, they provide a smoother and more responsive user experience. Transitions between different views or components can be seamless, and interactions feel more like native applications.

3. **Client-Side Routing:** SPAs often implement client-side routing, where the application manages the navigation and rendering of different views entirely on the client side. This is typically done using JavaScript libraries or frameworks, such as React Router for React applications or Vue Router for Vue.js applications.

4. **State Management:** SPAs frequently use client-side state management to maintain the state of the application on the client side. This allows for better performance and responsiveness by reducing the need for constant communication with the server for every user action.

5. **Optimized for APIs:** SPAs are well-suited for working with APIs (Application Programming Interfaces) since they can easily make asynchronous requests to retrieve data and update the UI dynamically.

Popular JavaScript libraries and frameworks for building SPAs include React, Angular, and Vue.js. These frameworks provide tools and abstractions to simplify the development of SPAs, including features like component-based architecture, virtual DOM, and efficient state management.


### What is a component ?

In the context of software development, especially in the realm of user interface (UI) development, a component is a modular, reusable building block that encapsulates a specific set of functionality or behavior. Components are used to structure the user interface and the overall application architecture. They can be thought of as self-contained units that can be composed together to create more complex structures.

Here are some key characteristics of components:

1. **Reusability:** Components are designed to be reusable. Once you create a component, you can use it in multiple parts of your application, promoting code reuse and maintainability.

2. **Encapsulation:** Components encapsulate their internal logic and functionality, hiding the implementation details from the outside world. This makes it easier to manage and reason about different parts of the application.

3. **Modularity:** Components contribute to the modularity of the codebase. By breaking down the user interface into smaller, manageable pieces, developers can work on individual components independently, leading to a more maintainable and scalable codebase.

4. **Composition:** Larger components or complex UI structures can be built by composing smaller components together. This hierarchical composition allows for the creation of a structured and organized UI.

5. **State and Props:** In many component-based frameworks like React, components can have internal state (data specific to that component) and receive external data through props (properties). This allows components to be dynamic and adaptable to different use cases.

For example, in the context of React:

- **Functional Components:** These are stateless components defined as functions. They receive props as parameters and return the UI structure.

    ```jsx
    function MyComponent(props) {
      return <div>{props.message}</div>;
    }
    ```

- **Class Components:** These are components defined as ES6 classes. They can have local state and additional lifecycle methods.

    ```jsx
    class MyComponent extends React.Component {
      constructor(props) {
        super(props);
        this.state = { count: 0 };
      }

      render() {
        return <div>{this.props.message}</div>;
      }
    }
    ```

Components play a crucial role in modern web development, especially in frameworks like React, Angular, and Vue.js, where the entire UI is often built as a composition of components.


### What is the latest version of React?

React latest release is 16.13.1

### What is DOM?

DOM stands for Document Object Model. It is a programming interface for web documents and represents the structure of a document as a tree of objects. In the context of web development, the document typically refers to an HTML or XML document, and the objects in the DOM represent the elements, attributes, and text content within that document.

The DOM provides a way for programs to manipulate the structure, style, and content of web documents. It allows scripts to dynamically update and change the document's content, structure, and style in response to user interactions or other events.

Key concepts related to the DOM include:

1. **Node:** In the DOM, everything is a node. Elements, attributes, and text content are all represented as nodes in the DOM tree.

2. **Element:** An element is a specific type of node representing a structural part of the document, such as a paragraph, heading, or div.

3. **Attribute:** Attributes provide additional information about an element and are represented as nodes in the DOM.

4. **Root:** The root of the DOM tree is usually the document node, representing the entire HTML or XML document.

5. **Parent and Child Nodes:** Nodes in the DOM are organized in a hierarchical structure. Elements can have parent and child nodes, forming a tree-like structure.

6. **Manipulation:** Through the DOM, developers can use JavaScript to create, modify, or delete elements and attributes, change the document's structure, and update its style.

For example, using JavaScript, you can access and manipulate elements in the DOM like this:

```javascript
// Access an element by its ID
var myElement = document.getElementById("myElementId");

// Change its text content, we can use innerHTML to do this as well
myElement.textContent = "Hello, DOM!";

// Create a new element and append it as a child
var newElement = document.createElement("p");
newElement.textContent = "A new paragraph.";
myElement.appendChild(newElement);
```

The DOM is a crucial part of web development, enabling dynamic and interactive web pages by providing a structured representation of the document that scripts can interact with.


### What is React Virtual DOM?

The React Virtual DOM (Document Object Model) is a key concept in React's architecture that contributes to its efficiency in updating and rendering user interfaces. Instead of directly manipulating the actual DOM every time there's a change in the application state, React uses a virtual representation of the DOM. This virtual DOM is an in-memory representation of the real DOM elements.

Here's how the React Virtual DOM works:

1. **Render to Virtual DOM:** When a React component's state changes, a new virtual DOM representation of the entire UI is created. This virtual DOM is a lightweight copy of the actual DOM, containing the same hierarchy of elements and their current state.

2. **Diffing Algorithm:** React compares the new virtual DOM with the previous one using a process called "reconciliation" or "diffing." It identifies the differences (or "diffs") between the new and old virtual DOM trees.

3. **Determine Changes:** React determines the most efficient way to update the real DOM based on the identified differences. It calculates the minimal set of changes needed to bring the real DOM in sync with the virtual DOM.

4. **Update Real DOM:** Only the necessary changes are then applied to the real DOM. This selective updating minimizes the amount of manipulation needed on the actual webpage.

The use of the virtual DOM provides several advantages:

1. **Performance:** By reducing the number of direct manipulations to the real DOM, React improves performance. The virtual DOM allows React to batch updates and optimize the rendering process, resulting in faster UI updates.

2. **Efficiency:** React can prioritize and optimize updates to specific parts of the UI, avoiding unnecessary re-rendering of unchanged components.

3. **Abstraction:** Developers can work with a virtual representation of the DOM, which is often simpler and faster to manipulate than the actual browser's DOM.

It's important to note that developers working with React don't directly interact with the virtual DOM; instead, React's reconciliation algorithm handles the process internally. The virtual DOM is an implementation detail that contributes to React's goal of providing a declarative, efficient, and easy-to-understand approach to building user interfaces.


### What does a web application or a website(composed of) have?

A web application or website is composed of various components and technologies that work together to provide a functional and interactive experience for users. Here are the key components that make up a typical web application or website:

1. **User Interface (UI):** The UI is the visual part of the web application that users interact with. It includes elements like navigation menus, buttons, forms, images, and other graphical elements. UI design focuses on creating an intuitive and user-friendly experience.

2. **HTML (Hypertext Markup Language):** HTML is the standard markup language for creating the structure and content of web pages. It defines the elements on a webpage, such as headings, paragraphs, images, links, and more.

3. **CSS (Cascading Style Sheets):** CSS is used to style the HTML elements, controlling the layout, appearance, and formatting of the web pages. It includes aspects like colors, fonts, spacing, and responsiveness for different screen sizes.

4. **JavaScript:** JavaScript is a programming language that enables dynamic and interactive behavior on web pages. It allows developers to manipulate the DOM, handle user events, make asynchronous requests to servers (AJAX), and implement various client-side functionalities.

5. **Backend:** The backend is the server-side of the web application, responsible for handling business logic, database interactions, and server-side operations. Common backend technologies include server-side scripting languages (e.g., Node.js, Python, Ruby), server frameworks (e.g., Express.js, Django, Flask), and databases (e.g., MySQL, MongoDB).

6. **Server:** The server hosts and serves the web application to users. It handles incoming requests, processes them, and sends back the appropriate responses. Common web servers include Apache, Nginx, and Microsoft IIS.

7. **Database:** Databases store and manage the application's data. Web applications often interact with databases to retrieve and store information. Popular databases include MySQL, PostgreSQL, MongoDB, and SQLite.

8. **APIs (Application Programming Interfaces):** APIs allow different software components to communicate with each other. In the context of web development, APIs are used for communication between the frontend and backend, enabling the exchange of data and functionality.

9. **Frontend Frameworks:** Frameworks like React, Angular, or Vue.js provide a structured way to build the frontend of a web application. They help in organizing code, managing state, and creating reusable components.

10. **Web Browsers:** Users access web applications through web browsers (e.g., Chrome, Firefox, Safari, Edge). Browsers interpret HTML, CSS, and JavaScript to render web pages and provide the user interface.

11. **Security Measures:** Web applications implement security measures to protect user data and ensure safe interactions. This includes encryption (HTTPS), authentication, authorization, and protection against common web vulnerabilities (e.g., Cross-Site Scripting, Cross-Site Request Forgery).

The combination of these components contributes to the functionality, usability, and overall performance of a web application or website. The development process often involves collaboration between frontend and backend developers, UI/UX designers, and other specialized roles to create a cohesive and engaging user experience.

# Exercises: JSX

## What is an HTML element?


An HTML (Hypertext Markup Language) element is a fundamental building block of an HTML document, which is used to define the structure and content of a web page. An HTML element consists of a start tag, content, and an end tag, all enclosed within angle brackets.

The basic syntax of an HTML element is as follows:

```
<tagname>content</tagname>
```

## How to write a self closing HTML element?


In HTML, some elements are self-closing, meaning they don't have content and don't require an end tag. Instead, they can be closed with a single tag. The syntax for a self-closing element is to include a forward slash before the closing angle bracket in the start tag. 
Here's an example using the <img> (image) element:

```
<img src="image.jpg" alt="Description of the image" />

```
## What is an HTML attribute? Write some of them


In HTML, attributes provide additional information about HTML elements and are always included in the opening tag. Attributes are typically written as name-value pairs, separated by an equals sign (=). Here are some common HTML attributes:

id: Specifies a unique identifier for an HTML element.
```
<div id="myDiv">This is a div with an ID.</div>
```

class: Specifies one or more class names for an HTML element, allowing the element to be styled using CSS.

```
<p class="highlight">This paragraph has a special style.</p>
```

style: Allows inline CSS styles to be applied directly to an HTML 

```
<span style="color: red; font-weight: bold;">This is styled inline.</span>
```


## What is JSX?

JSX stands for JavaScript XML. It is a syntax extension for JavaScript that looks similar to XML or HTML, but it allows you to write JavaScript code in a more readable and declarative way, especially when working with React, a popular JavaScript library for building user interfaces.

In JSX, you can write code that looks like a combination of HTML and JavaScript. For example:

```
const element = <h1>Hello, World!</h1>;
```

In the above example, <h1>Hello, World!</h1> is JSX syntax that represents a React element. JSX makes it easier to write and understand the structure of UI components in React.

Behind the scenes, JSX is transformed into regular JavaScript code by tools like Babel before it is executed by the browser. The transformed code uses React.createElement to create the virtual DOM elements that represent the UI.

Here's an equivalent example of the above JSX using React.createElement:

```
const element = React.createElement('h1', null, 'Hello, World!');
```
JSX is not required to use React, but it is a common and convenient way to define UI components in React applications.

## What is babel?

Babel is a widely used JavaScript compiler that allows developers to use the latest ECMAScript features (or even future proposals) in their code while ensuring compatibility with older browsers and environments that might not support these features natively.

Here are some key points about Babel:

JavaScript Compiler: Babel is primarily a JavaScript compiler. It takes modern JavaScript code (often using the latest ECMAScript syntax) and transforms it into an older version of JavaScript that is compatible with a broader range of browsers.

ECMAScript Compatibility: Babel allows developers to use features from the latest ECMAScript specifications, even before they are widely supported in all browsers. This helps developers write code using the most up-to-date language features without worrying about compatibility issues.

Plugin Architecture: Babel operates on a plugin system. Different plugins handle various transformations, allowing developers to pick and choose which features they want to enable or disable in their code.

JSX Transformation: Babel is commonly used for transforming JSX code into regular JavaScript. JSX is a syntax extension often associated with React, and Babel ensures that JSX code is translated into React.createElement calls, making it compatible with all JavaScript environments.

Configuration Files: Babel uses configuration files (e.g., .babelrc or babel.config.js) to specify how the code should be transformed. Developers can customize the transformation process based on their project requirements.

Integration with Build Tools: Babel is often integrated into build tools and development workflows, such as webpack or Babel itself can be used as a standalone tool. It allows developers to seamlessly incorporate Babel into their projects, automating the compilation process.

By using Babel, developers can write modern, clean, and readable JavaScript code without worrying about compatibility issues across different browsers. It has become an essential tool in the JavaScript ecosystem, especially in projects leveraging the latest language features and frameworks.


## What is a transpiler?


A transpiler, short for source-to-source compiler, is a type of compiler that takes the source code written in one programming language and translates it into equivalent code in another programming language. Unlike traditional compilers, which translate source code into machine code or an intermediate code for a specific platform, a transpiler generates code in a high-level language.

The primary purpose of a transpiler is to enable code written in one language to be executed or utilized in an environment that expects a different language. Transpilers are commonly used for several purposes, including:

Language Compatibility: Transpilers are often employed to convert code written in a newer version of a programming language into an older version, ensuring compatibility with older runtimes or browsers. This is common in the JavaScript ecosystem, where transpilers like Babel are used to convert ECMAScript 6 (ES6) or later code into ECMAScript 5 (ES5) for broader browser support.

Cross-Platform Development: Transpilers can be used to translate code from one programming language into another to facilitate cross-platform development. For example, a transpiler might convert code written in a language specific to a particular platform into code compatible with another platform.

Code Optimization: Some transpilers perform optimizations on the code during the translation process. This can include minification, dead code elimination, and other techniques to improve the performance and efficiency of the generated code.

Language Migration: When migrating from one programming language to another, a transpiler can be used to convert the existing codebase gradually. This approach allows developers to adopt a new language incrementally while maintaining functionality.

Custom Language Features: Transpilers can be created to introduce custom language features or syntactic sugar into a language. The transpiler translates the custom syntax into standard code that can be executed by the target platform.

In summary, a transpiler is a tool that facilitates the translation of code between programming languages or language versions. It plays a crucial role in scenarios where compatibility, migration, or optimization is required while allowing developers to work with the language features they prefer.

===============================================================

# Exercises: JSX Elements
## What is a JSX element?


A JSX element is a syntactic extension for JavaScript that represents a React element. JSX allows you to write XML/HTML-like code in your JavaScript files, making it more readable and expressive when defining the structure of UI components in React.

Here's a basic example of a JSX element:
```
const element = <h1>Hello, JSX!</h1>;
```
In this example, <h1>Hello, JSX!</h1> is a JSX element that represents a heading element with the text "Hello, JSX!". It looks similar to HTML but is actually JavaScript code.

Under the hood, JSX elements are transformed into regular JavaScript code by tools like Babel before being executed by the browser. The example above is essentially transformed into the following using React.
createElement:
```
const element = React.createElement('h1', null, 'Hello, JSX!');

```
The React.createElement function is used to create a virtual DOM element that represents the UI structure defined by the JSX. The first argument is the type of the element (in this case, 'h1'), the second argument is an object for element attributes (like class or id), and the third argument is the content of the element.

## Write your name in a JSX element and store it in a name variable

```
const name = <div>Manandi</div>;

```

## Write a JSX element which displays your full name, country, title, gender, email, phone number. Use h1 for the name and p for the rest of the information and store it in a user variable

```
const MyDetail = (
  <div>
    <h1>Full Name: Manandi Anupama</h1>
    <p>Country: Sri Lanka</p>
    <p>Title: World's Number 1 Developer</p>
    <p>Email: manokathri@gmail.com</p>
    <p>Phone Number: 0252221552</p>
  </div>
);
```
## Write a footer JSX element

```
   const footer = (
        <footer>
          <div className='footer-wrapper'>
            <p>Copyright 2020</p>
          </div>
        </footer>
      )

```