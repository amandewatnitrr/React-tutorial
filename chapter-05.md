# Basic Questions in React

<p align="justify">


## useState vs useRef

- `useState`
  - manages state in functional components.
  - returns an array with 2 elements
        - first element is the state value.
        - second element is a function to update the state value.
  - When the state changes component re-renders.
  - when we want to manage state that, when updated, triggers a re-render of the component.
    - For example, managing the current state of a form input, controlling visibility of a component, etc. 
  - Example:
    ```Javascript
    const [count, setCount] = useState(0);
    ```

- `useRef`
  - to persist values across renders without causing re-renders.
  - It returns a mutable object(`current` property) that can hold values.
  - changes to the `current` property do not cause re-renders.
    - For example, holding reference to a DOM element, keeping track of values without causing any re renders. 
  - example:
    ```Javascript
    const countRef = useRef(0);
    ```

## What is React JSX? Why JSX?

- JSX stands for JavaScript XML.
- JSX allows us to write HTML in Javascript and forms the basis for React Development.
- JSX creates an element in React that gets rendered in the UI. It is transformed into JavaScript functions by the compiler at runtime. 
- Error handling and warnings become easier to handle when using JSX

- JSX is faster than normal Javascript, as it performs optimization while transforming to regular Javascript.


## What is Babel?

- Babel is a Javascript compiler that converts modern Javascript into a version of Javascript that can be run by the browsers.
- It allows the developers to use the latest ECMAScript or Javascript features without worrying about browser support.
- Babel operates using the Plugin Architecture.
- Each plugin performs a specific task, such as transforming arrow functions, classes, etc.
- Babel can also include polyfills to support features that are not available in the older browsers, but also that are not available in some modern browsers.
  - Polyfilling is a technique to provide modern functionality to older browsers that do not support certain features or APIs.
  - It is a code that basically replicates the behaviour of a feature or API that is missing in target browser. 

## What is Vitual DOM, and how it makes things faster??

- Virtual DOM is a lightweight copy of the actual DOM.
- It is a Javascript object that has the same properties as the actual DOM.
- It is a tree of React elements and components.
- When the state of the application changes, the virtual DOM gets updated instead of the actual DOM.
- The virtual DOM then compares the previous state of the virtual DOM with the new state of the virtual DOM. It then updates the actual DOM with the changes that were made to the virtual DOM. This process is called `reconciliation`.
- This process of reconciliation is faster than updating the actual DOM directly.
- The Process of comparing the current virtual DOM with the previous one is known as `diffing`.
- The process of updating the actual DOM with the changes that were made to the virtual DOM is known as `patching`.
- So,
  - React visualizes the DOM as a tree of React elements and components. 
  - When a change is made to the application, a new virtual DOM is created, represented as a tree of React elements and components.
  - Each element in the application is a node in the virtual DOM tree.
  -  The new vitual DOM is compared with the previous virtual DOM tree, and notes down the differences between the two.
  - After this, it finds the best optimal way to make the changes to the actual DOM.
  - Now, only the updated elements are re-rendered in the actual DOM.

![](./imgs/Browser-DOM-Virtual-DOM-copy.webp)

## What is the difference between a controlled and uncontrolled component?

- Controlled Component
  -  The value of input element is controlled by React.
  - A controlled component is a component that renders form elements and controls them by keeping the form data in the component's state.
  - The component renders a form element with a value and an onChange handler.
  - The value of the form element is controlled by the component's state.
  - When the user types in the form element, the onChange handler is triggered, updating the component's state with the new value.
  - The component re-renders with the new value.
  - Example:
    ```Javascript
    import React, { useState } from 'react';

    const ControlledComponent = () => {
      const [value, setValue] = useState('');

      const handleChange = (event) => {
        setValue(event.target.value);
      };

      return (
        <div>
          <input type="text" value={value} onChange={handleChange} />
        </div>
      );
    };

    export default ControlledComponent;
    ```
    
