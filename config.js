// from here you can set up the whole application without messing with the code.


// set port nodejs will listen to.
const port = 8080

// set website title
const websiteTitle = 'My gallery'

// array of tab objects, each tab contains a name (displayed in the navbar),
// and the name of a folder with images that you want to be displayed (need to be located in the public folder)
const tabs = [
    { tabName: 'sample1', path: '/sample1'},
    { tabName: 'sample2', path: '/sample2'},
    { tabName: 'sample3', path: '/sample3'},
    { tabName: 'sample4', path: '/sample4'},
]

// exports the module
exports.port = port
exports.websiteTitle = websiteTitle
exports.tabs = tabs