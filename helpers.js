var handlebars = require('gulp-compile-handlebars');

var handlebarsHelpers = {
    styles: function (arr) {
        var str = '';
        arr.forEach(function(css) {
            str += '<link href="' + css.url + '" rel="stylesheet" type="text/css" />';
        });
        return new handlebars.Handlebars.SafeString(str);
    },
    scripts: function(arr) {
        var str = '';
        arr.forEach(function(js) {
            str += '<script src="' + js.url + '" type="text/javascript"></script>';
        });
        return new handlebars.Handlebars.SafeString(str);
    },
    modules: function(arr) {
        var str = '';
        arr.forEach(function(module) {
            str +=  str += '<link href="' + module.name + '" rel="stylesheet" type="text/css" />';
            str +=  str += '<link href="' + module.name + '.medium.css" rel="stylesheet" type="text/css" />';
            str +=  str += '<link href="' + module.name + '.large.css" rel="stylesheet" type="text/css" />';
        });
        return new handlebars.Handlebars.SafeString(str);
    },
    moduleScripts: function(arr) {
        var str = '';
        arr.forEach(function(js) {
            str += '<script src="js/' + js.name + '.js" type="text/javascript"></script>';
        });
        return new handlebars.Handlebars.SafeString(str);
    }
};

module.exports = handlebarsHelpers;