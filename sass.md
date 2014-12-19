---
layout: page
title: Sass
permalink: /code/sass/
---

* This will become a table of contents (this text will be ignored)
{:toc}

Color
-------------

{% highlight css %}

rgba($color, $alpha)               /* Convert a hex color into a RGBa one */
red($color)                        /* Gets the red component */
green($color)                      /* Gets the green component */
blue($color)                       /* Gets the blue component */
mix($color-1, $color-2, [$weight]) /* Mixes 2 colors together with a default weight of 50% */

hue($color)                         /* Gets the hue component */
saturation($color)                  /* Gets the saturation component */
lightness($color)                   /* Gets the lightness component */
adjust-hue($color, $degrees)        /* Rotates the hue wheel */
lighten($color, $percentage)        /* Makes lighter */
darken($color, $percentage)         /* Makes darker */
saturate($color, $percentage)       /* Makes more saturated */
desaturate($color, $percentage)     /* Makes less saturated */

grayscale($color)                   /* Converts to grayscale */
complement($color)                  /* Returns the complement */
invert($color)                      /* Returns the inverse */

alpha($color)                       /* Gets the alpha component (opacity) */
opacity($color)                     /* Gets the alpha component (opacity) */
opacify($color, $percentage)        /* Makes more opaque */
fade-in($color, $percentage)        /* Makes more opaque */
transparentize($color, $percentage) /* Makes more transparent */
fade-out($color, $percentage)       /* Makes more transparent */

{% endhighlight %}