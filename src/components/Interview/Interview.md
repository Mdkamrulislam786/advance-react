### React Interview questions and answers
1) Is it ok to modify props?
Answer: A component cannot update its own props unless they are arrays or objects (having a component update its own props even if possible is an anti-pattern), but can update its state and the props of its children.

For instance, a Dashboard has a speed field in its state, and passes it to a Gauge child thats displays this speed. Its render method is just return <Gauge speed={this.state.speed} />. When the Dashboard calls this.setState({speed: this.state.speed + 1}), the Gauge is re-rendered with the new value for speed.

<b>PROPS</b>
A React component should use props to store information that can be changed, but can only be changed by a different component.
<b>STATE</b>
A React component should use state to store information that the component itself can change.

2) What are controlled and uncontrolled components?
Answer:
A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a "dumb component".

A Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.
Most native React form components support both controlled and uncontrolled usage:

// Controlled:
<input type="text" value={value} onChange={handleChange} />

// Uncontrolled:
<input type="text" defaultValue="foo" ref={inputRef} />
// Use `inputRef.current.value` to read the current value of <input>

3) Should you use composition or inheritance with React?
Answer:
In React using Composition and Props gives you all the flexibility that you would need. React does not say Composition is better than Inheritance. Composition just fits better within the React’s component structure.

If you are new to React and are considering reusing code, always go for React Composition over Inheritance. With the addition of the latest Hooks in React, re-using code is only going to be much easier.

4) What does "the data flows down" mean?
Answer:
Any state is always owned by some specific component, and any data or UI derived from that state can only affect components “below” them in the tree.

If you imagine a component tree as a waterfall of props, each component’s state is like an additional water source that joins it at an arbitrary point but also flows down.