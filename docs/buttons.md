---
layout: page
title: Buttons
---

Buttons are used for **actions**, like in forms, while textual hyperlinks are used for **destinations**, or moving from one page to another.


## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}


## Default buttons

Use the standard—yet classy—`.btn` for form actions and primary page actions. These are used extensively around the site.

When using a `<button>` element, **always specify a `type`**. When using a `<a>` element, **always add `role="button"` for accessibility**.

{% example html %}
<a class="btn btn-default" href="#" role="button">Link</a>
<button class="btn btn-default" type="submit">Button</button>
<input class="btn btn-default" type="button" value="Input">
<input class="btn btn-default" type="submit" value="Submit">
{% endexample %}


## Variants

{% example html %}
<button type="button" class="btn btn-default">Default</button>

<button type="button" class="btn btn-primary">Primary</button>

<button type="button" class="btn btn-success">Success</button>

<button type="button" class="btn btn-info">Info</button>

<button type="button" class="btn btn-warning">Warning</button>

<button type="button" class="btn btn-danger">Danger</button>

<button type="button" class="btn btn-link">Link</button>
{% endexample %}

<div class="c-docs-callout c-docs-callout-info">
  <h4>Conveying meaning to assistive technologies</h4>
  <p>Using color to add meaning to a button only provides a visual indication, which will not be conveyed to users of assistive technologies—such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (the visible text of the button), or is included through alternative means, such as additional text hidden with the <code>.sr-only</code> class.</p>
</div>

### Primary
Primary buttons are used to indicate the *primary* action on a page. When you need your buttons to stand out, use `.btn.btn-primary`. You can use it with both button sizes—just add `.btn-primary`.

Primary buttons should be selected carefully, with no more than one per section (ideally only one per page, although the primary page action can also be indicated by button size).

### Danger
Danger buttons are red. They help reiterate that the intended action is important or potentially dangerous (e.g., deleting a repo or transferring ownership). Similar to the primary buttons, just add `.btn-danger`.


## Sizes

You can find them in two sizes: the default `.btn` and the larger `.btn-lg`.

{% example html %}
<p>
  <button type="button" class="btn btn-primary">Normal button</button>
  <button type="button" class="btn btn-default">Normal button</button>
</p>
<p>
  <button type="button" class="btn btn-primary btn-lg">Large button</button>
  <button type="button" class="btn btn-default btn-lg">Large button</button>
</p>
{% endexample %}

Create block-level buttons—those that span the full width of a parent—by adding `.btn-block`.

{% example html %}
<button type="button" class="btn btn-primary btn-block">Block level button</button>
<button type="button" class="btn btn-default btn-lg btn-block">Block level button</button>
{% endexample %}


## Disabled state

Disable `<button>` elements with the boolean `disabled` attribute and `<a>` elements with the `.disabled` class.

{% example html %}
<button class="btn" type="button" disabled>Disabled button</button>
<a class="btn disabled" href="#" role="button">Disabled button</a>
{% endexample %}

{% example html %}
<button class="btn btn-primary" type="button" disabled>Disabled button</button>
<a class="btn btn-primary disabled" href="#" role="button">Disabled button</a>
{% endexample %}

{% example html %}
<button class="btn btn-danger" type="button" disabled>Disabled button</button>
<a class="btn btn-danger disabled" href="#" role="button">Disabled button</a>
{% endexample %}

## With counts

You can also use the [badge](http://getbootstrap.com/components/#badges) component within buttons:

{% example html %}
<button class="btn btn-default" type="button">
  Button
  <span class="badge">12</span>
</button>

<button class="btn btn-primary" type="button">
  Button
  <span class="badge">12</span>
</button>

<button class="btn btn-danger" type="button">
  Button
  <span class="badge">12</span>
</button>
{% endexample %}

<div class="c-docs-callout c-docs-callout-info">
  <h4>Note about badges</h4>
  <p>When there are no new or unread items, badges will simply collapse (via CSS’s <code>:empty</code> selector) provided no content exists within.</p>
</div>

## With icons

{% example html %}
<button class="btn btn-primary" type="button">
  <i class="fa fa-check-circle-o" aria-hidden="true"></i>
  Button
</button>

<button class="btn btn-danger" type="button">
  <i class="fa fa-ban" aria-hidden="true"></i>
  Button
</button>
{% endexample %}


## Primary Action buttons

In order to clearly indicate the primary action for the user, use this button style (in conjunction with an appropriate icon from FontAwesome). Use this style sparingly, once per section, ideally only once per page/screen.

{% example html %}
<button class="btn btn-default btn-action" type="button">
  Button
  <span class="btn-icon" aria-hidden="true">
    <i class="fa fa-fw fa-arrow-right"></i>
  </span>
</button>

<button class="btn btn-primary btn-action" type="button">
  Button
  <span class="btn-icon" aria-hidden="true">
    <i class="fa fa-fw fa-refresh"></i>
  </span>
</button>
{% endexample %}


<!--
## Button groups

Have a hankering for a series of buttons that are attached to one another? Wrap them in a `.btn-group` and the buttons will be rounded and spaced automatically.

{% example html %}
<div class="btn-group">
  <button class="btn" type="button">Button</button>
  <button class="btn" type="button">Button</button>
  <button class="btn" type="button">Button</button>
</div>

<div class="btn-group">
  <button class="btn btn-outline" type="button">Button</button>
  <button class="btn btn-outline" type="button">Button</button>
  <button class="btn btn-outline" type="button">Button</button>
</div>

<div class="btn-group">
  <button class="btn btn-lg" type="button">Button</button>
  <button class="btn btn-lg" type="button">Button</button>
  <button class="btn btn-lg" type="button">Button</button>
</div>
{% endexample %}

Add `.btn-group-form` to `<form>`s within `.btn-group`s for proper spacing and rounded corners.

{% example html %}
<div class="btn-group">
  <form class="btn-group-form">
    <button class="btn" type="button">Button in a form</button>
  </form>
  <button class="btn" type="button">Button</button>
  <button class="btn" type="button">Button</button>
</div>
{% endexample %}
-->


<!--
## Hidden text button

Use `.hidden-text-expander` to indicate and toggle hidden text.

{% example html %}
<span class="hidden-text-expander">
  <button type="button" class="ellipsis-expander">&hellip;</button>
</span>
{% endexample %}

You can also make the expander appear inline by adding `.inline`. -->
