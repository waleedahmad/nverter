## nverter

![alt text](https://i.imgur.com/EsH3k9S.png)

##### System Requirements

Just node.js. On Mac and Windows, every else is installed automatically. However on Linux, you must install HandbrakeCLI manually with these commands:

```
sudo add-apt-repository --yes ppa:stebbins/handbrake-releases
sudo apt-get update -qq
sudo apt-get install -qq handbrake-cli
```

##### Setup Instructions

```
# Install dependencies
$ npm install 

# Configure Web Server port
$ nano config/default.json

{
  "port" : 3000
}

# Building frontend code
$ npm run watch

$ Running Web Server
$ npm run dev-server
```