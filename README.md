<<<<<<< HEAD
# Jolteon
![jolteon](http://cdn.bulbagarden.net/upload/c/c1/Spr_5b_135.png)

Babel + Electron + React + Browserify + Sass application stack. Gets the stupid work done so you can actually make something.

![moving picture](http://i.imgur.com/WkZ19h9.gif)

## What stupid work, exactly?

- Build your app with one command.
- Open a live-reloading instance of your app with another command.
- Lint your app using a third command.

## How to get started

The specialized `git clone` command and following `rm -rf .git` ensure that the git history of jolteon is not replicated so that you can enter your new jolteon project and `git init` a new project with new remotes, new history, etc. `gulp-cli` is required to run gulp and `electron-prebuilt` is installed to be able to test your project locally without `gulp package` every time (via `gulp serve`).

You may also want to `rm -rf` this README.md after you're all set up and replace it with the README for your project.

```
npm install -g gulp-cli electron-prebuilt
git clone --depth=1 --branch=master https://github.com/vulpino/jolteon my-jolteon-project
cd my-jolteon-project
rm -rf .git
npm install
gulp serve
```

### If you're on windows...

`gulp package-osx` will fail because symlinks. Sorry. Blame gulp-atom-electron.

## Directory Structure

- Your client HTML lives in app/.
- Your client javascript lives in app/js/.
- Your client SCSS lives in app/scss.
- Your react components live in app/js/components/.
- Your electron server code lives in src/.
- Everything is programmed using Javascript, the new, cool kind (ES2015).

### Building

- Build the client and server bundles: `gulp build`
- Watch app/ and src/ for changes and update build/ automagically: `gulp watch`
- Lint everything (We use StandardJS, but you can modify the .eslintrc): `gulp lint`
- Open up the app: `gulp serve`. This will also live reload everything, so don't worry about that.
- Package the app for release: `gulp package`.

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
=======
Get started:

    git clone https://github.com/nicnocquee/test-electron
    npm install

To package:

    gulp package-osx

If double click on the created app, `release/jolteon.app`, there will be error

    Uncaught error: Cannot find module 'fs-extra'

But if we go inside `release/jolteon.app` via `Show Package Content`, then go to `/release/jolteon.app/Contents/Resources/app`, then run `electron .`, everything works fine.

If run via `gulp serve`, also fine.

Confused.
>>>>>>> 4e20ca040625c71fa77f81317e6e631b283a42be
