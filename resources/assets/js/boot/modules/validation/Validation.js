import ro from 'vee-validate/dist/locale/ro';
import de from 'vee-validate/dist/locale/de';

import {Validator} from 'vee-validate'
import VeeExtender from './VeeExtender.js';

VeeExtender(Validator);

class Validation
{

	constructor(rules, locale)
    {
        let files = {
            'ro': ro,
            'de': de,
        }
        if( (locale != undefined) &&  (locale != 'en') )
        {
            Validator.localize(locale, files[locale]);
        }
        this.validator = new Validator(rules);
    }

    validate(data)
    {
        return this.validator.validateAll(data);
    }

    /*
    | return Promise
    */
    validateField(field, value)
    {
        return this.validator.validate(field, value);
    }

    getErrors()
    {
        return this.validator.errors;
    }

    removeError(field)
    {
        return this.validator.errors.remove(field);
    }

    removeErrors()
    {
        return this.validator.errors.clear();
    }

}

export default Validation;