- Uncontrolled Component
  - The value of input element is controlled by the DOM.
  - An uncontrolled component is a component that renders form elements and controls them by using a ref to get their current values from the DOM.
  - In an uncontrolled component, the source of truth is the DOM.
  - The component renders a form element with a ref.
  - The value of the form element is controlled by the DOM.
  - When the user types in the form element, the DOM updates its value.
  - The component re-renders with the new value.
  - Example:
    ```Javascript
    import React, { useRef } from 'react';

    const UncontrolledComponent = () => {
      const inputRef = useRef();

      const handleClick = () => {
        alert(inputRef.current.value);
      };

      return (
        <div>
          <input type="text" ref={inputRef} />
          <button onClick={handleClick}>Click</button>
        </div>
      );
    };

    export default UncontrolledComponent;
    ```
    
## What is the difference between a functional component and a class component?

- Functional Component
  - A functional component is a component that is written as a function.
  - It accepts props as an argument and returns a React element.
  - It is also known as a stateless component.
  - Example:
    ```Javascript
    import React from 'react';

    const FunctionalComponent = (props) => {
      return <div>{props.message}</div>;
    };

    export default FunctionalComponent;
    ```
    
- Class Component
  - A class component is a component that is written as a class.
  - It extends the React.Component class and has a render method.
  - It is also known as a stateful component.
  - Example:
    ```Javascript
    import React, { Component } from 'react';

    class ClassComponent extends Component {
      render() {
        return <div>{this.props.message}</div>;
      }
    }

    export default ClassComponent;
    ```
    
## What is the difference between createElement and cloneElement?

- createElement
  - The `createElement` function is used to create a React element.
  - It takes 3 arguments:
    - The type of the element.
    - The props of the element.
    - The children of the element.
  - Example:
    ```Javascript
    import React from 'react';

    const element = React.createElement('div', { className: 'box' }, 'Hello World');

    export default element;
    ```
    
- cloneElement
  - The `cloneElement` function is used to clone a React element.
  - It takes 2 arguments:
    - The element to clone.
    - The props to add to the cloned element.
  - Example:
    ```Javascript
    import React from 'react';

    const element = (
      <div className="box">
        <span>Hello World</span>
      </div>
    );

    const clonedElement = React.cloneElement(element, { className: 'box-red' });

    export default clonedElement;
    ```

## What is key in React?

- The `key` prop is used to identify elements in an array.
- It is used by React to identify which items have changed, been added, or been removed.
- It is important to include a key prop when rendering an array of elements.
- Example:
  ```Javascript
  import React from 'react';

  const List = () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];

    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
  )
  export default List;
  
  ```
  - But there's an issue with using index as key:
    - If the order of the items changes, the key will remain the same.
    - If an item is removed from the middle of the array, the key will remain the same.
    - If an item is added in the middle of the array, the key will remain the same.
    - This can cause issues with the component's state and can lead to unexpected behaviour. 


## What is prop drilling?

- Prop drilling is the process of passing props from one component to another component down the hierarchy.
- It can be a tedious process if the components are deeply nested.
- Example:
  ```Javascript
  import React from 'react';

  const ComponentA = ({ message }) => {
    return <ComponentB message={message} />;
  };

  const ComponentB = ({ message }) => {
    return <ComponentC message={message} />;
  };

  const ComponentC = ({ message }) => {
    return <div>{message}</div>;
  };

  export default ComponentA;
  ```
  
  ![](./imgs/What_is_prop_drilling_in_React.png)
  
## What is context?

- Context is used to pass data through the component tree without having to pass props down manually at every level.
- Context is primarily used when some data needs to be accessible by many components at different nesting levels.
- Context is designed to share data that can be considered “global” for a tree of React components.
- Context is primarily used when some data needs to be accessible by many components at different nesting levels.
- Context is designed to share data that can be considered “global” for a tree of React components.
- Example:
  ```Javascript
  import React, { createContext, useState, useContext } from 'react';

  const MessageContext = createContext();

  const ComponentA = () => {
    const [message, setMessage] = useState('Hello World');

    return (
      <MessageContext.Provider value={message}>
        <ComponentB />
      </MessageContext.Provider>
    );
  };

  const ComponentB = () => {
    return <ComponentC />;
  };

  const ComponentC = () => {
    const message = useContext(MessageContext);

    return <div>{message}</div>;
  };

  export default ComponentA;
  ```
  
## What is the difference between state and props?

