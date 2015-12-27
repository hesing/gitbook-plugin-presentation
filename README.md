Adding presentation to gitbook
==============================

### 1. You can use install it via **NPM** and save it to package.json:
```
$ npm install gitbook-plugin-presentation --save
```
### 2. add the plugin entry `presentation` to `book.json` config like below 

```javascript
// book.json
{
	"gitbook": "2.6.6",
	"title": "My Awesome Book",
	"description": "This is such a great book!",
	"isbn": "978-3-16-148410-0",
	"language": "en",
	"plugins": ["addcssjs", "jsbin", "expandable-chapters", "presentation"],
    "pluginsConfig": {
        "addcssjs": {
            "css": ["css/bootstrap.css", "css/main.css"]
        }
    }
}
```

## Publish/Unpublish npm package

```
// create a directory with package.json inside it
npm publish
// to unpublish
npm unpublish gitbook-plugin-presentation@0.0.12
```
