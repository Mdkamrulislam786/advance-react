# How does browser render a website

 So there are few componenets that is used to build a browser like User interface , browser engine, render engine. Render Engine is what is responsible for rendering the website.  

 So render engine gaher resources from server and then it parse html and css, creates a dom tree along with render tree, creates a layout and paints the results from previous steps.  

## Parsing
parsing creates a parse tree by tokenizer, takes parse tree creates a dom tree, put script tag at the bottom or use defer/async on the script tag to let the render engine parse the html without being interupted. Now we got a dom and cssom.

## Render tree
There are multiple tree being created in the render tree. 
Not in the render tree: not visual elements like head, script, title etc. Nodes hidden via display:none.  Render tree calculates visual properties , combines and computes all style and creates render objects assign to a dom node. to decide where should each elements blocks etc should be in the ui. 

## Layout

Its a recursive process traverse render tree, nodes positions and size, layout its childrens. invremental layouts, imediate layout like change font size itwill relayout , accessing certaing properties likeelem.offsetHeight , browser resize the entire document. Good practice is to read all the doms and then write to it. Most JS frameworks does this to prevent layout thrashing. Which is batch the reads and writes.

## Paint

Will takes the layout render tress, creates layers, incremental process, builds up over 12 phases like background color then image then border , shadow etc 


## Recap
Parsing -->> Dom tree  
Dom tree -->> Render tree  
Is actually 4 tress -->> layers,line boxes, render objects, render styles objects  
Layout computes where a node will be on the screen  
Painting computes bitmaps and composites to screen tgjrgmsfhm

