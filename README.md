# Vehicle Rental

- **By:** Feras Abdulazem <feras.abdulazem@gmail.com>
- **URL:** TBA

## Requirements

- NodeJS V14+
- MySQL
- Yarn V1

## API

The REST API built with express

**Key Technologies:** [Typescript](https://www.typescriptlang.org/), [Express](https://expressjs.com/en), [NodeJS](https://nodejs.org/en/)

### Folder Structure

| Folder          | description                                                 |
| --------------- | ----------------------------------------------------------- |
| doc             | includes documentation for the App                          |
| src/controllers | modular route handlers (express controllers)                |
| src/lip         | includes useful utils and helpers (e.g. for db access)      |
| src/entity      | includes database entities defined as typescript interfaces |

### Installation (DEV)

- create env file and enter your MySQL credentials

```bash
cp .env.dist .env
```

update the .env file with your sql server credentials

- install dependencies

```bash
yarn
```

- start dev server

```bash
yarn dev
```

- create the DB and its tables using the sql scripts defined under [doc/database](/doc/database)

## Client

A frontend App built with React

**Key Technologies:**
[Typescript](https://www.typescriptlang.org/),
[React](https://reactjs.org), [SWR](https://swr.vercel.app), [React Router](https://reactrouter.com/), [Material UI](https://mui.com/material-ui/),
[React Hook Form](https://www.react-hook-form.com/)

### Folder Structure

| Folder         | description                                    |
| -------------- | ---------------------------------------------- |
| public         | includes public assets such as images          |
| src/components | react components                               |
| src/lib/data   | react hooks for data fetching and manipulation |
| src/lib/types  | includes general types                         |
| src/pages      | react components that represent our pages      |

### Installation (DEV)

- install dependencies

```bash
yarn
```

- start dev server

```bash
yarn dev
```

## Code Quality:

This project uses [ESLint](https://eslint.org/) to enforce a certain code style; and uses the [Airbnb style](https://github.com/airbnb/javascript) as a style guide line
