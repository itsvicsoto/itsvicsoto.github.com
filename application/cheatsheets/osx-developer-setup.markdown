---
layout: cheatsheet
---

# Installation

#### Install Brew

``` bash
# http://brew.sh
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# https://github.com/caskroom/homebrew-cask
$ brew install caskroom/cask/brew-cask
# Try it : $ brew cask install google-chrome

```

#### Terminal Setup OSX

``` bash
# Install ZSH OH-MY-ZSH
# http://ohmyz.sh
$ curl -L https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh | sh

# Optional : Plugins ZSH
# Go To .zshrc and find plugin line
# plugins=(git ruby golang django scala gem history history-substring-search terminalapp brew nanoc)

# Optional : Theme ~/.zshrc
# ZSH_THEME="amuse"
```

###### Optional : Install Solarized Theme for Terminal

1. Open up [Ethanschoonover's Amazing Solarized Theme](http://ethanschoonover.com/solarized) and [download the latest version](http://ethanschoonover.com/solarized/files/solarized.zip)
2. Look for the osx-terminal.app-colors-solarized and click the theme (dark/light) you want.
3. Make sure to make it default.

#### Install GIT

``` bash
# Install GIT
$ brew install git
```

#### Install SublimeText 3

``` bash

# Brew Install
$ brew cash install sublime-text 

# Package Manager - https://packagecontrol.io/installation
$ import urllib.request,os,hashlib; h = 'eb2297e1a458f27d836c04bb0cbaf282' + 'd0e7a3098092775ccb37ca9d6b2e4b7d'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
```

#### Install Developer Stuffs

``` bash
# pre-requisite install X-Code Tools
####################################

# Install NodejS
$ brew install node
$ brew cask install java
$ brew install maven

# Install Nodejs Global Package
$ npm install -g forever
$ npm install -g grunt-cli
$ npm install -g nodemon
$ npm install -g less
$ npm install -g coffee-script
$ npm install -g shelljs

# Update Gems
$ sudo gem update --system

# Sass
$ sudo gem install sass

# Compass
$ sudo gem install compass

# JekyllRb
$ sudo gem install jekyll

```