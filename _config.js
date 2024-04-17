var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://maisiba:<password>@gallery.cwo3c4s.mongodb.net/?retryWrites=true&w=majority&appName=gallery',
    development: 'mongodb+srv://maisiba:<password>@gallery.cwo3c4s.mongodb.net/?retryWrites=true&w=majority&appName=gallery',
    test: 'mongodb+srv://maisiba:<password>@gallery.cwo3c4s.mongodb.net/?retryWrites=true&w=majority&appName=gallery',
}
module.exports = config;
