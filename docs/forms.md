---
layout: page
title: Forms
---

Style individual form controls and utilize common layouts.


## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}


## Overview

- We reset several elements' default styles for cross browser consistency and easier manipulation later. This includes `<fieldset>`s, WebKit validation bubbles, and most textual `<input>`s.
- Specific types of textual `<input>`s are styled automatically, but `.form-control` is available should you need it.
- Always declare a `type` on your `<button>`s.
- Form layouts rely on form groups.


## Example form

Form controls in Primer currently have no basic layout specified (this is by design). You'll need to use `<fieldset>`s, `<div>`s, or other elements and styles to rearrange them.

{% example html %}
<form>
  <div class="form-group">
    <label for="name">Name</label>
    <input class="form-control" id="name" type="text" aria-describedby="helpBlock">
    <span class="help-block" id="helpBlock">First name &amp; Last name</span>
  </div>

  <div class="form-group">
    <label for="email">Email address</label>
    <input class="form-control" type="email" id="email">
  </div>

  <div class="checkbox">
    <label>
      <input type="checkbox"> Remember me
    </label>
  </div>

  <div class="form-group">
    <label class="radio-inline">
      <input type="radio" id="herp" name="herpderp" checked> Herp
    </label>
    <label class="radio-inline">
      <input type="radio" id="derp" name="herpderp"> Derp
    </label>
  </div>

  <button class="btn btn-default" type="submit">Submit</button>
</form>
{% endexample %}


## Selects

Primer adds light `height` and `vertical-align` styles to `<select>`s for all browsers to render them consistently with textual inputs.

{% example html %}
<form>
  <select class="form-control">
    <option>Choose an option</option>
    <option>Git</option>
    <option>Subversion</option>
    <option>Social Coding</option>
    <option>Beets</option>
    <option>Bears</option>
    <option>Battlestar Galactica</option>
  </select>
</form>
{% endexample %}


## Form groups

{% example html %}
<form>
  <dl class="form-group">
    <dt><label>Example Text</label></dt>
    <dd><input class="form-control" type="text" value="Example Value"></dd>
  </dl>

  <dl class="form-group">
    <dt><label>Example Select</label></dt>
    <dd>
      <select class="form-control">
        <option>Choose an option</option>
        <option>Git</option>
        <option>Subversion</option>
        <option>Social Coding</option>
        <option>Beets</option>
        <option>Bears</option>
        <option>Battlestar Galactica</option>
      </select>
    </dd>
  </dl>

  <dl class="form-group">
    <dt><label>Example Textarea</label></dt>
    <dd>
      <textarea class="form-control"></textarea>
    </dd>
  </dl>
</form>
{% endexample %}

{% example html %}
<form class="form-inline">
  <div class="form-group">
    <label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>
    <div class="input-group">
      <div class="input-group-addon">$</div>
      <input type="text" class="form-control" id="exampleInputAmount" placeholder="Amount">
      <div class="input-group-addon">.00</div>
    </div>
  </div>
  <button type="submit" class="btn btn-lg btn-primary">Transfer cash</button>
</form>

<form>
  <div class="input-group">
    <input type="text" class="form-control" placeholder="Search for...">
    <span class="input-group-btn">
      <button class="btn btn-secondary" type="button">Go!</button>
    </span>
  </div>
</form>
{% endexample %}


## Form group validation

Convey errors and warnings for form groups. Add the appropriate class—either `.errored` or `.warn`—to the `<dl class="form-group">` to start. Then, house your error messaging in an additional `<dd>` with either `.error` or `.warning`.

{% example html %}
<form>
  <dl class="form-group errored">
    <dt><label>Example Text</label></dt>
    <dd><input class="form-control" type="text" value="Example Value"></dd>
    <dd class="error">This example input has an error.</dd>
  </dl>
  <br>
  <dl class="form-group warn">
    <dt><label>Example Text</label></dt>
    <dd><input class="form-control" type="text" value="Example Value"></dd>
    <dd class="warning">This example input has a warning.</dd>
  </dl>
</form>
{% endexample %}


## Checkboxes and radios

Utilities to spice up the alignment and styling of checkbox and radio controls.

{% example html %}
<form>
  <div class="form-checkbox">
    <label>
      <input type="checkbox" checked="checked">
      Available for hire
    </label>
    <p class="note">
      This will do insanely <strong>awesome</strong> and <strong>amazing</strong> things!
    </p>
  </div>
</form>
{% endexample %}

You may also add emphasis to the label:

{% example html %}
<form>
  <div class="form-checkbox">
    <label>
      <input type="checkbox" checked="checked">
      <em class="highlight">Available for hire</em>
    </label>
  </div>
</form>
{% endexample %}


## Input group

Attached an input and button to one another.

{% example html %}
<form>
  <div class="input-group">
    <input class="form-control" type="text" placeholder="Username">
    <span class="input-group-button">
      <button class="btn">
        <span class="octicon octicon-clippy"></span>
      </button>
    </span>
  </div>
</form>
{% endexample %}


## Form actions

Align buttons to the right—via `float: right` on the buttons—in forms with `.form-actions`. The floats are automatically cleared for you.

{% example html %}
<div class="form-actions">
  <button type="button" class="btn btn-primary">Save changes</button>
  <button type="button" class="btn">Cancel</button>
</div>
{% endexample %}
