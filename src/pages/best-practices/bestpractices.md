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
 --componenets
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
Here are some links for project structure:
https://dev.to/syakirurahman/react-project-structure-best-practices-for-scalable-application-18kk

#### Tips
1. Use TypeScript
2. Use ESLint
3. Use Styled Components
4. 
