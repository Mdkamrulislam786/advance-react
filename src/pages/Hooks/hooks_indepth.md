useCallBack and useMemo is needed only for memoization between re-renders. Memoizing function,arrays,objects, expensive calculations etc. During initial render 
these hooks makes react do some additional work. If one of the props isnt memoized the componenet will re-render . so memoize all props other wise remove memoization.

### useCallback
memoize functions 
### useMemo
memoize refrence types and expensive calculations, dont memoize native js functions instead memoize the function and jsx. Ex an expensive map with childrens(card)
