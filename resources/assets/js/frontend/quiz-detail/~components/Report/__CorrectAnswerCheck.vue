<template>
	<div class="correct-answer-component">
        {{correct_answer}}
    </div>
</template>

<script>

    export default 
    {

    	props:
    	{
    		correct: {required: true},
    	},

        computed:
        {
            correct_answer()
            {
                return JSON.parse(this.correct)
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

        name: 'correct-answer-check'
    }

</script>