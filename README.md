# atom-update-package

Publishes a new version of a Core Atom package and updates the Atom package.json to match.

## Note

This module is designed specifically for use by [Atom](https://atom.io) maintainers when publishing updates to Atom core packages. Any use outside of that scenario isn't supported.

## What It Does

It streamlines the process of updating a Core Atom package by performing the following steps:

1. Executes `apm publish [bump]`
1. Detects the new version number for the package
1. Updates the Atom `package.json` with the new version number
1. Executes a `git commit -m ":arrow_up: package-name@x.y.z"` in the Atom source repository

## Copyright

Copyright &copy; 2016 by [Lee Dohm](http://www.lee-dohm.com). See [LICENSE](https://raw.githubusercontent.com/lee-dohm/atom-update-package/master/LICENSE.md) for details.
