---
layout: page
title: Alerts
---

Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages. Use them sparingly&mdash;don't show more than one at a time.


## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}


## Examples

Wrap any text and an optional dismiss button in `.alert` and one of the four contextual classes (eg, `.alert-success`) for basic alert messages.

{% example html %}
<div class="alert alert-success" role="alert">
  <h4><i class="fa fa-check" aria-hidden="true"></i> Success Message Title</h4>
</div>
<div class="alert alert-info" role="alert">
  <h4><i class="fa fa-info-circle" aria-hidden="true"></i> Info Message Title</h4>
</div>
<div class="alert alert-warning" role="alert">
  <h4><i class="fa fa-warning" aria-hidden="true"></i> Warning Message Title</h4>
</div>
<div class="alert alert-danger" role="alert">
  <h4><i class="fa fa-times" aria-hidden="true"></i> Error Message Title</h4>
</div>
{% endexample %}

<div class="c-docs-callout c-docs-callout-info">
  <h4>No default class</h4>
  <p>Alerts don't have default classes, only base and modifier classes. A default gray alert doesn't make too much sense, so you're required to specify a type via contextual class. Choose from success, info, warning, or danger.</p>
</div>

If you need to be more verbose in your messaging, just add a paragraph after the heading. Use the `.alert-link` utility class to quickly provide matching colored links within any alert.

{% example html %}
<div class="alert alert-success" role="alert">
  <h4><i class="fa fa-check" aria-hidden="true"></i> Success Message Title</h4>
  <p>This is an example of a success message, it can be short or long, and <a class="alert-link" href="#">contain links</a>.</p>
</div>
<div class="alert alert-info" role="alert">
  <h4><i class="fa fa-info-circle" aria-hidden="true"></i> Info Message Title</h4>
  <p>This is an example of a info message, it can be short or long, and <a class="alert-link" href="#">contain links</a>.</p>
</div>
<div class="alert alert-warning" role="alert">
  <h4><i class="fa fa-warning" aria-hidden="true"></i> Warning Message Title</h4>
  <p>This is an example of a warning message, it can be short or long, and <a class="alert-link" href="#">contain links</a>.</p>
</div>
<div class="alert alert-danger" role="alert">
  <h4><i class="fa fa-times" aria-hidden="true"></i> Error Message Title</h4>
  <p>This is an example of a danger message, it can be short or long, and <a class="alert-link" href="#">contain links</a>.</p>
</div>
{% endexample %}


## Dismissable

Build on any alert by adding an optional `.alert-dismissible` and close button.

{% example html %}
<div class="alert alert-info alert-dismissable" role="alert">
  <button class="close" type="button" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <h4><i class="fa fa-check" aria-hidden="true"></i> Success Message Title</h4>
  <p>This is an example of a info message, it can be short or long, and <a class="alert-link" href="#">contain links</a>.</p>
</div>
{% endexample %}
