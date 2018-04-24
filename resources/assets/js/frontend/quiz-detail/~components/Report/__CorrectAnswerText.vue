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
            question: {required: true}
    	},

        name: 'correct-answer-text'
    }

</script>