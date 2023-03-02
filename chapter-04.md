<p align="justify">
<strong>

# Components and Component Communication

## Child to Parent Component Communication

- So, in this tutorial after the previous tutorial where we successfully stored the data into variable and printed it onto the console after getting from the form, we don't want the data to be just there on the console log but added as `<ExpenseItem/>` to the Expense List.

- But, the problem is both are different componets and if you have a good look on the project we are working on, `<AddExpenseItem/>` and `<ExpenseItem/>` both are child components of `<Profile/>` component.

- Also, in order to get the `<ExpenseItem/>` component rendered for every new entry and the new entries for purpose of being rendered needs to be added to the `expensesData` variable in the `<Profile/>` component, for this we need to pass the data down to both `<ExpenseItem/>` and `<AddExpenseItem/>`.

- The flow of data is from Parent to Child Component when it comes to communiocation b/w `<Profile/>` and `<ExpenseItem/>` but in case of `<AddExpenseItem/>` it's Child to Parent.

- In the `<AddExpenseItem/>` we are already listening to the user input, we can create our own event props, we can expect functions as values and that would allow us to pass a fucntion from Parent Component to a Child Component and than call that function inside of the child component.
  
- And when then we then call a function, we can of course pass data to fucntion as a parameter and that's how we can communicate up from child to parent.

- Also, props can only be passed from parent to child and we can't skip intermediate components.

## Lifting State Up

```mermaid
flowchart TB
    A{Profile} -- Data is Generated here! ---> B{{AddExpenseItem}};
    A{Profile} -- Data is Needed here! ---> C{{ExpenseItem}};
    B{{AddExpenseItem}} -. Data Transfer Not Possible .-> C{{ExpenseItem}}
    B{{AddExpenseItem}} -. Lifting State Up .-> A{Profile}
    A{Profile} -. Pass state data .-> C{{ExpenseItem}}
```

- Consider this basic component tree which is roughly what we have in this demo application where we have an app component which in turn rederes `<ExpenseItem/>` and `<AddExpenseitem/>`. Now in this case `<AddExpenseItem/>` is a component which generates some data, some state. And here in our practice website, we are fetching some user input here.

- Now, it s is quite common that we do generate or fetch data in a component but we might not need that data in that comoponent. Instead, we need it in another component in the `<ExpenseItem/>` component. That's where the input data is needed at the end. Slightly, transformed packed into the object but it is the data we fetch in new expense. So, natuarally we would like to hand that data over but that doesn't work like this becuase we have no direct connection b/w two sibling components.

- We can only communicate from parent to child and child to parent, and two siblings therefore can't communicate each other. Therefore in order to make the 2 siblings communicate, we utilize the closest parent component which has direct or indirect access to both involved components, in this case the `<Profile/>` component.

- The `<Profile/>` component has access to both `<AddExpenseItem` and `<ExpenseItem/>` component becuase it renders both components in it's returned JSX code, that's why we wanna utilize that. Because now we can store our state in that closest involved parent component which ahs access to both involved components by `Lifting State Up`.

- So, by passing our generated state data from the `<AddExpenseItem/>` to the `<Profile/>` component. We are already doing this by utilizing the variables by calling the function we receive on `handleExpense(data)`. But the function isn't doing anything on itself rather we are passing it the data to the function that contains the entered information. By passing the variable containing the information to the function we are lifiting that state up.

- We are not keeping in the `<AddExpenseItem/>` component, rather we are lifting it up to the `<Profile/>` component. So, in there we can use it like `handleExpense()`.

## Controlled, Uncontrolled, Stateless and Stateful Components

- Controlled Component: It means that a value which is used in the component like the value selected in the dropdown is passed on to a parent component through variables/props and is received from the parent component. Both the currently set value as well as the function in the end that handles the selected value is not the part of Profile.

- In all the React Apps which we are building we will have a couple of components that manage some state like this `<AddExpenseItem/>` component which manages the state of the inputs. And then you will have other components which don't manage any state, like `<App/>` in our project here. And hence it's a stateless component also called presentational or dumb component because it doesn't have any internal state, it's just there to output some data. And in most React Applications you will have mostly presentational and dumb components than smart or stateful components.

# Rendering Lists and Conditional Content

- By now we know how to build components and work with multiple components and we know how to work with state and how to handle user events.

