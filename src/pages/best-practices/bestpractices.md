### Lists of best practices for React.js
#### Folder Structure

<b>Structure 1</b>
<code>
-src
 --layout
    ---layout.js
 --API
    ---apiutils.js
    ---apicalls.js
 --pages/routes
    ---Home
        --Home.js
        --Home.css
        --Home.text.js
    ---Product
        --Product.js
        --Product.css
        --ProductLogic.js
 --components
    ---Button
        -Button.js
        -Button.css
        -Button.test.js
        -ButtonLogic.js
    ---Modal
        -Modal.js
        -Modal.css
        -Modal.test.js
        -ModalLogic.js
 --helpers
    ---Helper.js (Helping functions)
 --styles (if you want to separate styles)
    --styles.css
 --config
    ---config.js
 --reduxStore
    --Product
        ---Product.action.js
        ---Product.reducers.js
        ---Product.types.js
        ---ProductServices.js
    --Cart
        ---Cart.action.js
        ---Cart.reducers.js
        ---Cart.types.js
        ---CartServices.js
</code>

<b>Structure 2</b>
<code>
src
-utilities- global constants and helper functions
-views
    -compoenents(feature first componenets)
    -routes(base router)
    -pages(layouts, related to routes)
    -styled(styled componenets)
    -UI(reusable componenets)
-store(redux)
    -ducks
        -duck1
            ├── actions.js
            ├── index.js
            ├── operations.js
            ├── reducers.js
            ├── selectors.js
            ├── tests.js
            ├── types.js
            ├── utils.js
        -duck2
            ├── actions.js
            ├── index.js
            ├── operations.js
            ├── reducers.js
            ├── selectors.js
            ├── tests.js
            ├── types.js
            ├── utils.js
</code>

<b>Structure 3</b>
Clean architecture  
Google about a important concept called `loose coupling, high cohession`  
coupling: the degree of direct knowledge that one element has of another  
high cohession: keep similar and related things together  

try to build from the 'bottom up' from your data to UI you aregoing to learn a lot of stuff along the way  
<code>
src  
    -application(all the business logic-redux/state)   
    -infastructure(services)   
    -presentasion or views(react)-all componenets and stuffs  
</code>

Here are some links for project structure:  
Frontend architecture: https://www.youtube.com/watch?v=o8THlN8hgcw  
https://dev.to/syakirurahman/react-project-structure-best-practices-for-scalable-application-18kk  

#### React Best Practice Tips
1. Use TypeScript
3. Use Styled Components
4. Split your components logic from the component itself
5. Make your components indipendent and small. Your component should do/perform only one task/work.
6. Make your components reuasable af
7. Learn about frontend architcture / design patterns for both react and redux


#### Usefull Resource
*Must Read: Clean Code by Reboert C Martin aka uncle bob: https://enos.itcollege.ee/~jpoial/oop/naited/Clean%20Code.pdf  

#### Must Learn as a better software enginner  

1. Deep understanding of one programming language  
2. Writing Clean Code
3. Software Design Patterns
4. Best practices of your stack
5. Know your tools better
6. Build big projects weeks to months long
7. Do project based learning
