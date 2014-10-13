BarcodeMonsters
===============

BarcodeMonsters project for Tesco Hackathon September 2014


npm install && bower install

cordova plugin add https://github.com/wildabeast/BarcodeScanner.git

cordova plugin add org.apache.cordova.media

Install Process for Mac
=======================

* Install NodeJS.
Easiest method is to install using Homebrew [http://brew.sh/]
$ brew install node

* Install Android Studio
https://developer.android.com/sdk/installing/studio.html

* Set Path to tools and platform tools

$ nano ~/.bash_profile

* Add the following lines to the bash profile:

export PATH="$PATH:/Applications/Android Studio.app/sdk/platform-tools:/Applications/Android Studio.app/sdk/tools"

Reload bash profile
. ~/.bash_profile

* Install Cordova & Ionic Framework
npm install -g cordova ionic


* Hop into you app folder
$ cd awesomeapp

* Add android platform to your application
$ ionic platform add android

* Build the application
$ ionic build android