- State
  - State is a data structure that is used to hold simple data.
  - State is managed within the component and is mutable.
  - State can be changed using the `setState` function.
  - State can be changed using the `setState` function.
  - State is used to handle simple data and is local or specific to that component.
  - Example:
    ```Javascript
    import React, { useState } from 'react';

    const Component = () => {
      const [message, setMessage] = useState('Hello World');

      return <div>{message}</div>;
    };

    export default Component;
    ```
    
- Props
  - Props are used to pass data from one component to another component.
  - Props are used to handle complex data and are passed down from parent component to child component.
  - Example:
    ```Javascript
    import React from 'react';

    const Component = ({ message }) => {
      return <div>{message}</div>;
    };

    export default Component;
    ```

## React Lifecycle of Components

![](./imgs/different_phases_of_the_component_lifecycle.png)

- Every React component has 4 stages of its lifecycle:
  - Initialization
  - Mounting
  - Updating
  - Unmounting

![](./imgs/gfg.png)

- Initialization
  - Initialization is the process of defining the props and state of a component.
  - This is generally done by the constructor method.
  - It is called only once during the component's lifecycle.

- Mounting
  - Mounting is the process of creating a React component and inserting it into the DOM.
  - Once the initialization is done, the component is mounted on the DOM, and render method is called.
  - The functions that are called during the mounting phase are:
    - `constructor()`
    - `static getDerivedStateFromProps()`
    - `render()`
    - `componentDidMount()`: This method is called after the component is mounted on the DOM, i.e. after execution of `render()`.

- Updation
  - Updation is the process of updating the state or props of a component.
  - The functions that are called during the updation phase are:
  
    - `static getDerivedStateFromProps()`: This method is called before every render method in both mounting and updating phase.It takes updated props and current state as an argument.
    
    - `setState()`: This is not a lifecycle method, and can be invoked explicitly at any instant. This function is used to update the state of the component.
    
    - `shouldComponentUpdate()`: let's react know whether the component's output is affected by the current change in state or props.
      - Basically it decides whether to re-render the component or not.
      - If this function returns false the subsequent steps of rendering will not be carried out.
      - The function can't be used in case of `forceUpdate()`.
      
    - `getSnapshotBeforeUpdate()`: stores the previous state of the DOM before the update.
      - It is called right before the changes from the virtual DOM are to be reflected in the DOM.
      
    - `componentDidUpdate()`: the function is invoked after the component is re-rendered.
    
- Unmounting
  - Unmounting is the process of removing a React component from the DOM.
  - The function that is called during the unmounting phase is:
    - `componentWillUnmount()`: This method is called before the component is removed from the DOM.
      - It denotes the end of Lifecycle for a component.

## What is the difference between Presentational and Container Components?

- Presentational Components
  - Presentational components are concerned with how things look.
  - They are concerned with the UI.
  - Have no major dependencies on the rest of the app.
  - May contain other Presentational and Container components inside it.

- Container Components
  - Container components are concerned with how things work.
  - They are concerned with passing data down to the Presentational components.
  - May contain both presentational and container components inside it, but they donot have a DOM or markup of their own.


## Data Flow in React

- Unidirectional data flow is a technique that is mainly found in functional reactive programming.
- It is known as 1-way data flow, which means data has only 1 way to be transferred to other parts of the application.
- React does not support 2-way data binding or bidirectional data binding.
- In react, a state is always owned by a specific component. Changing state of that specific component will not affect the state of other components(parent/sibling), only the child components will be affected.
- This is the main reason that state is often moved up in the component tree, so that it can be shared b/w components that need to access it.

## What are error boundaries in React?

- Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

- A class component becomes an error boundary if it defines either (or both) of the lifecycle methods `static getDerivedStateFromError()` or `componentDidCatch()`.

- In what places can an error boundary detect an error?
  - Render phase
  - Inside a lifecycle method
  - Inside the constructor

## What are Higher-Order Components (HOCs)?

- A higher-order component is a function that takes a component and returns a new component.
- It is a pattern that is derived from React's compositional nature.
- It is used to share common functionality between components without repeating code.

## Explain React Hooks

