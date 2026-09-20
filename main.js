name: Build Windows Desktop App

on:
  workflow_dispatch:
  push:
    branches: [ main, master ]

jobs:
  build-windows:
    runs-on: windows-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm install

      - name: Build Windows application
        run: npm run desktop:dist

      - name: Upload Windows artifacts
        uses: actions/upload-artifact@v4
        with:
          name: trenazher-pervoy-pomoschi-windows
          path: dist-desktop/*
          if-no-files-found: error
