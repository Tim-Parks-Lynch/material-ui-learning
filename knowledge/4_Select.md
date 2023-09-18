# Select Component

- used for collecting information from a list of options
- width is based off of the value already chosen or by specifying a textfield width, or if you have a parent component like box with a width you can specify fullWidth prop on the textfield component to take up the full width the parent has set.
- make sure to specify the SelectProps equal to an object with key of multiple: true on the TextField component
- you can use all the other props that you used on textfield like helperText or color
  - size can only be set to 'small' or 'medium'
- error prop works as well.

- A more practical version of this is probably going to have an API call to pull down the available values to show the client before they pick one.

<!-- Single Select Drop Down -->

```js
<Box width="250px">
  <TextField
    label="Select country"
    value={country}
    onChange={handleChange}
    select
    fullWidth
  >
    <MenuItem value="USA">USA</MenuItem>
    <MenuItem value="AU">Australia</MenuItem>
    <MenuItem value="EU">Europe</MenuItem>
  </TextField>
</Box>
```

<!-- Multi-Select Drop Down -->

```js
<Box width="250px">
  <TextField
    label="Select multiple countries or one country"
    value={country}
    onChange={handleChange}
    select
    fullWidth
    SelectProps={{
      multiple: true,
    }}
  >
    <MenuItem value="USA">USA</MenuItem>
    <MenuItem value="AU">Australia</MenuItem>
    <MenuItem value="EU">Europe</MenuItem>
  </TextField>
</Box>
```
