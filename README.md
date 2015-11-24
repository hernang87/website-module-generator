# website-module-generator
A small generator made for simple HTML modularized websites using Gulp and Handlebars.

## How to use it?
Under the src directory there are two types of modules:
* Pages 
* Partials

Pages are the ones that the end user will browse and they consist of a context.json file that has the content for each module that will eventually compile into the page.

### How to build a page
In this example, the page has two modules, header and footer. The context.json file contains all the content that will be injected, separated by partial.

* context.json
```
{
	"header": {
		"title": "I am a title on a partial"
	},
	"footer": {
		"text": "I am a footer on a partial as well!" 
	}
}
```

* index.hbs

```
{{> header}}
{{> footer}}
````

Where header and footer are in the partials directory and have they're own html structure.

The end result will be stored in the dist directory with the filename and html extension

```
<h1>I am a title on a partial</h1>
<footer>
	<p>I am a footer on a partial as well!</p>
</footer>
```

The header partial:
```
{{#header}}
	<h1>{{title}}</h1>
{{/header}}
```

The footer partial:
```
{{#footer}}
	<p>{{text}}</p>
{{/footer}}
```

It's important to consider that each partial has a wrapper block that is the same as the one specified on the context.json file.

### How to build

Before building you need to run ```npm install``` to get all the dependencies, it's also important to have compass installed to build the SASS files.

To install compass:

```
gem install compass
```

After all the dependencies are installed Gulp needs to be run. By default it builds everything and keeps watching for changes. In case you only want to build the handlebars files you should run ```gulp build:hbs```








