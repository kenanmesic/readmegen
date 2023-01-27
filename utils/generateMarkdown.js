// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return "this is teh return from render liscense link"
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(obj) {
  return `This is my story
today at ${obj.time} the weather was ${obj.weather}
    this is render liscence ${renderLicenseLink()}
SDF
    
SDF
    
SDF
    
SDF
SDF`
}

module.exports = generateMarkdown;
