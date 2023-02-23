<p align="justify">
<strong>

# React State and Working with Events

- In JavaScript, events are a very important concept.
- There are number of events such as Click, Change etc.. that needs to be recognised in order to perform a certain associated task with that event.
- Let's understand this through an example:

  Let's suppose we receive an object props from a Parent Component. The Object contains item-cost and item-price.

  ```JavaScript
    const Child = (props) =>{
        const clickHandler = () => {
            console.log("Clicked!");
        };

        return(
            <Card>
                <div>
                    <h2>props.title</h2>
                </div>
                <button onClick={clickHandler}>Change Title</button>
            </Card>
        );
    }
  ```

- In this case here, the `4th` line points to the `clickHandler` function, and is triggered whenever the button is clicked. The Paranthesis is not used here when pointing to the fucntion because if we do so, when `4th` line is parsed, JavaScript will execute the function there itself rather than executing it when we click on the button.

- Now if you check the `console`, you can see the log `Clicked!` there.

## Working with State

- Let's try to understand this by viewing the example below:

![](imgs/Screen%20Recording%202023-02-17%20at%205.27.31%20AM.gif)

- As you can see in this example, when we click on edit button for an `<ExpenseItem/>` Component, a Modal shows up containing a form to edit the pre-exsisting data associated with it. As we enter the new data, we see in the console that the change in state of the specific input is detected, and logged at console.
  
- When we click on the Update button, the data gets changed to a the new value we entered. This is all possible because of the `useState` property of ReactJs.

- As, you keep an eye on the console above, you will see whenever the value in the `<input/>` changes the console shows the updated value. So, how is it happening so??

    ```javascript
    function EditButton({ title, date, amount, SetExpense, id }) {
            const [enteredTitle, setEnteredTitle] = useState(title);
            
            const Submit = (event) => {

                setShow(false);
                SetExpense(expenses => {
                const filtered = expenses.filter((expenseItem) => {
                    if (expenseItem.id === id) {
                    expenseItem.title = enteredTitle;
                    return expenseItem;
                    }
                    return expenseItem;
                })
                return filtered
                })
                console.log(enteredTitle);
            }

            const titleHandler = (event) => {
                console.log(event.target.value);
                setEnteredTitle(event.target.value);
            }

            return(
                <Form.Group className="mb-3" controlId="formBasicHeading">
                <Form.Label>New Title</Form.Label>
                <Form.Control value={enteredTitle} type="title" onChange={titleHandler} placeholder={title} />
                </Form.Group>

                <Button variant="primary" onClick={Submit}>
                    Update
                </Button>
            );
        }

        export default EditButton;
    ```

- So, as we see here in the code above as soon as there's any change in the value of the `<Form.Control/>`, function `titleHandler()` is called and the output is shown in the console and also the value of `enteredTitle` is set to `even.target.value` which gets updated as soon as there's a change in the value.

- Similarly, when go to edit the state of the already exsisting element, as soon as we change the `enteredTitle` for the above example it's useState is set to `useState('title')` i.e. the title that was sent when prefining it. In, that scenario when we edit the title and press submit, the title gets updated to the new value of `enteredTitle`.

- This is how we use `useState` in ReactJs.

- But always remember if we want to change something associated with the parent element based on a interaction with the child element the properties or the attributes of the parent element that needs to be changed needs to passed to the child element as well.

- The Whole Component function is updated when the State is updated and the `useState` line is also reexecuted again.

- ReactJs keeps track of when we call `useState` in a given component instance for the first time and when we call this for the first time ever, it takes the argument as the initial value, but than the component is re-executed because of the state change and ReactJs will not reinitialise the state, instead it will detect the state had been initialsied in the past, and it will just grab the latest state which is based on some state update and give us that state instead.

- So, the inital value of the argument `useState` is really considered when the function component function is being executed for the first time, for a given compoent instance.

- Also, let's understand a big difference here, that you might have observed that when adding a new `<ExpenseItem/>`, the `useState('')` is generally this, but when editing the exsisting `<Expenseitem/>` the useState is as `useState(var_name)`.

- A key fact to note is whenever you update state and it depends on the previous state , instead of calling it like 

    ```javascript
    const titleChangeHandler = (event) => {
        setEneteredTitle(event.target.value);
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value,
        })
    }
    ```

    you should call it and pass in a function to that function. So, you call the setUserInput function and you pass a function to it, And this function which you oass to setUserInput here will automatically be executed by ReactJs. And it will recieve the previous state snapshot for that state for which you're calling the updating function.

    ```javascript
    const titleChangeHandler = (event) => {
        setUserInput((prevState) =. {
            return {...prevState, enteredTitle: event.target,value};
        });
    }
    ```

    So, in this case for the object state here above we will get the previous state snapshot and now here, we should return the new state snapshot. So, instead of function we passed  to the state updating function, we return the new State now.

    And that now in our case should be our object, where I copy the key value pairs from the previous state with the spread operator but we then also override in this case here, enteredTitle with `event.target.value`.

- But why do this with the arrow function way. In many cases both will work fine but keep in mind that react schedules state updates, it doesn't perform them instantly. And therefore, theoretically if you schedule a lot of state updates at the same time, and we could be depending on a outdated or incorrect state snapshot if we use the topmost approach.

- If we use the last approach here React will guarantee that the state snapshot that it gives us here in this inner function will always be the latest state snapshot, keeping all scheduled states update in mind. So, this is a safer way to always operate on the latest state snapshot. So, we should use this function syntax here whenever your state update depends on the previous state.

- Below is a simple example of we use state form with Inputs, when the length of input equals and exceeds 3, it shows the message "Valid Message" else "Invalid Message". You can copy and paste the code and test it out.

    ```Javascript
        import React from 'react';

        import './styles.css';

        // don't change the Component name "App"
        export default function App() {
            const [paraText,updatePara] = React.useState('Invalid message');
            
            function messagehandler(event){
                const value = event.target.value;
                if(value.trim().length<3){
                    updatePara('Invalid message');
                }
                else{
                    updatePara('Valid message');
                }
            }
            return (
                <form>
                    <label>Your message</label>
                    <input type="text" onChange={messagehandler} />
                    <p>{paraText}</p>
                </form>
            );
        }
    ```

    ```CSS
        body {
            font-family: sans-serif;
            margin: 0;
            padding: 3rem;
            background-color: #2d2c2c;
            color: #959090;
        }

        label {
            display: block;
            margin-bottom: 0.5rem;
        }

        input {
            font: inherit;
            padding: 0.5rem;
            background-color: #474545;
            border: none;
            border-radius: 4px;
            color: white;
        }
    ```

- Similarly, let's have a look at example of a counter where we use the concept of Updating State based on Older State.

    ```Javascript
        import React from 'react';
        
        import './styles.css';
        
        // don't change the Component name "App"
        export default function App() {
            const [counter, setCounter] = React.useState(0);
            
            function incrementCounterHandler() {
                setCounter(prevCounter => prevCounter + 1);
            }
            
            return (
            <div>
                <p id="counter">{counter}</p>
                <button onClick={incrementCounterHandler}>Increment</button>
            </div>
            );
        }
    ```

    ```CSS
        body {
            font-family: sans-serif;
            margin: 0;
            padding: 3rem;
            background-color: #2d2c2c;
            color: #959090;
            text-align: center;
        }

        #counter {
            color: #d7adff;
            font-size: 3rem;
        }
    ```

</strong>
</p>
