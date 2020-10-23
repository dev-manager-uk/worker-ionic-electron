# 1. Install node_modules

yarn

# 2. build app

yarn build:dev

# Problem

Check last line of electron/electron.js.

This should automatically trigger the worker (from node), but it cannot find the module.

When click the Play icon (from Ionic in src/app/tab1), the worker is correctly started.

# Why is the module not found from node??