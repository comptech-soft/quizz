export default 
{
   	props:
	{
		question: {required: true},
        action: {required: true},
        errors: {required: true},
	},

    data()
    {
        return {
            answers: [],
            correct_answer: [],

            list_action: 'insert',
            answer_item: '',
            answer_old: '',
        };
    },

	computed:
    {
        has_correct_answer_error()
        {
            if( this.errors == null )
            {
                return false;
            }
            return this.errors.has('correct_answer')
        },

        correct_answer_error()
        {
            if( this.has_correct_answer_error )
            {
                return this.errors.collect('correct_answer').toString();
            }
            return null;
        },
    },


	methods:
	{
		saveItem()
        {
            this[this.list_action + 'Item']();
        },
	}
}