export default 
{

	props:
    {

        /*
        | The name and id
        */
        field: {type: String, required: true },
        
        /*
        | The list of validation errors; Vee Validate ErrorBag instance
        */
        errors: {type: Object, default: () => {return null} }
    },

    computed:
    {

        control_class()
        {
            let result = {
                'form-group': true,
                'has-feedback': false,
            }
            if(this.has_error)
            {
                result['has-error'] = true;
            }
            return result;
        },

        has_error()
        {
            if( this.errors == null )
            {
                return false;
            }
            return this.errors.has(this.field)
        },

        render_errors()
        {
            if( this.has_error )
            {
                return this.errors.collect(this.field).toString();
            }
            return null;
        },
    }
}