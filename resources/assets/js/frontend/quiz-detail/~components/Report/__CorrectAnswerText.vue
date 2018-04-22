<template>
	<div class="correct-answer-component">
        {{correct}}
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

        },

        data()
        {
            return {

            };
        },

        methods:
        {

        },

        name: 'correct-answer-text'
    }

</script>