<template>
	<div class="answer-component-container">
        <div class="answer-to-string">
            <h5>
                Match Options
            </h5>
            <div>
                {{ answers_to_string }}
            </div>
        </div>

        <div class="correct-to-string">
            <h5>
                Correct Answers
            </h5>
            <div>
                {{ correct_to_string}}
            </div>
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
            correct_to_string()
            {
                return _.map(this.answers, (answer) => {return answer.value}).join(', ');
            },

            answers_to_string()
            {
               return _.map(this.answers, (answer) => {return answer.caption}).join(', ');
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

        name: 'answer-match'
    }

</script>