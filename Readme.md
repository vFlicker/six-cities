# Six Cities

In the application, you can get an up-to-date list of rental offers in one of six popular cities. Sorting objects and a detailed description of each of them will help you quickly choose the best housing option. Authorized users can leave a review and add the offer to their favorites.

Important: any email address and password are accepted for authorization.

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Running application

```
npm run start
```

## Store directory structure

```
\
 | - src
   | - store
     | - actions — directory for storing actions that can be used in different slices or api-actions (each file name corresponds to its slice)
     | - api-actions — directory for storing thunk (each file name corresponds to its slice)
     | - middlewares — directory for storing slices middlewares
     | - slices — directory for storing slices
       | - slice.ts — file to create a slice and to export corresponding actions and api-actions
       | - selectors.ts — file to create selectors
       | - other supporting files (types, utils)
     | -  root-reducer.ts — file for configuring the rootReducer
     | -  store.ts — store configuration file
```
