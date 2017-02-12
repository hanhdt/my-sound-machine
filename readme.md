# **Sound Machine App for the Electron Learning**

## I followed this guide - https://medium.com/developers-writing/building-a-desktop-application-with-electron-204203eeb658

## Here is features list and concepts the app is going to explore are:
 - Basic sound machine (basic browser window instantiation). 
 - Closing the sound machine (remote messages between main and renderer process). 
 - Playing sounds without having the application in focus (global keyboard shortcuts). 
 - Creating a settings screen for shortcut modifier keys (Shift, Ctrl and Alt) (storing user settings in home folder). 
 - Adding a tray icon (remotely creating native GUI elements and getting to know menus and tray icon). 
 - Packaging your application (packaging your application for Mac, Windows and Linux).

## Modifications:
 - Update using electron libs and pump version up-to-date.
 - Adding an icon app for main window.
 - I also add and setup some more debug tools for Electron development such as Devtron and electron-debug.
 - And modify to my own code style.

## Todo interested features:
 - A help screen with info about the app, its shortcuts and author.
 - Adding a menu entry to open the info screen.
 - Build a nice packaging script for faster builds and distribution.
 - Add notifications using node-notifier to let users know which sound they're playing.
 - Use lodash utilities to a greater extent for a cleaner code base (iterating through arrays).
 - Minify all CSS and Javascript with a build tool before packaging.
 - Combine the aforementioned node-notifier with a server call to check for new versions of the app and notify users.
 - **Nice challenge**: Try extracting the app browser windows logic and using something like browserify to create a web page with the same sound machine just created. One code base - two products (desktop app and web app). 