# Psswrd [![Build Status](https://travis-ci.org/toddmotto/psswrd.png)](https://travis-ci.org/toddmotto/psswrd)

Show/hide toggling for password inputs. Psswrd is a super simple JavaScript drop in that allows the user to toggle their password before submitting the form. This saves the user typing in their password a second time which aims to enhance the experience. Psswrd is 1KB minified and an [Immediate-Invoked-Data-Expression](http://toddmotto.com/iide-immediate-invoked-data-expressions-data-init-and-using-html5-to-call-your-javascript/jquery/) (IIDE).

## Demo
Check out a [demo of Psswrd](http://toddmotto.com/labs/psswrd).

## Installing with Bower
To install Psswrd into your project using Bower, use the GitHub repository hook:

```
bower install https://github.com/toddmotto/psswrd.git
```

## Manual installation
Drop your files into your required folders, make sure you're using the file(s) from the `dist` folder, which is the compiled production-ready code. Ensure you place the script before the closing `</body>` tag so the DOM tree is populated when the script runs.
	
```html
<body>
	<!-- html content above -->
	<script src="dist/psswrd.js"></script>
</body>
```

## Scaffolding
Project files and folder structure.

```
├── dist/
│   ├── psswrd.js
│   └── psswrd.min.js
├── src/
│   └── psswrd.js
├── .editorconfig
├── .gitignore
├── .jshintrc
├── .travis.yml
├── Gruntfile.js
└── package.json
```

## Configuring Psswrd
Psswrd self-initiates when you tell it to, it doesn't need calling like a regular plugin, it just watches for the `data-init-psswrd` attribute and will fire when ready. Configuring only takes a minute as it's been built with ease in mind.

You'll probably have a form on your page, so you'll need to `init` the plugin on it (though the init is limited to any element):

```html
<form action="/" method="post" data-init-psswrd>

</form>
```

Then inside that, you'll want to tell it what input fields to watch:

```html
<input type="password" data-psswrd-toggle>
```

That's it.

The structure of your form, however, is advised to be as follows to allow for optimal styling and structure:

```html
<form action="/" method="post" data-init-psswrd>
	<label>
		Username:
		<input type="text">
	</label>
	<label>
		Password:
		<input type="password" data-psswrd-toggle>
	</label>
	<button type="submit">Submit</button>
</form>
```

The above uses the `&lt;label&gt;` element to provide a container for when the checkbox input and toggle text are appended inside. Psswrd takes care of the rest of things and your form will look like this:

```html
<form action="/" method="post" data-init-psswrd>
	<label>
		Username:
		<input type="text">
	</label>
	<label>
		Password:
		<input type="password" data-psswrd-toggle>
		<input type="checkbox" data-psswrd-checkbox>
		<div class="data-psswrd-text" data-psswrd-text>Show password</div>
	</label>
	<button type="submit">Submit</button>
</form>
```

## License
MIT license