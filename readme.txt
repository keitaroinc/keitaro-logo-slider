=== Logo Slider by Keitaro ===
Contributors:      Goce Mitevski
Tags:              block
Requires at least: 5.3.2
Tested up to:      5.4.1
Stable tag:        0.2.0
Requires PHP:      7.0.0
License:           Apache-2.0
License URI:       https://www.apache.org/licenses/LICENSE-2.0

Easy to use logo slider for your WordPress website.

== Description ==

Create simple logo sliders to show important brands or companies associated with your business, partners which support you. You can also have any kind of other image groups shown in a carousel. Logo images can be added through the Media library as a gallery or uploaded as new assets. The number of carousel slides can be configured and with it, the number of logos per slide.

= Slider Options =

Slider Options include settings for the slider transition and an option for toggling the visibility of the slider title. Also the user can select a global unit for sizing of the elements within the slider.

Toggling Show Title expands additional Title Options.

= Title Options =

Title Options include the following settings:

- **Padding** - Uses global unit for setting the overall padding of the title container
- **Top Position** - Uses global unit for setting the top position of the title container, which can also be a negative value
- **Blur Background** - Toggle for blurring the background of the slider title when background color is translucent
- **Blur Size** - Uses global unit for setting the amount of backdrop blur of the title container

= Logo Options =

Logo Options includes settings for the **size of the logo images** and the amount of **logos per slide**. The maximum number of logos per slide is defined by the number of logos included in the slider.

= Color Options =

Color Options includes two additional setting - one for the **background color of the slider** container and another one for the **color of the slider arrows**.

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/keitaro-logo-slider` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress

== Development ==

Development environment setup is based on the [official guide](https://developer.wordpress.org/block-editor/getting-started/devenv/) from the WordPress [Block Editor Handbook](https://developer.wordpress.org/block-editor/).

Start `wp-env` by running `wp-env start` to start the development environment. Please follow the on-screen instructions for accessing the local WordPress instance.

Once `wp-env` is started run `npm start` to start the development server for the block.

When preparing a PR, please build and commit all assets from `/build` by running `npm run build` instead of `npm start` - so we get production-ready code in the main codebase.

== Changelog ==

= 0.1.1 =
* Implement Edit mode integrated with Media library

= 0.1.0 =
* Initial release

== To do ==

* Include Bootstrap assets within plugin
* Support image replacement with MediaReplaceFlow
* Make visual design configurable
