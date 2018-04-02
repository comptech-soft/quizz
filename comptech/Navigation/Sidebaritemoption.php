<?php

namespace Comptech\Navigation;

use Illuminate\Support\Collection;

class Sidebaritemoption
{

	protected $href = NULL;
	protected $icon = NULL;
	protected $caption = NULL;
	protected $component = NULL;

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

	public function setUrl($href)
	{
		$this->href = $href;
		return $this;
	}

	public function setComponent($component)
	{
		$this->component = $component;
		return $this;
	}

	public function toArray()
	{
		return [
			'icon' => $this->icon,
			'caption' => $this->caption,
			'href' => $this->href,
			'component' => $this->component,
		];
	}

}
