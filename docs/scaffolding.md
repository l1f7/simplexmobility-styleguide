---
layout: page
title: Scaffolding
---

Scaffolding refers to the global resets and dependencies that Carbon is built upon.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## HTML5 doctype

Carbon makes use of certain HTML elements and CSS properties that **require** the use of the HTML5 doctype. Include it at the beginning of all your pages.

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
  ...
</html>
{% endhighlight %}

## Box-sizing

We reset `box-sizing` to `border-box` for every element in Carbon. This allows us to more easily assign widths to elements that also have `padding` and `border`s.

## Built on Bootstrap

Bootstrap’s [Official Sass port](http://getbootstrap.com/css/#sass) that is.
