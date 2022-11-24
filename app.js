const express = require('express')
const fs = require('fs')
const path = require('path')
const config = require('./config')

const app = express()
const port = config.port;

// this array will store objects, each with a name property and an images property.
// the name property will store a string with the name of the gallery,
// while the images will store an array of html lines of images that will be injected into the html page using ejs.
let imagesFinal = []

// go over each tab in the tabs array that we get from teh config file.
config.tabs.forEach(tab => {

  // get folder path.
  let folderPath = __dirname + '/public' +  tab.path

  // make an array containig all the absolute paths of the images inside the folder.
  // this is not utilized here but can be useful for other things that i may add in the future.
  let images = fs.readdirSync(folderPath).map(fileName => {
      return path.join(folderPath, fileName)
  })

  // temp array for pushing in the imagesFinal array.
  let image_arr = []

  // loop over each image and randomly assign an image class (image, image-tall, image-wide, image-big).
  images.forEach(image => {
    let rnd = Math.floor(Math.random() * 10)
    let className = 'image '
    if (rnd > 2) {
      image_arr.push('<div style="background-image: url(..' + tab.path + '/' + path.basename(image) + ')" class="' + className + '"></div>')
    } else if (rnd == 2) {
      className += 'image-wide'
      image_arr.push('<div style="background-image: url(..' + tab.path + '/' + path.basename(image) + ')" class="' + className + '"></div>')
    } else if (rnd == 1) {
      className += 'image-tall'
      image_arr.push('<div style="background-image: url(..' + tab.path + '/' + path.basename(image) + ')" class="' + className + '"></div>')
    } else if (rnd == 0) {
      className += 'image-big'
      image_arr.push('<div style="background-image: url(..' + tab.path + '/' + path.basename(image) + ')" class="' + className + '"></div>')
    }   
  })
// push inside the imagesFinal array a object containing the gallery name and the images array.
imagesFinal.push({ name: tab.tabName, images: image_arr})
})


// set view engine to ejs.
app.set('view engine', 'ejs')

//u se url encoding for get and post reqeuests.
app.use(express.urlencoded({ extended: true }))

// serve static files from public.
app.use(express.static(__dirname + '/public'))

// serve the index as a gallery of the first imagesFinal array.
app.get('/', (req, res) => {
  let gallery = imagesFinal[0].images
  res.render('gallery', { imagesFinal: imagesFinal, title: config.websiteTitle, gallery: gallery })
})

// serve images of a specific gallery.
app.get('/:gallery', (req, res) => {
  let gallery = imagesFinal.find(tab => tab.name == req.params.gallery).images
  res.render('gallery', { imagesFinal: imagesFinal, title: config.websiteTitle, gallery: gallery })
})

// start listening for the port.
app.listen(port, () => {
  console.log(`listening on port ${port}.....`)
})