- So, in the `<Profile/>` component of our project we have the empty list `expensesData` where all the expenses get added from `<AddExpenseItem/>` component. So, the `handleAddExpense` function adds the data updated by the `<AddExpenseitem/>` to the expenses list using `SetExpense`.

- Let's try rendering `<ExpenseItem/>` by Redering Lists Mehtod, feel free to copy paste the example below and understand.

  - `App.js`

     ```Javascript
     import React from 'react';
     import Todo from './Todo';
     import './styles.css';
     
     const DUMMY_TODOS = [
         'Learn React',
         'Practice React',
         'Profit!'
     ];
     var todos =DUMMY_TODOS.map((todo) => <Todo text={todo} />);
     
     // don't change the Component name "App"
     export default function App() {
         return (
             <ul>
             {todos}
             </ul>
         );
     }
     ```

  - `Todo.js`

     ```Javascript
         import React from 'react';
         export default function Todo({text}) {
             return <li>{text}</li>;
         }
     ```

  - `style.css`

     ```CSS
         body {
             font-family: sans-serif;
             margin: 0;
             padding: 3rem;
             background-color: #2d2c2c;
             color: #959090;
             text-align: center;
         }
         li {
             list-style: none;
             margin: 1rem;
             padding: 1rem;
             background-color: #444047;
             color: #b2adad;
             border: 2px solid #8567fd;
         }
     ```

## Using Stateful Lists

- So, as you have seen in the project website here that just because we update the variable React won't edit the component. In order to ahieve that, we need to use the concept of State. And therefore, if you have a look on the `<Profile/>` component, you will see `handleAddExpense()` function that takes the `SetExpense()` function to set the value of `expenses` which has `useState(expensesData)` as value. So, basically `expenses` is set to value of `expensesData` using `SetExpense()`.

     ```Javascript
    var expensesData = [];
    const [expenses,SetExpense] = useState(expensesData)
    const handleAddExpense  = (data)=>SetExpense(d=>([data,...d]));
    var expenselist = expenses.map((expense) => <ExpenseItem title={expense.title} amount={expense.amount} id  = {expense.id} SetExpense = {SetExpense} date={expense.date}/>);
     ```

## Understanding Keys

- React has a special concept when it comes to rendering lists of data. A concept which exsists to ensure that React is able ton update and render such lists efficiently without perfomance losses or bugs which may occur and we wanna discuss about some problems that you may face when implementing this.

- Whenever, when you might add data to the list, you might see the new `<ExpenseItem/>` component flashing out and if you look closely, the other tags might have actually flashed as well.

- So, when we add a new item, what happens is that React renders this new item as the first orn th last item in the list of div's and updates all items and replace their content, sch that it again matches the order of the items in the array. And this is not great. This is happening because to React all these items look similar and it only sees my array changed that it's now longer than before.

- And hence it simply renders an additional div and it adds that to the top. And then it simply walks through all the items and updates the content inside every item to match the array content again. The final output hence is correct here but from a performance perspective it is not great because all items are visited and updated and it can even lead to bugs.

- If for example, our first item if it has a certain state, if we add a new item, the old first item will be overwritten with the new first item, hence any state changes we might've  had in there would be lost. So besides potential performance issues we can also run itno bugs.

- So, the question might be why React behaves like this?? It's because it has no other way. It currently simply checks the length of the array and then has a look at the number of items that were already rendered. The Individual items all look similar to React though so it can't know where a new item should be added or anything like that. So, in order to resolve the issue, we add a custom attribute or prop to the custom element with the name `key`. This is a `prop` we can add to any component no matter if it's a custom component built by us or a built-in HTML element.

- Than React can identify each item individually, fo that we need to se a unique value per list item and that for us in our case is `id`. Because in expenses array every item has a unique ID. And if you wonder what we do if we have no unique id than we can use the second argument we get here for function we pass to map which is an automatically managed index though it's discouraged to use that since with that we can still run into bugs because the index for a given item is always the same and not directly attached to the content of the item.

- For ID that's different every item with a certain content has a clear unique ID. ANd in reality it turns out that in most scenarios you do have some unique ID because typically we are rendering some data which comes from a database or anything like that and there we work with unique IDs anyways. So, finding sosome unique identifier is not a big-deal. Any number or string that can be unique identfier.

</strong>
</p>
