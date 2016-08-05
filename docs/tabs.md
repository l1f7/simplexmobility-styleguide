---
layout: page
title: Tabs
---

Avatars are images that users can set as their profile picture. On GitHub, they're always going to be rounded squares. They can be custom photos, uploaded by users, or generated as Identicons as a placeholder.


## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}


## Basic example

Add `.avatar` to any `<img>` element to make it an avatar. This resets some key styles for alignment, address a Firefox image placeholder bug, and rounds the corners.

Be sure to set `width` and `height` attributes for maximum browser performance.

{% example html %}
<!-- Nav tabs -->
<ul class="nav nav-tabs" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" data-toggle="tab" href="#tab1" role="tab">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" href="#tab2" role="tab">Profile</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" href="#tab3" role="tab">Messages</a>
  </li>
</ul>

<!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane active" id="tab1" role="tabpanel">
    <div class="container container-scale">
      <div class="row">
        <div class="col-md-4">.col-md-4</div>
        <div class="col-md-4">.col-md-4</div>
        <div class="col-md-4">.col-md-4</div>
      </div>
    </div>
  </div>
  <div class="tab-pane" id="tab2" role="tabpanel">
    <div class="container container-scale">
      <div class="row">
        <div class="col-md-4">.col-md-4</div>
        <div class="col-md-4">.col-md-4</div>
        <div class="col-md-4">.col-md-4</div>
      </div>
    </div>
  </div>
  <div class="tab-pane" id="tab3" role="tabpanel">
    <div class="container container-scale">
      <div class="row">
        <div class="col-md-4">.col-md-4</div>
        <div class="col-md-4">.col-md-4</div>
        <div class="col-md-4">.col-md-4</div>
      </div>
    </div>
  </div>
</div>
{% endexample %}


## Tabs with sub-titles

We occasionally use smaller avatars. Anything less than `48px` wide should include the `.avatar-small` modifier class to reset the `border-radius` to a more appropriate level.

{% example html %}
<img class="avatar avatar-small" src="https://avatars3.githubusercontent.com/u/9919?v=3&s=64" width="32" height="32">
{% endexample %}
