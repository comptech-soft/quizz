<template>
	<div class="quiz-title">
        <h4>
            {{ index + 1}}. {{ record.name }}
        </h4>
    </div>
</template>

<script>

    export default 
    {

    	props:
    	{
    		record: {required: true},
            index: {required: true},
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

        name: 'quiz-title'
    }

</script>