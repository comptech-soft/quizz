export default function(Validator)
{

	Validator.extend('truthy', {
	    
	    getMessage: (field, params, data) => {
	        return 'The ' + field + ' value is not truthy.';
	    },

	    validate: (value, params) => {
	        return !!value;
	    }
	});

	Validator.extend('equal', {
	    
	    getMessage: (field, params, data) => {
	        return 'Please specify valid field';
	    },

	    validate: (value, params) => {
	        return value === $('#' + params[0]).val();
	    }
	});

	Validator.extend('unique', {
	    
	    getMessage: (field, params, data) => {
	        return 'The field ' + field + ' is already used';
	    },

	    validate: (value, params) => {

	    	if( ! (value == undefined) && value )
	    	{
		        return Requests.post('validation', {
		            rule: 'unique',
		            table: params[0],
		            field: params[1],
		            id: params.length == 3 ? params[2] : null,
		            value: value, 
		        })
		        .then( r => { 
		        	return r.data; 
		        })
		        .catch( e => { 
		        	return {
		        		valid: false
		        	}; 
		        })
		    }
		    return true;
	    }
	});

	Validator.extend('pro6pp', {
	    
	    getMessage: (field, params, data) => {
	        return 'Please specify valid postalcode (four digits and two letters, for example: 5611BJ)';
	    },

	    validate: (value, params) => {
	        
	        if( value == undefined )
	        {
	        	return true;
	        }

	        if( value.length != 6)
	        {
	        	console.log('(' + value + ') Invalid length');
	        	return false;
	        }
	        let code = _.parseInt(value.substr(0, 4));
	        if( (code < 1000 ) || (code > 9999) )
	        {
	        	console.log('(' + code + ') Invalid code');
	        	return false;
	        }
	        let letters = value.substr(4, 2);
	        if( ! /^[a-zA-Z]+$/.test(letters) )
	        {
	        	console.log('(' + letters + ') Invalid letters');
	        	return false;
	        }
	        return true;
	    }
	});

	/**
	 * Dutch (NL) phone numbers have 10 digits (or 11 and start with +31).
	 */
	Validator.extend('nlphone', {
	    
	    getMessage: (field, params, data) => {
	        return 'Please specify valid phone number';
	    },

	    validate: (value, params) => {
	    	if(/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(value))
	    	{
	    		return true;
	    	}
	    	if(/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(value))
	    	{
	    		return true;
	    	}
	    	return false;
	    }
	});

	Validator.extend('nltaxno', {
	    
	    getMessage: (field, params, data) => {
	        return 'Please specify valid BTW Nummer';
	    },

	    validate: (value, params) => {
	    	return true;
	    }
	});

	Validator.extend('nlcoc', {
	    
	    getMessage: (field, params, data) => {
	        return 'Please specify valid KvK';
	    },

	    validate: (value, params) => {
	    	return true;
	    }
	});

	Validator.extend('bic', {
	    
	    getMessage: (field, params, data) => {
	        return 'Please specify valid BIC';
	    },

	    validate: (value, params) => {
	    	if(/([a-zA-Z]{4}[a-zA-Z]{2}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?)/.test(value))
	    	{
	    		return true;
	    	}
	    	return false;
	    }
	});

	Validator.extend('iban', {
	    
	    getMessage: (field, params, data) => {
	        return 'Please specify valid IBAN';
	    },

	    validate: (value, params) => {
	    	
	    	if (!(/^([a-zA-Z0-9]{4} ){2,8}[a-zA-Z0-9]{1,4}|[a-zA-Z0-9]{12,34}$/.test(value))) 
	    	{
				return false;
			}

			// check the country code and find the country specific format
			let iban = value.replace(/ /g,'').toUpperCase(); // remove spaces and to upper case
			let countrycode = iban.substring(0,2);
			let bbancountrypatterns = {
				'AL': "\\d{8}[\\dA-Z]{16}",
				'AD': "\\d{8}[\\dA-Z]{12}",
				'AT': "\\d{16}",
				'AZ': "[\\dA-Z]{4}\\d{20}",
				'BE': "\\d{12}",
				'BH': "[A-Z]{4}[\\dA-Z]{14}",
				'BA': "\\d{16}",
				'BR': "\\d{23}[A-Z][\\dA-Z]",
				'BG': "[A-Z]{4}\\d{6}[\\dA-Z]{8}",
				'CR': "\\d{17}",
				'HR': "\\d{17}",
				'CY': "\\d{8}[\\dA-Z]{16}",
				'CZ': "\\d{20}",
				'DK': "\\d{14}",
				'DO': "[A-Z]{4}\\d{20}",
				'EE': "\\d{16}",
				'FO': "\\d{14}",
				'FI': "\\d{14}",
				'FR': "\\d{10}[\\dA-Z]{11}\\d{2}",
				'GE': "[\\dA-Z]{2}\\d{16}",
				'DE': "\\d{18}",
				'GI': "[A-Z]{4}[\\dA-Z]{15}",
				'GR': "\\d{7}[\\dA-Z]{16}",
				'GL': "\\d{14}",
				'GT': "[\\dA-Z]{4}[\\dA-Z]{20}",
				'HU': "\\d{24}",
				'IS': "\\d{22}",
				'IE': "[\\dA-Z]{4}\\d{14}",
				'IL': "\\d{19}",
				'IT': "[A-Z]\\d{10}[\\dA-Z]{12}",
				'KZ': "\\d{3}[\\dA-Z]{13}",
				'KW': "[A-Z]{4}[\\dA-Z]{22}",
				'LV': "[A-Z]{4}[\\dA-Z]{13}",
				'LB': "\\d{4}[\\dA-Z]{20}",
				'LI': "\\d{5}[\\dA-Z]{12}",
				'LT': "\\d{16}",
				'LU': "\\d{3}[\\dA-Z]{13}",
				'MK': "\\d{3}[\\dA-Z]{10}\\d{2}",
				'MT': "[A-Z]{4}\\d{5}[\\dA-Z]{18}",
				'MR': "\\d{23}",
				'MU': "[A-Z]{4}\\d{19}[A-Z]{3}",
				'MC': "\\d{10}[\\dA-Z]{11}\\d{2}",
				'MD': "[\\dA-Z]{2}\\d{18}",
				'ME': "\\d{18}",
				'NL': "[A-Z]{4}\\d{10}",
				'NO': "\\d{11}",
				'PK': "[\\dA-Z]{4}\\d{16}",
				'PS': "[\\dA-Z]{4}\\d{21}",
				'PL': "\\d{24}",
				'PT': "\\d{21}",
				'RO': "[A-Z]{4}[\\dA-Z]{16}",
				'SM': "[A-Z]\\d{10}[\\dA-Z]{12}",
				'SA': "\\d{2}[\\dA-Z]{18}",
				'RS': "\\d{18}",
				'SK': "\\d{20}",
				'SI': "\\d{15}",
				'ES': "\\d{20}",
				'SE': "\\d{20}",
				'CH': "\\d{5}[\\dA-Z]{12}",
				'TN': "\\d{20}",
				'TR': "\\d{5}[\\dA-Z]{17}",
				'AE': "\\d{3}\\d{16}",
				'GB': "[A-Z]{4}\\d{14}",
				'VG': "[\\dA-Z]{4}\\d{16}"
			};
			let bbanpattern = bbancountrypatterns[countrycode];
			if (typeof bbanpattern !== 'undefined') 
			{
				let ibanregexp = new RegExp("^[A-Z]{2}\\d{2}" + bbanpattern + "$", "");
				if (!(ibanregexp.test(iban))) 
				{
					return false; // invalid country specific format
				}
			}
			// now check the checksum, first convert to digits
			let ibancheck = iban.substring(4,iban.length) + iban.substring(0,4);
			let ibancheckdigits = "";
			let leadingZeroes = true;
			let charAt;
			for (let i =0; i<ibancheck.length; i++) 
			{
				charAt = ibancheck.charAt(i);
				if (charAt !== "0") 
				{
					leadingZeroes = false;
				}
				if (!leadingZeroes) 
				{
					ibancheckdigits += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(charAt);
				}
			}
			// calculate the result of: ibancheckdigits % 97
			let cRest = '';
			let cOperator = '';
			for (let p=0; p<ibancheckdigits.length; p++) 
			{
				let cChar = ibancheckdigits.charAt(p);
				cOperator = '' + cRest + '' + cChar;
				cRest = cOperator % 97;
			}
			return cRest === 1;
	    }
	});

}