# Deploying Your Vite React Project to Firebase Hosting

Follow these steps to deploy and update your project using Firebase Hosting:

## 1. Install Firebase CLI

```
npm install -g firebase-tools
```

## 2. Login to Firebase

```
firebase login
```

## 3. Initialize Firebase in Your Project

```
firebase init
```

- Select **Hosting** (use spacebar to select).
- Choose an existing Firebase project or create a new one.
- Set the public directory to `dist` (for Vite projects).
- Configure as a single-page app: **Yes**.
- If asked to overwrite `dist/index.html`, choose **No**.

## 4. Build Your Project

```
npm run build
```

## 5. Deploy to Firebase

```
firebase deploy
```

---

## Updating Your Site

Whenever you make changes:

1. Run `npm run build` again.
2. Run `firebase deploy` to update your live site.

---

For more details, see the [Firebase Hosting documentation](https://firebase.google.com/docs/hosting).
