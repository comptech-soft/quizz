<template>
	<div class="list-answer">
		<strong>Accepted answers</strong>
		<div>
			{{ question.correct_answer }}
		</div>
	</div>
</template>

<script>

    export default 
    {

    	props:
    	{
    		question: {required: true}
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

        name: 'list-answers-radio-item'
    }

</script>