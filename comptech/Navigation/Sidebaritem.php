<?php

namespace Comptech\Navigation;

use Illuminate\Support\Collection;

class Sidebaritem
{

	protected $icon = NULL;
	protected $caption = NULL;
	protected $options = NULL;
	protected $component = NULL;

	public function __construct()
	{
		$this->options = new Collection();
	}

	public function setIcon($icon)
	{
		$this->icon = $icon;
		return $this;
	}

	public function setCaption($caption)
	{
		$this->caption = $caption;
		return $this;
	}

	public function setComponent($component)
	{
		$this->component = $component;
		return $this;
	}

	public function add(Sidebaritemoption $item)
	{
		$this->options->push($item);
		return $this;
	}

	public function toArray()
	{
		return [
			'icon' => $this->icon,
			'caption' => $this->caption,
			'component' => $this->component,
			'options' => $this->options->map( function($option){ 
				return $option->toArray();
			})
		];
	}

}

/**
<li class="active treeview">
          <a href="#">
            <i class="fa fa-dashboard"></i> <span>Dashboard</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li class="active"><a href="index.html"><i class="fa fa-circle-o"></i> Dashboard v1</a></li>
            <li><a href="index2.html"><i class="fa fa-circle-o"></i> Dashboard v2</a></li>
          </ul>
        </li>