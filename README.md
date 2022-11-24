# css-grid-image-gallery-boilderplate

 An express web app that dynamically generates css grid image galleries.
 
 ### What dose it mean?
 This is an express app that serves html web pages that contain image galleries using the grid system in css.
 Inside the app theres a config file that you can set up your own personal galleries with, the app reads the config file and uses EJS to inject the content inside the web page.
 
 ### Why would I want to use this?
 As the title says this is supposed to be used as boilerplate code, and for a very specific purpose none the less. You can take the css for the image grid for your own project,
 or maybe the express app code to loop over an image directory and get all the path names for injecting inside an html page.
 
 You could even use it as it is to host an image gallery of your liking on a server like I did originally to host pictures from a trip I took with my friends.
 
 ## How to use?
 
Clone the repo.
```
git clone https|ssh
```

Install the node modules and dependencies.
```
npm install
```


Add image folders inside the '''/public''' directory and start modifying the ```config.js``` file.
<br></br>
Set the port the app will listen to.
```
const port = yourPort
```
Set the website title (will be used in the header for the title tag and appear in the navbar as the name of the website).
```
const websiteTitle = yourTitle
```

Set your image folder paths and the name that should appear in the navbar for each of them.
The ```tabName:``` represents how to gallery would be called in the navbar of the website,
and the ```path:``` represents the path to the folder where the images are located.
```
const tabs = [
  { tabName: 'firstImageFolder', path: 'pathToFolder'},
  { tabName: 'firstImageFolder', path: 'pathToFolder'},
  { tabName: 'firstImageFolder', path: 'pathToFolder'}
]
```

If you want to store your image folders in a different place than the ```/public``` directory you need to add the following line inside the ```app.js``` file.
```
app.use(express.static(__dirname + '/yourCustomDirectory'))
```
### If you want to host the app on a server.
This is a greate [guide on how to deploy NodeJS apps](https://gist.github.com/bradtraversy/cd90d1ed3c462fe3bddd11bf8953a896).

