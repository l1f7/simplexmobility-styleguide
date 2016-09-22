---
layout: page
title: Tables
---


{% example html %}
<section class="data">
  <header class="data-header">
    <div class="data-title">May 2016 Billing Cycle</div>
    <div class="data-actions">
      <button class="btn btn-default btn-action" type="button">
        View less
        <span class="btn-icon" aria-hidden="true">
          <i class="fa fa-fw fa-arrow-up"></i>
        </span>
      </button>
    </div>
  </header>
  <div class="container container-scale">
    <div class="row">
      <div class="col-md-4">.col-md-4</div>
      <div class="col-md-4">.col-md-4</div>
      <div class="col-md-4">.col-md-4</div>
    </div>
  </div>
</section>

<section class="data">
  <header class="data-header">
    <div class="data-tabs">
      <ul class="nav nav-pills">
        <li class="nav-item active">
          <a class="nav-link" href="#">Monthly Charges</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Data Charges</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Roaming Charges</a>
        </li>
      </ul>
    </div>
    <div class="data-actions"></div>
  </header>
  <div class="container container-scale">
    <div class="row">
      <div class="col-md-4">1/7</div>
      <div class="col-md-4">1/7</div>
      <div class="col-md-4">1/7</div>
      <div class="col-md-4">1/7</div>
      <div class="col-md-4">1/7</div>
      <div class="col-md-4">1/7</div>
      <div class="col-md-4">1/7</div>
    </div>
  </div>
</section>

<section class="data">
  <header class="data-header">
    <div class="data-tabs">
      <ul class="nav nav-pills">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Earlier <span class="caret"></span></a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#">Data Charges</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Roaming Charges</a>
        </li>
      </ul>
    </div>
    <div class="data-actions"></div>
  </header>
  <table class="table table-striped table-condensed">
    <thead>
      <tr>
        <th>Account</th>
        <th>Devices</th>
        <th>Avg Device Cost</th>
        <th>Monthly Cost</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Telus</td>
        <td>65</td>
        <td>$95.55</td>
        <td>$1,595.55</td>
      </tr>
      <tr>
        <td>Telus</td>
        <td>65</td>
        <td>$95.55</td>
        <td>$1,595.55</td>
      </tr>
    </tbody>
  </table>
</section>
{% endexample %}

### Tooltips No Delay

By default the tooltips have a slight delay before appearing. This is to keep multiple tooltips in the UI from being distracting. There is a modifier class you can use to override this. `.tooltipped-no-delay`

{% example html %}
<span class="tooltipped tooltipped-n tooltipped-no-delay border p-2" aria-label="This is the tooltip.">
  Tooltip no delay
</span>
{% endexample %}
