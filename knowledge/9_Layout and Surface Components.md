# Layout and Surface components

- These components have to deal with layout or the surface look of your applications

# Box component

- serves as a wrapper component for most of your css utility needs
- mostly used as a css utility component
- in it's most basic form it is used as a replacement for the div tag
  - it will show as a div in your html
  - you can change the component prop for semantic html
  - use this when you need to access the primary theme as it allows access to the sx prop which not all components have
  - can use the system props from mui system with it (look this up later it is a whole other library)

# Stack component

- used to manage layout in one direction: either vertically or horizontally
  - think of this as flexbox
  - by default all children elements are arranged in a column
  - can use the divider prop to put a divider between children elements
  - spacing prop for spacing between sub-elements

# Grid component

- used to manage layout in two directions: vertically and horizontally
  - also good for 2 dimensional and responsive layouts
- Grid container for the parent and grid item for the children elements
- under the hood uses the flexbox module
- The grid consists of 12 columns
- Each item in the grid can take up one or more columns as its width
- There are five breakpoints each corresponding to a certain device width
  - xs for mobile, sm for tablet, md for desktop, lg and xl for larger monitors
  - we can assign integer values to each breakpoint which indicates how many of the 12 available columns are occupied by that item when the viewport satisfies the breakpoint constraints
  - setting xs will set it for all and above unless you specify a different breakpoint after xs
  - xs={6} would assign 6 of the 12 columns for mobile and above, giving you 2 columns basically
  - if you use auto layout (not giving a value to xs or only assigning one value to one grid item) it will adjust the spacing automatically.
  - if you set xs to 'auto' the width only takes up the amount needed for the elements inside of it
- you can use rowSpacing and columnSpacing on your grid container to set spacing on all the sub-items inside of it
- check out responsive grid at mui in order to see how it's done.

# Paper

- Paper is a surface related component in Mui.
  - it is great when using layouts, and provides visual hierarchy
  - adds a white background
