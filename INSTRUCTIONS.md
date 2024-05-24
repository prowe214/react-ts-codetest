# Instructions for Code Exercise

We will create an **Async React Hook**.

1. Open new branch
1. Write a React Hook that makes an API request.
   1. The hook returns the values `loading`, `data`, and `error`
   2. The hook makes the request on the below URL
1. Commit your changes
1. Push your branch (push will fail because this is a private repo, that's okay)

```
https://jsonplaceholder.typicode.com/todos/1
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
