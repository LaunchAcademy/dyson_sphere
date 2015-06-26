# DysonSphere

This engine contains all the base stylings for internal Launch Academy apps, as well as a styleguide to help guide future development.

## Set Up

Add the following to your Gemfile:

```
gem 'dyson_sphere', git: 'https://github.com/LaunchAcademy/dyson_sphere'
```

Add the following to `config/routes.rb`:

```
mount DysonSphere::Engine, at: "/"
```

Add the following to `app/assets/javascripts/application.js`:

```
//= require dyson_sphere/application
```

Add the following to the **top** of `app/assets/stylesheets/application.scss`:

```
@import "dyson_sphere/application";
```

If you want your app to reference a local version of DysonSphere instead of the Github repo, comment out the above line in your Gemfile and instead put:

```
gem 'dyson_sphere',  path: "~/path/to/local/dyson_sphere"
```

## Viewing the Styleguide

Once you've set up DysonSphere in a local app, run `rails s` from that app's director and visit `http://localhost:3000/styleguide` to view the styleguide!

The styleguide contains useful information on color/font variables that are accessible, helper classes that are available, and code samples for creating commonly-used elements like white panels and headers.

## Using the styleguide in your own development of LA apps

When doing style work on existing LA apps that use DysonSphere, any styles that are app-specific should be written in the stylesheets for that specific app. Any styles that are applicable to common elements used between apps should be added to DysonSphere.

As an example, these are some things you would want to put into DysonSphere:  
- Updates to header styles
- New/different font or color variables
- Styling on all forms, or commonly used forms

Here are some things you would want to put into your app:
- Horizon "Lesson" styling
- LaunchPass "Product Offer Rating" styling

Once you have updated both DysonSphere and the other app with new styles, do the following:
- Make sure the DysonSphere changes look okay on other apps
- Update the Styleguide with any DysonSphere changes (see below)
- Make a PR for both DysonSphere and the other app
- Make sure the DysonSphere PR gets merged first!

## Updating the Styleguide

The styleguide is maintained through comments in a particular format at the top of each scss file. The HTML provided there gets compiled into static pages when you run `hologram` on the command line from your DysonSphere directory.

If you add new classes or variables to DysonSphere, please make sure to update the styleguide HTML on the page where you wrote the styles, then run `hologram`. If you want a page to show rendered HTML and then the code used to generate it, use this syntax:

```
```html_example
  <your html here>
``````
```

If you make a new scss file, just copy the format for comments from another page. The "category" field will dictate which page of the styleguide this chunk of HTML is placed on. If you use an existing category, it will be added to that page; if you make a new category, it will create a new page.

For help with displaying variables in our static HTML, you can use `styleguide.scss` to define classes that will only be used in the styleguide. Copy the examples there and in `_colors.scss` or `_fonts.scss` to see how to consistently dispay new font/color variables.
