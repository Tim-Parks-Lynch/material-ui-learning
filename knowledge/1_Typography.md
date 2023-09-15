# Typography

- Deals with the style and appearance of text in your site.
- There are 13 variations of the component
  - h1 - h6, subtitle 1-2, and body1-2.
- Default variant for Typography is Body1.

- Body1 is default a paragraph tag element in the rendered html

# Changing Semantic tag used

- You can change the semantic tag used by using the Typography component attribute.

```ts
<Typography variant="h4" component="h1">
```

results in the semantic h4 being replaced with h1 in the rendered html.

- This is really important for handling semantics in html.

# gutterBottom

- gives the Typography component a margin-bottom which is off by default.

```ts
<Typography variant='h4' gutterBottom>
```

- The margin is dependent on the variant and larger variants will have larger values for margin-bottom.
