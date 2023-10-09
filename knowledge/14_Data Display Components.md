# Avatar component

- Makes avatar components (circles with faces or initials)
- Checkout the MuiAvatar component for examples

# Badge Component

- generates a small badge to the upper right of it's child component
- default maximum value is 99
- can be changed using max prop and setting it to whatever value you want

# List Component

- Allows you to create a list of items
- Checkout the MuiList.tsx file for examples
- Checkout the Mui documentation for other examples

# Chip component

- allow users to enter information, make selections, filter content, or trigger actions
- showcasing tags on a blog post would be one example, or filtering types of items
- by default a chip is read only, this can be changed, by handling the onclick event

# Tooltip component

- display information text when users hover over/focus or tab an element
- they are very good when working with icons
- default for tooltip is to be to the bottom of the element
- can set enter and leave delay to make it take time for the text to appear or leave the screen

# Table component

- used to display sets of data in a table format
- won't include sort, filter, or paginate data, that will need to be looked up
- the professor uses react table or tanstack table for other table info.
- align prop is useful for numeric values since they are right aligned
- limited height tables can use stickyHeader to help achieve a header that moves with the content as you scroll down
