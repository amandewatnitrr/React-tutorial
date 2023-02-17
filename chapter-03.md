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

</strong>
</p>
