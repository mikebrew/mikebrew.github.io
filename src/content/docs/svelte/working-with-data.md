---
title: Working with Data
---

## Importing a JSON file

```js
let resurl = "[PATH-TO-FILE]";
```

## Fetch data from file

```js
async function fetchData() {
  const res = await fetch(resurl);
  const data = await res.json();

  if (res.ok) {
    return data;
  } else {
    throw new Error(data);
  }
}
```

## Loop through items in Svelte

```svelte
{#await fetchData()}
    <p>loading</p>
{:then items}
    {#each items as item}
        <p>{item.title}</p>
    {/each}
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}
```

## Example

### JSON File: movies.json

```json
[
  {
    "title": "WALL-E",
    "type": "animation"
  },
  {
    "title": "Hitchhickers Guide to the Galaxy",
    "type": "comedy"
  },
  {
    "title": "TRON Legacy",
    "type": "action"
  }
]
```

### Svelte File: movies.svelte

```svelte
<script>
    let resurl = "/movies.json"

    async function fetchData() {
      const res = await fetch(resurl);
      const data = await res.json();

      if (res.ok) {
        return data;
      } else {
        throw new Error(data);
      }
    }
</script>
<div>
{#await fetchData()}
    <p>loading</p>
{:then movies}
    <ul>
    {#each movies as movie}
        <li>{movie.title} ({movie.type})</li>
    {/each}
    </ul>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}
</div>
```

### Output

- WALL-E (animation)
- Hitchhickers Guide to the Galaxy (comedy)
- TRON Legacy (action)
