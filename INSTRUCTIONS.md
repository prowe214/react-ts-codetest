# Instructions for Code Exercise

We will create an **Async React Hook**.

1. Open new branch
1. Write a new React Hook that makes an API request.
   1. The hook is a new, unique hook, that we will build in a separate file
   1. The hook returns the values `loading`, `data`, and `error`
   1. The hook makes the request on the URL below
   1. The `data` returned from the hook will be the `title` and `url` fields from the response
   1. The code should implement strong Types for any data that it defines, handles, or returns.
1. Commit your changes
1. Push your branch (push will fail because this is a private repo, that's okay)

```
# URL for API request
https://jsonplaceholder.typicode.com/photos/1
```

The data that is returned will look like this, but we only want the URL.

```json
{
  "albumId": 1,
  "id": 1,
  "title": "accusamus beatae ad facilis cum similique qui sunt",
  "url": "https://via.placeholder.com/600/92c952",
  "thumbnailUrl": "https://via.placeholder.com/150/92c952"
}
```
