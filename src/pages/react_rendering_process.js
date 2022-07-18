# React rendering process

### Render Process
Components gets compiled into react elements. Element is a simple object that containes info about dom nodes, childrens of that node, key etc. It describes the structureof ui.
These elemets gets inserted to from virtual dom to actual dom.  
Process has 2 phases
 1. Render phase:  downwards from root node to the last react node jsx gets converted to react elements by calling createElement function. then we have all the react elements listed as objects.  
 2. Commit phase: all the react elements gets printed to the dom using react-dom package.  

 ### Re-render Process
 React goes downwards from root to the last component and checks for flagged componnets. a component can flag itself by calling usestate setstate and usereducer dipatch functiion.  
 react calls createElement func for all the flagged components, converts to react element and stores the render/output(elem objects). 
 Now react compares previous render(previous elements) to new render(new elements). Then a new list of changes are stored and these goes to commit phase.the changes are appplied to dom.  
 1. find all elemnets flagged for update
 2. for each flagged component, convert jsx to react elemnts and store the results
 3. Perform reconciliation -diff old and new tree of react elemnts (aka vrtual dom) 
 4. handover the changes to next phase
 Commit phase: apply changes to the dom. 

 useReducer and useState works the same way.  
 
 ### State Immutablity
 
 Mutating an object or array as state will not cause a re-render when used with the useState or useReducer hook.  
 To re-render make a copy of the existinig state modify as necessary and then pass the new state to the setter function or while returning from a reducer function. 
 
  ### Parent and Child
  
  When a parent component renders React will recursively render all of its children. 
  New state same as old state after re-renders? Parent re-renders one more time but child never re-renders.  
  
  
  ### Same element reference
  
  Pass the expensive child compoenent as props to the parent component. So Whenever theres a re-render in parent componenet react will optimize the re-render for you
  by knowing that the props has to be referencing the same elemnt before and after render. 
  
  ### React Memo
  
  use react memo when a children is re-rendering unneccessarily because of the parent state changed and that state dosent effect the children. 
  use it for expensive components that prop hardly changes. You cant use memo everywhere because its expensive. like a comp takes 10ms to render 2ms to optimize the render by using react memo. so if the prop changes to re-render it'll take 10+2=12ms everytime. 
  Incorrect memoizations:  
  There is no need to wrap child component with react memo if the children itself has react element 
  Incorrect memo with Impure Component(JSX can change evenif the state and props remained the same). Example random values, like Math.random(), new Date().getTime() etc
  
  
 
