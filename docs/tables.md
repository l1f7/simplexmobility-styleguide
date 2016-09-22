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
      <div class="col-scale">.col-scale</div>
      <div class="col-scale">.col-scale</div>
      <div class="col-scale">.col-scale</div>
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
      <div class="col-scale">1/7</div>
      <div class="col-scale">1/7</div>
      <div class="col-scale">1/7</div>
      <div class="col-scale">1/7</div>
      <div class="col-scale">1/7</div>
      <div class="col-scale">1/7</div>
      <div class="col-scale">1/7</div>
    </div>
  </div>
</section>

<section class="data">
  <header class="data-header">
    <div class="data-title">May 2016 Stats</div>
    <div class="data-actions"></div>
  </header>
  <div class="container container-scale">
    <div class="row">
      <div class="col-scale text-center">
        <span class="text-title">Active</span>
        <div class="stat stat-single">
          <span class="stat-main text-success">45</span>
          <span class="stat-secondary">55%</span>
        </div>
        <a class="btn btn-default btn-action" href="#">
          View More
          <span class="btn-icon" aria-hidden="true">
            <i class="fa fa-fw fa-plus"></i>
          </span>
        </a>
      </div>
      <div class="col-scale text-center">
        <span class="text-title">Active</span>
        <div class="stat stat-single">
          <span class="stat-main text-warning">20</span>
          <span class="stat-secondary">100%</span>
        </div>
        <a class="btn btn-default btn-action" href="#">
          View More
          <span class="btn-icon" aria-hidden="true">
            <i class="fa fa-fw fa-plus"></i>
          </span>
        </a>
      </div>
      <div class="col-scale text-center">
        <span class="text-title">Active</span>
        <div class="stat stat-single">
          <div class="spin spin-sm spin-warning"></div>
        </div>
        <a class="btn btn-default btn-action" href="#">
          View More
          <span class="btn-icon" aria-hidden="true">
            <i class="fa fa-fw fa-plus"></i>
          </span>
        </a>
      </div>
      <div class="col-scale text-center">
        <span class="text-title">Active</span>
        <div class="stat stat-single">
          <span class="stat-main text-danger">0</span>
          <span class="stat-secondary"></span>
        </div>
        <a class="btn btn-default btn-action" href="#">
          View More
          <span class="btn-icon" aria-hidden="true">
            <i class="fa fa-fw fa-plus"></i>
          </span>
        </a>
      </div>
      <div class="col-scale text-center">
        <span class="text-title">Active</span>
        <div class="stat stat-single">
          <span class="stat-main text-info">0</span>
          <span class="stat-secondary"></span>
        </div>
        <a class="btn btn-default btn-action" href="#">
          View More
          <span class="btn-icon" aria-hidden="true">
            <i class="fa fa-fw fa-plus"></i>
          </span>
        </a>
      </div>
      <div class="col-scale text-center">
        <span class="text-title">Active</span>
        <div class="stat stat-single">
          <span class="stat-main text-danger">5</span>
          <span class="stat-secondary"></span>
        </div>
        <a class="btn btn-default btn-action" href="#">
          View More
          <span class="btn-icon" aria-hidden="true">
            <i class="fa fa-fw fa-plus"></i>
          </span>
        </a>
      </div>
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
          <a class="nav-link" href="#">Data Charges <span class="badge">20</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Roaming Charges <span class="badge">0</span></a>
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

<section class="data">
  <header class="data-header">
    <div class="data-title">Device Overview</div>
    <div class="data-actions"></div>
  </header>
  <div class="container container-scale">
    <div class="row">
      <div class="col-scale">
        <div class="row">
          <div class="col-md-6">
            Active <span class="badge badge-success">45</span>
          </div>
          <div class="col-md-6">
            Cancelled <span class="badge badge-danger">0</span>
          </div>
          <div class="col-md-6">
            Suspended <span class="badge badge-warning">20</span>
          </div>
          <div class="col-md-6">
            With Billing <span class="badge badge-primary">1</span>
          </div>
        </div>
      </div>
      <div class="col-scale">
        <div class="row">
          <div class="col-md-12">
            <span class="text-title">Monthly Cost <span class="text-success">$1,412</span></span>
          </div>
          <div class="col-md-12">
            <span class="text-title">Average Cost <span class="text-success">$82</span></span>
          </div>
        </div>
      </div>
      <div class="col-scale">
        <div class="row">
          <div class="col-md-4">
            Aircard <span class="badge">2</span>
          </div>
          <div class="col-md-4">
            Android <span class="badge">5</span>
          </div>
          <div class="col-md-4">
            Blackberry <span class="badge">2</span>
          </div>
          <div class="col-md-4">
            Cell phone <span class="badge">22</span>
          </div>
          <div class="col-md-4">
            HUB <span class="badge">2</span>
          </div>
          <div class="col-md-4">
            iPhone <span class="badge">40</span>
          </div>
          <div class="col-md-4">
            Mike <span class="badge">2</span>
          </div>
          <div class="col-md-4">
            Modem <span class="badge">22</span>
          </div>
          <div class="col-md-4">
            Tablet <span class="badge">40</span>
          </div>
          <div class="col-md-4">
            Anrdoid <span class="badge">5</span>
          </div>
          <div class="col-md-4">
            Cell phone <span class="badge">22</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <header class="data-header">
    <div class="data-title">Device List</div>
    <div class="data-actions"></div>
  </header>
  <div class="table-responsive">
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
  </div>
</section>
{% endexample %}

### Tooltips No Delay

By default the tooltips have a slight delay before appearing. This is to keep multiple tooltips in the UI from being distracting. There is a modifier class you can use to override this. `.tooltipped-no-delay`

{% example html %}
<span class="tooltipped tooltipped-n tooltipped-no-delay border p-2" aria-label="This is the tooltip.">
  Tooltip no delay
</span>
{% endexample %}
