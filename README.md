This is a sms messenger application using Angular, Ruby on Rails, MongoDB and Twilio. 

To use this app:

- Enter a phone number (must be verified with Twilio if you're on a free trial)
- Type a message and click Send
- Messages will appear in the message history panel
- Messages are tied to a session using secure cookies

# MySMS Messenger

**MySMS Messenger** is a full-stack web application that allows users to send SMS messages and view their message history.

It features:

- **Angular Frontend** — Simple UI for inputting phone numbers and messages
- **Ruby on Rails API** — Secure backend handling message delivery and storage
- **MongoDB (Atlas)** — Persists messages per user session
- **Twilio Integration** — Sends real SMS messages via Twilio API

---

## Tech Stack

| Layer        | Tech                      |
|--------------|---------------------------|
| Frontend     | Angular 17 (Standalone API) |
| Backend      | Ruby on Rails 7 (API Mode) |
| Database     | MongoDB Atlas (via Mongoid) |
| Messaging    | Twilio Programmable SMS   |

---

## Local Development Setup

You’ll need **Node.js**, **Ruby (3.2+)**, **MongoDB Atlas**, and a **Twilio account**.

### Backend Setup (Rails API)

```bash
git clone https://github.com/your-username/mysms-messenger.git
cd mysms-messenger/backend
bundle install
touch .env

Add the following to .env:

MONGODB_URI=mongodb+srv://<user>:<encoded_password>@<your-cluster>.mongodb.net/?retryWrites=true&w=majority&appName=<your-app-name>
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=+1XXXXXXXXXX


Then:
rails server

Backend will run at: http://localhost:3000/api/messages

## Frontend Setup (Angular)

cd ../frontend
npm install
ng serve

Frontend runs at: http://localhost:4200


Testing

- Enter a phone number (must be verified with Twilio if you're on a free trial)
- Type a message and click Send
- Messages will appear in the message history panel
- Messages are tied to a session using secure cookies

🔐 Security Notes
- CORS and CSRF protection are enabled
- Session tracking is done via cookies.signed[:session_id]
- Ensure environment variables are never committed to version control

🚀 Deployment Notes (Optional)
- You can deploy this app using:
- Backend: Render (free for Rails API)
- Frontend: Vercel or Netlify


























# Frontend

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
