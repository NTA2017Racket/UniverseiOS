# UniverseIOS

![Demo](https://github.com/NTA2017Racket/UniverseIOS/raw/master/demo/Demo.gif)

### How to build the app:  
```bash
# First install brew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew update
brew upgrade

# Now install nodejs
brew install nodejs

# Because it is a react-native app, we need react-native
npm install react-native-cli -g

# The next thing to do is: Go clone this repo and move into it with cd
# Install dependencies with npm
npm install

# Because I didn't uploaded the ios folder, you need to create it
react-native eject

# Link all native dependencies
react-native link

# You are ready, go into the ios folder and open the xcode project and build the app.
```

[Original Repo on Github](https://github.com/NTA2017Racket/UniverseIOS)

Background source: [link](http://maxpixel.freegreatpicture.com/Cosmos-Universe-Galaxy-Space-Tree-Background-1721695)