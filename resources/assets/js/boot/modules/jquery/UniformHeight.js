class UniformHeight
{
	constructor(selector)
	{
		this.selector = selector;
	}

	uniform()
	{
		let max = 0;
        $(this.selector).each( function(i){
            if($(this).height() > max)
            {
                max = $(this).height();
            }
        })
        $(this.selector).height(max);
	}

}

export default UniformHeight;