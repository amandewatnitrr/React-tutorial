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




</strong>
</p>
