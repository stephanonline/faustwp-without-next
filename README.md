# Running @faustwp/core without nextjs

This this a proof of concept to see if @faustwp/core could work without NextJS.

## Running the project

Make sure you have FaustWP and GraphQL requirements installed into your wordpress instance.

Run the following commands in bash after checking out the repository;

```
$ yarn
$ cp .env.sample .env.local
```

Change the .env.local to target your WordPress instance

Then run:

`$ yarn start`


## TODO:
- Implement preview
- ...