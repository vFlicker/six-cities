# Six Cities

In the application, you can get an up-to-date list of rental offers in one of six popular cities. Sorting objects and a detailed description of each of them will help you quickly choose the best housing option. Authorized users can leave a review and add the offer to their favorites.

Important: any email address and password are accepted for authorization.

## Downloading

```bash
git clone {repository URL}
```

## Installing NPM modules

Navigate to the client directory and run the following commands:

```bash
cd client
npm install
npm run dev
```

## Running application

In a separate terminal window, navigate to the server directory and run the following commands.

```bash
cd server
npm install
npm run dev
```

TODO: make text for fill database

## Create data for application

1. Write in first terminal

```bash
npm run mock:server
```

2. Write in second terminal

```bash
npm run build
npm run mock:generate
npm run mock:import
```
