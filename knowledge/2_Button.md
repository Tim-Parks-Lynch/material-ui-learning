# Button in Material UI

- Native buttons or anchor elements that have been enhanced
- Has 3 variants
  - Text: used when you need to grab less attention, card footer or information popup
    - Becomes an anchor tag semantically when used with the href attribute
  - Contained: grab user attentions for primary actions
    - Semantically just a button
  - Outlined: can be used for secondary actions cancel/go back buttons
    - Semantically just a button

# Color

- use color attribute on button to set the color equal to the ones you have in your default palette theme.
- Check out the MuiButton.tsx to see a nice looking version of them
- We used the Stack component as well to show these nicely on the page. Very similar to flexbox, really cool. Give it a look.

# disableRipple and disableElevation prop

- removes the ripple effect and the elevation on certain buttons if they have it.

```js

<Button varian="contained" disableRipple>
<Button varian="contained" disableElevation>
```

# onClick event

```js
<Button variant='containted onClick={() => console.log("clicked")}'>
```

# ButtonGroup

- used to group buttons together.
- When using ButtonGroup component all the usual props like variant and color are used on the ButtonGroup and removed from the button. Allowing styling to happen on one component instead of all of them.
- also can control the orientation of the buttons with the orientation prop.
- onClick needs to be set on each button and not on the ButtonGroup component
- use aria-label="alignment button group" for accessibility

# ToggleButtonGroup

- same as the button group but allows toggling, if you only want one thing to be clicked use the exclusive prop on the ToggleButton Group.
- All the other attributes like size, color, etc. can be used as well on the toggleButtonGroup
- you will need to handle state

```js
// need useState to handle the state changes on the toggle
// check the MuiButton Component to see example
<ToggleButtonGroup
  size="small"
  aria-label="text-formating"
  value={formats}
  color="success"
  orientation="vertical"
  onChange={handleFormatChange}
  exclusive
>
  <ToggleButton value="bold" aria-label="bold">
    <FormatBoldIcon>Left</FormatBoldIcon>
  </ToggleButton>
  <ToggleButton value="italic" aria-label="italic">
    <FormatItalicIcon>Left</FormatItalicIcon>
  </ToggleButton>
  <ToggleButton value="underlined" aria-label="underlined">
    <FormatUnderlinedIcon>Left</FormatUnderlinedIcon>
  </ToggleButton>
</ToggleButtonGroup>
```
