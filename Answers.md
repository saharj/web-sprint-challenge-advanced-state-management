1. What problem does the context API help solve?
   It helps to prevent the project to get cumbersome as by using context api, we provide the data/props only to the tree of component that needs it.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   `action` is an object that has a type and an optional `payload` property and it will tell the reducer how the state should be updated, and passes the data for this update if necessary.
   `reducrs` are functions that receive prev state and a data called `action` and they update the state based on the action.
   `store` is an object that contains the app's state.
   I thinks the reason that store is called 'single source of truth' is that it contains the main state of the app in one place, and it will return the same state to all components whenever it is called.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
   It depends on where the stored data is used. If we need to store an access a data in only a component level, which means other components don't need that dat, we use component state. But if we have data that is needed in different components (like login data) we use Application state and pass it to the components that need it.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   Redux-thunk is a middleware, and it allows us to have an asynchronous flow on our app, like making api calls and updating the state when we receive the response back.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
   I like context api, because it is not as complicated as redux is, and still provides the state to the component tree that needs it. I am aware of its limits, yet I am planning to use it whenever the project structure allows me.
