This project was bootstrapped with [Create Next App](https://github.com/segmentio/create-next-app).

Find the most recent version of this guide at [here](https://github.com/segmentio/create-next-app/blob/master/lib/templates/default/README.md). And check out [Next.js repo](https://github.com/zeit/next.js) for the most up-to-date info.

## Folder Structure

```
.
├── README.md
├── next.config.js
├── node_modules
│   ├── [...]
├── package.json
├── pages
│   ├── _app.js
│   ├── index.js
│   └── signup.js
├── src
│   ├── config
│   │   ├── reducers.js
│   │   ├── sagas.js
│   │   └── store.js
│   └── redux
│       └── signup
│           ├── actions.js
│           ├── constants.js
│           ├── reducer.js
│           ├── requests.js
│           ├── saga.js
│           └── selectors.js
├── .eslintrc.js
├── .gitignore
├── .prettierIgnore
├── .prettierrc
└── yarn.lock
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:10080](http://localhost:10080) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any errors in the console.

### `npm run build`

Builds the app for production to the `.next` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.


### `npm run start`

Starts the application in production mode.
The application should be compiled with \`next build\` first.

See the section in Next docs about [deployment](https://github.com/zeit/next.js/wiki/Deployment) for more information.


## Deploy to Now

[now](https://zeit.co/now) offers a zero-configuration single-command deployment.

1.  Install the `now` command-line tool either via the recommended [desktop tool](https://zeit.co/download) or via node with `npm install -g now`.

2.  Run `now` from your project directory. You will see a **now.sh** URL in your output like this:

    ```
    > Ready! https://your-project-dirname-tpspyhtdtk.now.sh (copied to clipboard)
    ```

    Paste that URL into your browser when the build is complete, and you will see your deployed app.

You can find more details about [`now` here](https://zeit.co/now).

## Something Missing?

If you have ideas for how we could improve this readme or the project in general, [let us know](https://github.com/segmentio/create-next-app/issues) or [contribute some!](https://github.com/segmentio/create-next-app/edit/master/lib/templates/default/README.md)