- React hooks are built-in functions that allows developers for using the state and lifecycle methods within React components.
- React Hooks are functions that allow us to implemet react state and lifecycle features from within functional components.
- They cannot be used in Class Components.
- But there are 2 rules, that must be followed, while using them:
  - Hooks must be used at the top level of the component.
  - Hooks must be used only in functional components.

## `useEffect` React Hooks

- `useEffect` is a React Hook that allows us to perform side effects in functional components.
- With the help of `useEffect`,  we wil be able to inform React that component needs to do something after render or after there's a change in the state.
- The function we have passed will be remembered by React and called later after performing the DOM updates.
- `useEffect` hook will run by default after the first render, and also after each update of the component.

## What are Custom Hooks?

- Custom Hooks are JavaScript functions whose names are prefixed with the word `use`, and call other hooks.
- Custom Hooks are considered sufficient for replacing render props and HOCs, and reducing amount of nesting required.

## Explain Strict Mode in React

- StrictMode is  a tool for highlighting potential problems in an application.
- It helps identifying components with unsafe lifecycle methods.
  - Certain lifecycle methods are unsafe to use in asynchronous react application.
  - provides a warning if any of the class componets use unsafe lifecycle method.
- It gives warnings about usage of legacy string API.

## Methods to optimize React App Performance

- Optimizing React App Performance involves employing various techniques to enhance the rendering speed, and overall user experience.

- Using `useMemo()`:
  - It is a react hook that used for caching CPU-Expensive Functions.
  - Sometimes in a React App, a CPU Expensive function is called repeatedly due to re-rendering of a component, which can lead to slow rendering.
  - This hook can be used to cace such functions. CPU Expensive functions are called only when they are needed.
  
- using `React.PureComponent`
  - It is a base component  class that checks  thae states and props associated with the component, to know whether the component should be updated.
  - Instead of using `React.Component`, we can use `React.PureComponent` to avoid unnecessary re-rendering of the component.
  
- Maintaining State Colocation:
  - This is a process of moving the state close to where you need it as possible.
  - Sometimes, in React app, we have a lot of unessecary states inside the parent component which makes the code less readable and harder to maintain.
  - Not to forget, having many states inside a single component leads to unnecessary re-rendering of the component.
    - It is better to shift states which are less valuable to the parent component, to a separate component.
    
- Lazy loading:
  - It is a technique used to reduce the load time of React App.Lazy Loading helps reduce the task of web app performances to a minimum.


## Explain about types of Hooks in React

- Built-in Hooks:
  - Basic Hooks:
    - `useState()`: used to set and Retrieve the state.
    - `useEffect()`: used to perform side effects in functional components.
    - `useContext()`: used for creating common data that is to be accessed by many components hierarchy without passing props down manually at every level.
  - Additional Hooks:
    - `useReducer()`: 
      - used to manage complex state logic with several sub-values or when the upcoming state is dependent on the previous state.
      - enables optimization of component performance that will trigger deper updates as it is permitted to pass dispatch down instead of callbacks.
      - `useMemo()`: used for caching CPU-Expensive Functions. 
        - used to memoize functions, when there is change in one of the dependencies
        - helps in avoiding expensive calculations on each render.
      - `useCallback()`:
        - useful while passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.
      - `useImperativeHandle()`:
        - enable modifying the instance that will be passed with the `ref` object.
      - `useDebugValue()`:
        - used to display a label for custom hooks in React DevTools.
      - `useRef()`:
        - permits creating a reference to DOM element directly within the functional component.
      - `useLayoutEffect()`:
        - used for reading layout from the DOM and synchronously re-rendering.
- Custom Hooks:
  - Custom Hooks are JavaScript functions whose names are prefixed with the word `use`, and call other hooks.
  - Custom Hooks are considered sufficient for replacing render props and HOCs, and reducing amount of nesting required.

![](./imgs/types_of_Hooks_in_React.png)


## React Hooks vs React Classes

<table>
  <tr>
    <th>React Hooks</th>
    <th>React Classes</th>
  </tr>
    <tr>
        <td>used in fucntional components of React.</td>
        <td>used in class-based components of React.</td>
    </tr>
    <tr>
        <td>will not require declaration of any kind of constructor</td>
        <td>necessary to declare the constructor inside the class component</td>
    </tr>
    <tr>
        <td>does not require the use of the `this` keyword in state declaration or modification</td>
        <td>requires the use of the `this` keyword in state declaration and modification</td>
    </tr>
    <tr>
        <td>easier to use because of `useState functionality`</td>
        <td>No specific function is available for helping us to access the state and corresponding state values.</td>
    </tr>
    <tr>
        <td>can be helpful in implementing Redux and context API</td>
        <td>because of long setup of state declarations, class states are generally not preffered</td>
    </tr>
