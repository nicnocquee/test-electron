To package:

    gulp package-osx

If double click on the created app, `release/jolteon.app`, there will be error

    Uncaught error: Cannot find module 'fs-extra'

But if we go inside `release/jolteon.app` via `Show Package Content`, then go to `/release/jolteon.app/Contents/Resources/app`, then run `electron .`, everything works fine.

Confused.
