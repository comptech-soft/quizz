<template>
	<span>
        {{user_answer}}
    </span>
</template>

<script>

    export default 
    {

    	props:
    	{
    		user_answer: {required: true},
            question: {required: true}
    	},

        name: 'user-answer-text'
    }

</script>