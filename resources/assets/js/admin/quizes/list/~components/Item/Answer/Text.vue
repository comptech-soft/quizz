<template>
	<div class="answer-component-container">
        <h5>
            Accepted Answers
        </h5>
        <div>
            {{ correct }}
        </div>
    </div>
</template>

<script>

    export default 
    {

    	props:
    	{
            answers: {required: true},
            correct: {required: true}
    	},

        computed:
        {

        },

        data()
        {
            return {

            };
        },

        methods:
        {

        },

        name: 'answer-text'
    }

</script>