class ICheck
{
	constructor(selector)
	{
		this.selector = selector;
	}

	create()
	{
		return $(this.selector).iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue',
            increaseArea: '20%',
        })
	}

}

export default ICheck;