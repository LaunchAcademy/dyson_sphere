# DysonSphere

This engine contains all the base stylings for internal Launch Academy apps, as well as a styleguide to help guide future development.

### Table of Contents

1. [General Set-Up](#set-up)
2. [Styleguide](#styleguide)
  a. [Viewing the Styleguide](#viewing-the-styleguide)
  b. [Styling apps that use DysonSphere](#styling-apps-that-use-dysonsphere)
  c. [Updating the Styleguide](#updatingtthe-styleguide)
3. [Analytics](#analytics)
4. [Troubleshooting](#troubleshooting)

# Set Up

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

Update the DysonSphere Readme to include your new LA app as one of the apps that pulls from DysonSphere.

If you want your app to reference a local version of DysonSphere instead of the Github repo, comment out the above line in your Gemfile and instead put:

```
gem 'dyson_sphere',  
  # git: 'https://github.com/LaunchAcademy/dyson_sphere'
  path: "~/path/to/local/dyson_sphere"
```

# Styleguide

## Viewing the Styleguide

Once you've set up DysonSphere in a local app, run `rails s` from that app's director and visit `http://localhost:3000/styleguide` to view the styleguide!

The styleguide contains useful information on color/font variables that are accessible, helper classes that are available, and code samples for creating commonly-used elements like white panels and headers.

## Styling apps that use DysonSphere

When styling apps that use DysonSphere, chances are that you'll need simultaneously make changes to DysonSphere and your own app. Any styles that are app-specific should be written in the stylesheets for that specific app. Any styles that are applicable to common elements used between apps should be added to DysonSphere.

As an example, these are some things you would want to put into DysonSphere:  
- Updates to header styles
- New/different font or color variables
- Styling on all forms, or commonly used forms
- New helper classes that should be usable between apps

Here are some things you would want to put into your app:
- Horizon "Lesson" styling
- LaunchPass "Product Offer Rating" styling

During your development, make sure to use the styleguide to find useful existing helper classes and constants.

Once you have updated both DysonSphere and the other app with new styles, do the following:
- Make sure the DysonSphere changes look okay on other apps
- Update the Styleguide with any DysonSphere changes (see below)
- Increment the DysonSphere version (at `lib/dyson_sphere/version.rb`)
- Make a PR for DysonSphere
- Get the DysonSphere PR merged
- Change the DysonSphere gem path in your current app to reference the Github repo
- Run `bundle update dyson_sphere` on all apps that use DysonSphere styles (**including** the one you're currently working on) so they all reference the most recent version of DysonSphere, and make commits for all apps
- *Only then* should you make a PR with your most recent work on the current app!

## Updating the Styleguide

The styleguide is maintained through comments in a particular format at the top of each scss file. The HTML provided there gets compiled into static pages when you run `hologram` on the command line from your DysonSphere directory.

For any changes you make to a stylesheet, please make sure these are reflected in the styleguide. Follow the examples at the top of existing files to see how to format this. After making changes to the HTML at the top of a `scss` file, run `hologram` from the command line to compile these changes into the static HTML pages.

If you want a styleguide page to show rendered HTML and then the code used to generate it, use this syntax:

```
```html_example
  <your html here>
*put three closing backticks here* (markdown is making my life difficult)
```

If you make a new scss file, just copy the format for comments from another page. The "category" field will dictate which page of the styleguide this chunk of HTML is placed on. If you use an existing category, it will be added to that page; if you make a new category, it will create a new page.

For help with displaying variables in our static HTML, you can use `styleguide.scss` to define classes that will only be used in the styleguide. Copy the examples there and in `_colors.scss` or `_fonts.scss` to see how to consistently dispay new font/color variables.

# Analytics

To set up analytics in your app that uses DysonSphere, add the following JS to your layout file:

```javascript
$(function(){
  window.Analytics.setUser(#{serialized_user.to_json});
  window.Analytics.init({
    gaToken: '#{ENV["GOOGLE_ANALYTICS_TOKEN"]}',
    mxToken: '#{ENV["MIXPANEL_TOKEN"]}',
    intercomAppId: '#{ENV["INTERCOM_TOKEN"]}'
  });
});
```

Then make sure that you have the helper method `serialized_user` defined in your `ApplicationController`. If you don't have users signing in as part of your app, you can just add the following code:

```ruby
helper_method :serialized_user

def serialized_user
  nil
end
```

If you do have users and guests, like Horizon does, use the following code (copied from Horizon):

```ruby
helper_method :serialized_user

def serialized_user
  if !current_user.guest?
    SmallUserSerializer.new(current_user,
      root: false)
  else
    nil
  end
end
```

If you wish to set cross domain tracking for google anlaytics add the following
call to your layout file JS (before calling `window.Analytics.init`):

```javascript
$(function(){
  window.Analytics.setOtherDomains(<your domains here, separate strings in an array>);
});
```

Last of all, make sure you have ENV values set for `GOOGLE_ANALYTICS_TOKEN`, `MIXPANEL_TOKEN`, and `INTERCOM_TOKEN`.

# Troubleshooting

#### My new DysonSphere changes aren't showing up in the app I'm working on.

If your new DysonSphere changes are not showing up in your parent application, run `rake assets:clobber` from your application's command line to remove all cached styles.

#### When I try to visit `localhost:3000/styleguide`, I get an error: `undefined local variable or method 'root_path'`

Restart your server and visit the page again. Not sure why this works, but it's fixed the problem so far!

#### I'm getting the error `Invalid CSS after "...ules: $modules ": expected "}", was "!global;"`

This is a problem when using certain versions of Sass in your parent app (`4.0.3` has caused this problem for me before). Update your Sass gem to a more recent version (on your parent app) and the problem should go away. ([Relevant Github issue](https://github.com/zurb/foundation/issues/5811))
