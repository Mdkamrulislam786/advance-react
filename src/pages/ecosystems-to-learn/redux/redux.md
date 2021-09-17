## Redux

Actions

An action is a plain JavaScript object that has a type field. You can think of an action as an event that describes something that happened in the application. It can have other fields like a payload that can be a primitive and reference types, it gets passed o reducers

```
const addTodoAction = {
  type: 'todos/todoAdded',
  payload: 'Buy milk'
}

```

Action Creators
An action creator is a function that creates and returns an action object. We typically use these so we don't have to write the action object by hand every time.

```
const addTodo = text => {
  return {
    type: 'todos/todoAdded',
    payload: text
  }
}

```

Reducers

A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state: (state, action) => newState. You can think of a reducer as an event listener which handles events based on the received action (event) type.

```
const initialState = { value: 0 }

function counterReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  if (action.type === 'counter/increment') {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      value: state.value + 1
    }
  }
  // otherwise return the existing state unchanged
  return state
}
```

Store  
The current Redux application state lives in an object called the store .

The store is created by passing in a reducer/ root reducers using combined reducers, and has a method called getState that returns the current state value

```
import { createStore } from 'redux'
import rootReducer from './reducer'

const store = createStore(rootReducer)

//createStore(rootReducres, preLoadedstate, enhancers)
export default store

```

Dispatch  
The Redux store has a method called dispatch. The only way to update the state is to call store.dispatch() and pass in an action object. The store will run its reducer function and save the new state value inside, and we can call getState() to retrieve the updated value.

Selectors  
Selectors are functions that know how to extract specific pieces of information from a store state value. As an application grows bigger, this can help avoid repeating logic as different parts of the app need to read the same data.

```
const selectCounterValue = state => state.value
const currentValue = selectCounterValue(store.getState())
console.log(currentValue)

```

Redux app data flow  
https://redux.js.org/tutorials/essentials/part-1-overview-concepts#redux-application-data-flow

Thunk  

By itself, a Redux store doesn't know anything about async logic. Any asynchronicity has to happen outside the store. We use middlewares if you want to have async logic interact with the store by dispatching or checking the current store state. A thunk is a specific kind of Redux function that can contain asynchronous logic. Thunks are written using two functions:  

An inside thunk function, which gets dispatch and getState as arguments   
The outside creator function, which creates and returns the thunk function  

```
// the outside "thunk creator" function
const fetchUserById = userId => {
  // the inside "thunk function"
  return async (dispatch, getState) => {
    try {
      // make an async call in the thunk
      const user = await userAPI.fetchById(userId)
      // dispatch an action when we get the response back
      dispatch(userLoaded(user))
    } catch (err) {
      // If something went wrong, handle it here
    }
  }
}
```

Why should we use redux thunk or saga?  
Answer: https://stackoverflow.com/questions/34570758/why-do-we-need-middleware-for-async-flow-in-redux  

MIddlewares   
Redux uses a special kind of addon called middleware to let us customize the dispatch function.
Redux middleware provides a third-party extension point between dispatching an action, and the moment it reaches the reducer. People use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing, and more.
Unlike a reducer, middleware can have side effects inside, including timeouts and other async logic

MIddlewares runs one after another in chain:  
In this case, the action is passed through:  

The print1 middleware (which we see as store.dispatch)  
The print2 middleware  
The print3 middleware  
The original store.dispatch  
The root reducer inside store  
And since these are all function calls, they all return from that call stack. So, the print1 middleware is the first to run, and the last to finish.  

Middleware are the main way to customize the store  
Middleware are added using the applyMiddleware enhancer  
Middleware are written as three nested functions inside each other  
Middleware run each time an action is dispatched  
Middleware can have side effects inside  


#### Redux saga
Documentation: https://redux-saga.js.org/docs/introduction/GettingStarted
