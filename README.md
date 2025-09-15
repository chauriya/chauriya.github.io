# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/c6464b24-c909-461b-bdfa-83c140c2ef67

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/c6464b24-c909-461b-bdfa-83c140c2ef67) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

This project is set up to be deployed to GitHub Pages.

### Prerequisites

- You have push access to the GitHub repository.
- `gh-pages` is installed as a dev dependency.
- `package.json` is configured with a `homepage` URL and `deploy` scripts.

### Deployment Steps

1.  **Deploy the application**

    Run the following command to build the application and deploy it to the `gh-pages` branch:

    ```sh
    npm run deploy
    ```

    This command will first run `npm run build` to create a production build in the `dist` folder, and then `gh-pages -d dist` will push the contents of the `dist` folder to the `gh-pages` branch on your GitHub repository.

2.  **Configure GitHub Pages**

    If you haven't already, you need to configure GitHub Pages to use the `gh-pages` branch.

    - Go to your repository settings on GitHub.
    - Navigate to the "Pages" section.
    - Under "Build and deployment", select "Deploy from a branch".
    - Choose `gh-pages` as the branch and `/ (root)` as the folder.
    - Save the changes.

    Your site will be available at the `homepage` URL specified in your `package.json`.

### Router Notes

If your app uses client-side routing (like React Router), you might need to handle 404 errors correctly on GitHub Pages. The simplest solution is to switch from `BrowserRouter` to `HashRouter`.

```tsx
import { HashRouter as Router } from 'react-router-dom';
```
