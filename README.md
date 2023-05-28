# API endpoints

## Auth routes

Base URL `/api/auth`

| HTTP Method | URI path  | Description      |
| ----------- | --------- | ---------------- |
| GET         | `/verify` | Verify authToken |
| POST        | `/signup` | Signup handler   |
| POST        | `/login`  | Login handler    |

## User routes

Base URL `/api/user`

| HTTP Method | URI path          | Description         |
| ----------- | ----------------- | ------------------- |
| GET         | `/:id`            | Get info user by ID |
| GET         | `/resetToken/:id` | Reset user token    |
| PUT         | `/edit/:id`       | User edit by ID     |
| DELETE      | `/delete/:id`     | User delete by ID   |

## Deck routes

Base URL `/api/deck`

| HTTP Method | URI path              | Description          |
| ----------- | --------------------- | -------------------- |
| GET         | `/getAllDecks`        | All decks            |
| GET         | `/getDeckByOwner/:id` | Get deck by owner ID |
| POST        | `/createDeck`         | Create deck          |
| PUT         | `/editDeck/:id`       | Edit deck by ID      |
| DELETE      | `/deleteDeck/:id`     | Delete deck by ID    |

## Card routes

Base URL `/api/card`

| HTTP Method | URI path              | Description          |
| ----------- | --------------------- | -------------------- |
| GET         | `/getAllCards`        | Get all cards        |
| GET         | `/getCardByOwner/:id` | Get card by owner ID |
| GET         | `/getRandomCard`      | Get random card      |
| POST        | `/createCard`         | Create new card      |
| PUT         | `/editCard/:id`       | Edit card by ID      |
| DELETE      | `/deleteCard/:id`     | Delete card by ID    |


## Upload routes

Base URL `/api/upload`

| HTTP Method | URI path | Description                |
| ----------- | -------- | -------------------------- |
| POST        | `/image` | Upload image to cloudinary |