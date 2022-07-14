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
 1. find all elemnts flagged for update
 2. for each flagged component, convert jsx to react elemnts and store the results
 3. Perform reconciliation -diff old and new tree of react elemnts (aka vrtual dom) 
 4. handover the changes to next phase
 Commit phase: apply changes to the dom
