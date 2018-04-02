export default {

	debug(object, title)
    {
        console.log('+---[ ' + title + ' ] ----')
        _.each(object, (item, key) => {
            console.log('| ' + key + ' := "' + item + '"');
        })
        console.log('+-----------------------------------------------------------')
    },

	is(value)
	{
		return _.isString(value)
	},
	
	/*
	| Replace all occurence
	*/
	replace(string, pattern, replacement)
	{
		return string.split(pattern).join(replacement);
	},

	/*
	|
	*/
	join(array, separator = '')
	{
		return _.join(array, separator)
	},

	capitalize(string)
	{
		return _.capitalize(string);
	},

	humanSize(bytes) 
    {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
        if (bytes === 0)
        {
            return '0 Bytes';
        }
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
        if (i === 0)
        {
            return `${bytes} ${sizes[i]})`
        }
        return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`
    },

	random(length) 
	{
    	let chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    	let pass = "";
    	for (let x = 0; x < length; x++) 
    	{
        	let i = Math.floor(Math.random() * chars.length);
        	pass += chars.charAt(i);
    	}
    	return pass;
	},

	humanCurrency(currency)
	{
		if(currency == null)
		{
			currency = 0;
		}
		return '&euro; ' + currency.toFixed(2).replace('.', ',')
	}

}