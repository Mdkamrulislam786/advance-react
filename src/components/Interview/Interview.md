### React Interview questions and answers
#### 1) Is it ok to modify props?
Answer: A component cannot update its own props unless they are arrays or objects (having a component update its own props even if possible is an anti-pattern), but can update its state and the props of its children.

For instance, a Dashboard has a speed field in its state, and passes it to a Gauge child thats displays this speed. Its render method is just return <Gauge speed={this.state.speed} />. When the Dashboard calls this.setState({speed: this.state.speed + 1}), the Gauge is re-rendered with the new value for speed.

<b>PROPS</b>
A React component should use props to store information that can be changed, but can only be changed by a different component.
<b>STATE</b>
A React component should use state to store information that the component itself can change.

#### 2) What are controlled and uncontrolled components?
Answer:
A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a "dumb component".

A Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.
Most native React form components support both controlled and uncontrolled usage:

// Controlled:
<input type="text" value={value} onChange={handleChange} />

// Uncontrolled:
<input type="text" defaultValue="foo" ref={inputRef} />
// Use `inputRef.current.value` to read the current value of <input>

#### 3) Should you use composition or inheritance with React?
Answer:
In React using Composition and Props gives you all the flexibility that you would need. React does not say Composition is better than Inheritance. Composition just fits better within the React’s component structure.

If you are new to React and are considering reusing code, always go for React Composition over Inheritance. With the addition of the latest Hooks in React, re-using code is only going to be much easier.

#### 4) What does "the data flows down" mean?
Answer:
Any state is always owned by some specific component, and any data or UI derived from that state can only affect components “below” them in the tree.

If you imagine a component tree as a waterfall of props, each component’s state is like an additional water source that joins it at an arbitrary point but also flows down.

#### 5) What does it mean to "lift state up"?
Answer:
Suppose you have a function App where you are rendering a child component 'Counter'. Counter has some state and functions that does the counting and shows in the ui/view.
Now if you transfer all the funtions and state in the counter component to App(parent) component and pass all the states and function to the child component as props. The counter component will grab the props and will work the same as before. So passing the props fromParent to child is now called as lifting state up.

#### 6) How do you prevent a component from rendering?
Answer:
By using PureComponent, shouldComponetUpdate lifecycle methode, useMemo, useCallback, React.Memo(Compoent) etc. This check if the prev state is siilar to the next stae if it is, then component dosent re-render and memo calculates the state so it doesnt re-render every time.

#### 7) What is the difference between elements and components?
Answer: 
React Element - It is a simple object that describes a DOM node and its attributes or properties you can say. It is an immutable description object and you can not apply any methods on it.

Eg - <button class="blue"></button>
React Component - It is a function or class that accepts an input and returns a React element. It has to keep references to its DOM nodes and to the instances of the child components.

const SignIn = () => (
  <div>
   <p>Sign In</p>
   <button>Continue</button>
   <button color='blue'>Cancel</button>
  </div>
);

#### 8) What is JSX?
Answer:
JSX stands for JavaScript XML.
JSX allows us to write HTML in React.
JSX makes it easier to write and add HTML in React.

#### 9)How should you modify state?
Answer:
If you are using class component use this.setState({}) or this.setState(()=>{}). Because it always re-renders the componenet so the view gets changed depending on the new state. Never use this.setState = changed state. Basically, if you modify this.state directly, you create a situation where your modifications might get overwritten.

In functional component, use useState() hook to create and update state, useReducer()  when you'd rather modify state via reducers and actions. useRef() ...
useContext() ...
props....  Theses are ways to mange state as well.


#### 10) How do you pass arguments to event handlers?

Answer:
You always do : <button onClick={addBill}>Add</button>
You cant do: <button onClick={removeBill(index)}>𝗫</button> it is going to be executed on mount.
You need to do: <button onClick={() => removeBill(index)}>𝗫</button>

#### 11) How do you put conditionals in JSX?
Answer:
7 Ways to Implement Conditional Rendering in React Applications
1. Using an if…else Statement
2. Using a switch Statement
3. Using Element Variables
4. Using Ternary Operators
5. Using Logical && (Short Circuit Evaluation)
6. Using Immediately Invoked Function Expressions (IIFEs)
7. Using Enhanced JSX Libraries

#### 12) Why should we use React and what are some React major advantages?
Answer
UI testing becomes easier, Faster application, JSX redability, Server side rendering, easier to integrate new frameworks

#### 13) What is a 'key' in React & its purposes?
Answer:
KEY is an indentifier given to things in an array so react can track if item has changd with state/component.
#### 14) What are the diffrence between statefull component and stateless comonent?
Answer:
StateFull component:
Stores info about state changes in memory, have auth to change state, contains the knowledge of past present and future channges, stateless component notify them about the requirments of the state chnages and they send down the props to them.

StateLess component:
Calculates internal state of the component,dosent have auth to change state, recieves the props from statefull compoennt and treats them as a callbackfunction.

#### 15) Why do we use an arrow function in React?
Answer:
Specially to handle an event like onClick and stuff. arrow function dosent have its own this keyword. so it takes the this kw form lexical scope.

#### 16) How do we prevent comonents from re-rendering?
Answer:
By using PureComponent, React.Memo(), useMemo(), useCallback(), shouldCompponentUpdate()

#### 16) What is the best lifecycle method for API calls?
Answer:
Class component: componentDidMount(), FuctionalComp: useEffect()

#### 17) What are some of the React Patterns?
Answer:
React context API, rendering props etc

#### 18) Why would you use React in your project?
Answer:
Compare to other frameworks its easy to use, allows you to do a lot of javascript, less syntex and more.

#### 19) What is CSS-in-JS pattern?
Answer:
Doing inline css like <div style={{textAlign:'center'}}>Centered text</div>

#### 20) How to optimize a React app?
Answer:
Stop unnessary rendering, use React.lazy() to render big size file or slow API call, CDN issues, use npm run build version, React.profiler and there are many ways to optimze a React app.

#### 21)Explain React DOM
Answer:
React has a DOM tree of its own which it craetes during the initial render which is called Virtual DOM.
When you do some action on the UI, React makes a copy of the whole DOM, Checks which DOM Node got chnaged in the DOM by comparing the current copy of the DOM to previous copy of the DOM, updates only that Node in the actual Browser DOM.
To know more about how react dom works: do a google search :)

#### 22) Explain React lifecycle method
Answer:
Class based component lifecycle:
1. get default props
2. set default states
3. before rendering - componentWillMount() etc - now the methods doesnt have access to JSX
4. renders JSX
5. after rendering - componentDidMount() - now the methods have access to JSX

#### 23) What is the single source of truth in redux?
Answer:
Its like a global store where you've all the states of the your app stored here in Redux store. So you can track all the changes from a single point.

#### 24) Explain How Redux works
Answer:
All the states are stored in Readux store,when you do an action(like a cliking a button) on the UI, a specific action gets triggered that has an action TYPE and payload, the action with type and payload gets passes to the reducer, reducer matches the action type and update the states, and the UI/View gets changed.

#### 25) What is redux middleware?
Answer:
The server and local store is always in sync. Middleware manages the req&res between server and local store.

