<?php

namespace Comptech\Navigation;

use Illuminate\Support\Collection;

class Sidebar
{

	protected $title = '';
	protected $items = NULL;
	protected $current = NULL;
	protected $userpanel = false;
	protected $searchform = false;

	public function __construct()
	{
		$this->items = new Collection();
	}

	public function setTitle($title)
	{
		$this->title = $title;
		return $this;
	}

	public function setUserPanel($flag)
	{
		$this->userpanel = $flag;
		return $this;
	}

	public function setSearchForm($flag)
	{
		$this->searchform = $flag;
		return $this;
	}

	public function add($id, Sidebaritem $item)
	{
		$this->items->put($id, $item);
		return $this;
	}

	/*
	 | Set the initial option (item and option)
	 */
	public function setCurrentOption($option)
	{
		$this->current = $option;
		return $this;
	}

	public function toArray()
	{
		return [

			'title' => $this->title,
			'current' => $this->current,
			'userpanel' => $this->userpanel,
			'searchform' => $this->searchform,
			'items' => $this->items->map( function($item){ 
				return $item->toArray();
			})
		];
	}
}