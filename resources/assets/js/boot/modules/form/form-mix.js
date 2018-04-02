import Form from './Form.js'

export default 
{

	props: 
    {
        /*
        | Form Rules: Object Or Function
        */
        rules: {required: true},
        
        /*
        | Endponintul care salveaza datele
        */
        endpoint: {type: String, required:true}
    },

    data() 
    {
        return {
        	form: null,
        }
    },

    computed:
    {
        ready()
        {
            return (this.form != null)
        },

        errors()
        {
            return this.form.getErrors();
        },

        response()
        {
            return this.form.getResponse();
        },

        submiting()
        {
            if( this.form == null )
            {
                return false;
            }
            return this.form.getSubmiting();
        },

        visible()
        {
            if( this.response == null )
            {
                return true;
            }
            if( this.response.type != 'success')
            {
                return true;
            }
            return false;
        }
    },

	methods:
	{
		onKeydown(e)
        {
            this.form.removeError(e.target.id);
        },

        setResponse(response)
        {
            if( this.form == null)
            {
                return null;
            }
            this.form.setResponse(response);
        }
	},

	mounted()
    {
        this.form = new Form()
            .setFields(this.fields)
            .setEndpoint(this.endpoint)
            .setRules(this.rules)
        ; 
    },

}
