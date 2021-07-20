#  A React hook for simulating a CSS-style hover event on an element
## Usage

> npm i @tbl4ero/useHover

   

    import React from 'react';
    import useHover from '@tbl4ero/useHover';
    
    const HoveredElement =  () => {
        const  { isHovered, hoverOptions, cursorPos }  =  useHover(/*  options */);
	    return (
			  <>
			      {isHovered && <h1>I'm displayed only when hovering the div!</h1> }
			      <div {...hoverOptions}>Hover me!</div>
		      </>
		);	 
     }
    
## API
### useHover
#### Options

|  parameter | type  | description  |   |
|---|---|---|---|
| trackCursor?  | boolean  | specifies whether the hook should return an object with the current x and y positions of the mouse cursor relative to the element   
|   |   |   |   |

#### Values

|  value | type   | description   |   |
|---|---|---|---|
| isHovered  | boolean   | a boolean value showing whether the element given the hover options is hovered or not  |   |
| hoverOptions  | {}   | an object with callbacks for handling the react synthetic events  |   |
| cursorPos| { x: number, y: number } | the current x and y positions of the mouse cursor relative to the element 