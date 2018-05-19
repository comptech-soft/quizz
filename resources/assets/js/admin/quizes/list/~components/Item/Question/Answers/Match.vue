<template>
	<div class="question-answers-component">
        question-answers-match
    </div>
</template>

<script>

    export default 
    {

    	props:
    	{
    		question: {required: true},
    	},

        computed:
        {
            answers()
            {
                return this.question.answers;
            }
        },

        data()
        {
            return {

            };
        },

        methods:
        {

        },

        name: 'question-answers-match'
    }

</script>