<template>
	<div class="panel panel-default">
        <div class="panel-heading">
            <strong>{{quiz.name}}</strong>. Questions 
        </div>
        <div class="panel-body">
            {{ quiz.questions }}
        </div>
    </div>
</template>

<script>

    export default 
    {

    	props:
        {
            quiz: {required: true},
        },

        name: 'quiz-questions-summary'
    }

</script>