# Instructions for Code Exercise

We will create an **Async React Hook**.

1. Open new branch
2. Write a new React hook that makes an API request
   - The hook is a new, unique hook that should be built in a separate file
   - The hook returns the values `loading`, `data`, and `error`
   - The hook makes the request to the URL below
   - The `data` returned from the hook will be the `title` and `url` fields from the response
   - The code should implement strong types for any data that it defines, handles, or returns.
3. When complete, commit your changes
4. Push your branch (the push command will fail, it's okay, ignore)

```
# URL for API request
https://jsonplaceholder.typicode.com/photos/1
```

The data that is returned will look like this, but we only want the title and URL.

```json
{
  "albumId": 1,
  "id": 1,
  "title": "accusamus beatae ad facilis cum similique qui sunt",
  "url": "https://via.placeholder.com/600/92c952",
  "thumbnailUrl": "https://via.placeholder.com/150/92c952"
}
```
