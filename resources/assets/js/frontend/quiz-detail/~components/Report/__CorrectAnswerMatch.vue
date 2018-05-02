<template>
	<div class="correct-answer-component">
        <ul class="list-group">
            <li 
                v-for="answer in answers"
                class="list-group-item"
            >
                {{ answer.caption }} 
                <span class="badge">
                    {{correct_answer[answer.caption ]}}
                </span>
            </li>
        </ul>
    </div>
</template>

<script>

    export default 
    {

    	props:
    	{
    		correct: {required: true},
            question: {required: true},
    	},

        computed:
        {
            correct_answer()
            {
                return JSON.parse(this.correct)
            },

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

        name: 'correct-answer-match'
    }

</script>