</table>

## How does the performance of using Hooks will differ in comparison with the classes??

- React Hooks will avoid a lot of overheads such as the instance creation, binding of events etc., that are present with classes.
- Hooks will result in smaller component trees since they will be avoiding the nesting that exists in HOCs and will render props which result in less amount of work being done by react.

## Do Hooks cover all the functionalites provided by classes?

- No, Hooks do not cover all the functionalities provided by classes.
- There are no Hook equivalents for `getSnapshotBeforeUpdate`, `getDerivedStateFromError` and `componentDidCatch` lifecycle methods.

## What is React Router?

- React Router refers to the standard library used for routing in React.
- permits us to build single-page web application in react with navigation without even refeshing the page when the user naviates.
- allows to change browser URL and will keep the user interface in sync with the URL.
- makes use of component structure for calling the components
  - Major Components of React Router are:
    - `<BrowserRouter>`: It is a router implementation that will make use of HTML5 history API for keeping UI in sync with the URL. It is parent component useful in storing all other components.
    - `<Routes>`: It is a component that is be used for defining the routes.
    - `<Route>`: It is a component that is be used for defining the matching pattern between the URL and the component that is to be rendered.
    - `<Link>`: It is a component that is be used for creating a link to navigate between the pages.
  - Example:
    ```Javascript
    import './App.css';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import React, {Component} from 'react';
    import ReactDOM from'react-dom';
    import {
    BrowserRouter as Router,
    Routes,
    Route,
    } from "react-router-dom";
    import Navbar from './components/Navbar/Home/navbar';
    import BgAnimation from './components/Background/BgAnimation';
    import Home from './components/Home/Home';
    import SignInUp from './components/SignInOut/SignInUp';
    import ExpenseCalc from './components/User/ExpenseCalc/ExpenseCalc';
    import Profile from './components/User/Profile/Profile';
    import NotFound from './components/404/404';
      
    function App() {
    return (
    <>
    <Router>
    <Routes>
      
                <Route exact path='/Home' element={<Home />} />
                <Route exact path='/SignIn' element={<SignInUp />} />
                <Route exact path='/ExpenseCalc' element={<ExpenseCalc />} />
                <Route exact path='/Profile' element={<Profile />} />
                <Route path="/*" element={<NotFound />} />
      
            </Routes>
          </Router>
        </>
    );
    }
      
    export default App;
    ```
  
## Can React Hooks replace Redux??

- React Hook cannot be used to replace Redux, when it comes to managing global application state in large complex applications, even though React provide Hooks like `useReducer` that manages state transitions similar to Redux.
- Redux is very useful at lower level of component hierarchy to handle the pieces of a state which are dependent on each other, instead of declaration of multiple `useState()` hooks.

## Explain Conditional Rendering in React

- Conditional rendering refers to the process of rendering different UI based on certain conditions.
- It works in the same way as JavaScript conditions. Using conditional rendering, it is possible to toggle specific application functions, API data rendering, hide or show elements, decide permission levels, authentication handling, and so on.
- Some of the ways to implement conditional rendering in React are:
  - Using element variables
    - Example:
      ```Javascript
      import React from 'react';

      const Component = ({ message }) => {
        if (message) {
          return <div>{message}</div>;
        } else {
          return <div>No message</div>;
        }
      };

      export default Component;
      ```
      
  - Using the ternary operator
    - Example:
      ```Javascript
      import React from 'react';

      const Component = ({ message }) => {
        return <div>{message ? message : 'No message'}</div>;
      };

      export default Component;
      ```
      
  - Using if-else statements
    - Example:
      ```Javascript
      import React from 'react';

      const Component = ({ message }) => {
        if (message) {
          return <div>{message}</div>;
        } else {
          return <div>No message</div>;
        }
      };

      export default Component;
      ```



</p>