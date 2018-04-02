import Validation from './../validation/Validation.js';

class Form
{

	constructor()
	{
		this.setSubmiting(false);
        this.response = null;
	}

	setSubmiting(flag)
	{
		this.submiting = flag;
        return this;
	}

    getSubmiting()
    {
        return this.submiting;
    }

	setFields(fields)
	{
		this.fields = fields;
		return this;
	}

	setRules(rules)
	{
		this.rules = rules;
		this.validator = new Validation(rules);
		return this;
	}

	setEndpoint(endpoint)
	{
		this.endpoint = endpoint;
		return this;
	}

	validate()
    {
        return this.validator.validate(this.fields);
    }

    validateField(field, value)
    {
        return this.validator.validateField(field, value);
    }

    getErrors()
    {
        return this.validator.getErrors();
    }

    removeError(field)
    {
    	return this.validator.removeError(field);
    }

    removeErrors()
    {
    	return this.validator.removeErrors();
    }

	onClickSubmit(onSuccess = (r) => {},  config = null)
    {

        if( ! this.submiting )
        {
            let number_of_arguments = arguments.length;

            this.submit_result = null;

            if(0)
            {
                Strings.debug(this.rules, 'Rules');
                Strings.debug(this.fields, 'Fields');
            }

            if( (config == null) || (config.action != 'delete') )
            {
                this.validate().then( valid => {
                    if(valid) 
                    {
                        let submit = this.submit();
                        if( number_of_arguments >= 1)
                        {
                            submit.then(r => onSuccess(r))
                        }
                    }
                    else
                    {
                        console.log('Validation Errors....');
                    }

                })
            }
            else
            {
                let submit = this.submit();
                submit.then(r => onSuccess(r));
            }
        }
    }

    submit()
    {
    	this.removeErrors();
        this.setSubmiting(true);

        /*
         | Make the request
         */
    	let _this = this;
    	return new Promise( (resolve, reject) => {

            try
            {
                Requests
                    .post(this.endpoint, this.fields)
                    .then(r => {

                        if( r.data.hasOwnProperty('notification') )
                        {
                            _this.setResponse(r.data.notification);
                        }
                        resolve(r.data);
                        this.setSubmiting(false);
                       
                    })
                    .catch(error => {

                        if(error.response)
                        {
                            /*
                            | The request was made and the server responded 
                            | with a status code that falls out of the range of 2xx
                            */
                            // _this.errorsManager.set(error.response.data);
                        } 
                        else
                        {
                            if(error.request) 
                            {
                                /*
                                | The request was made but no response was received
                                | `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                                | http.ClientRequest in node.js
                                */
                                console.log('Cazul 2', error.request, error.config);
                            } 
                            else 
                            {
                                /*
                                | Something happened in setting up the request that triggered an Error
                                */
                                console.log('Cazul 3', error.message, error.config);
                            }
                        }
                       
                        reject(error);

                        this.setSubmiting(false);
                    })
            }
            catch(e)
            {
                console.log(' == Runtime Error ==');
                console.log(e);
                this.setSubmiting(false);
            }
    	});
    }

    getResponse()
    {
        return this.response;
    }

    setResponse(response)
    {
        this.response = response;
        return this;
    }
}

export default Form;