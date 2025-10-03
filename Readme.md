# Six Cities

In the application, you can get an up-to-date list of rental offers in one of six popular cities. Sorting objects and a detailed description of each of them will help you quickly choose the best housing option. Authorized users can leave a review and add the offer to their favorites.

Important: any email address and password are accepted for authorization.

## Downloading

```bash
git clone {repository URL}
```

## Running application

### Backend

#### Installing NPM modules

Write in the terminal:

```bash
cd server
npm install
```

#### Setup docker

Write in the terminal:

```bash
npm run docker:start
```

#### Create data for application

1. In a separate terminal window:

```bash
cd server
npm run mock:server
```

2. In a separate terminal window:

```bash
cd server
npm run build
npm run mock:generate
npm run mock:import
```

### Start the server

```bash
npm run dev
```

### Frontend

In a separate terminal window:

```bash
cd client
npm install
npm run dev
```
