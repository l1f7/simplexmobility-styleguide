---
layout: page
title: Spinners
---

Carbon’s layout uses Bootstrap’s grid system—a responsive, mobile first fluid grid system that appropriately scales up to 12 columns as the device or viewport size increases.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Container

Center your page's contents with a `.container`.

{% highlight html %}
<div class="container">
  <!-- contents here -->
</div>
{% endhighlight %}

Note that, due to `padding` and more, neither container is nestable.

## Grid

### How it works

The grid is pretty standard—you create rows with `.row` and individual columns with a column class and fraction class. Here's how it works:

- Rows must be placed within a `.container` (fixed-width) or `.container-fluid` (full-width) for proper alignment and padding.
- Use rows to create horizontal groups of columns.
- Content should be placed within columns, and _only columns_ may be immediate children of rows.
- Predefined grid classes like `.row` and `.col-xs-4` are available for quickly making grid layouts.

<div class="c-docs-callout c-docs-callout-info">
  <h4>Separation of concerns</h4>
  <p>Grid components work solo. Avoid confusion and potential breakage by not adding row or column classes to other components or elements.</p>
</div>

### Demo: Stacked-to-horizontal

Using a single set of `.col-md-*` grid classes, you can create a basic grid system that starts out stacked on mobile devices and tablet devices (the extra small to small range) before becoming horizontal on desktop (medium) devices. Place grid columns in any `.row`.

{% example html %}
<div class="container">
  <div class="row">
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
  </div>
  <div class="row">
    <div class="col-md-8">.col-md-8</div>
    <div class="col-md-4">.col-md-4</div>
  </div>
  <div class="row">
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-4">.col-md-4</div>
  </div>
  <div class="row">
    <div class="col-md-6">.col-md-6</div>
    <div class="col-md-6">.col-md-6</div>
  </div>
</div>
{% endexample %}

### Demo: Mobile and desktop

Don’t want your columns to simply stack in smaller devices? Use the extra small and medium device grid classes by adding `.col-xs-*` `.col-md-*` to your columns. See the example below for a better idea of how it all works.

{% example html %}
<div class="container">
  <!-- Stack the columns on mobile by making one full-width and the other half-width -->
  <div class="row">
    <div class="col-xs-12 col-md-8">.col-xs-12 .col-md-8</div>
    <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
  </div>

  <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
  <div class="row">
    <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
    <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
    <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
  </div>

  <!-- Columns are always 50% wide, on mobile and desktop -->
  <div class="row">
    <div class="col-xs-6">.col-xs-6</div>
    <div class="col-xs-6">.col-xs-6</div>
  </div>
</div>
{% endexample %}

### Nesting columns

To nest your content with the default grid, **add a new `.row`** and set of `.col-sm-*` columns within an existing `.col-sm-*` column. Nested rows should include a set of columns that add up to 12 or fewer (it is not required that you use all 12 available columns).

{% example html %}
<div class="container">
  <div class="row">
    <div class="col-sm-9">
      Level 1: .col-sm-9
      <div class="row">
        <div class="col-xs-8 col-sm-6">
          Level 2: .col-xs-8 .col-sm-6
        </div>
        <div class="col-xs-4 col-sm-6">
          Level 2: .col-xs-4 .col-sm-6
        </div>
      </div>
    </div>
  </div>
</div>
{% endexample %}
