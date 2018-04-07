<template>
	<div>
        <vue-question
            :question="current_question"
            :total="questions.length"
            :current="current"
            :user_answer="current_user_answer"
            @user-answer="onUserAnswer"
        >
        </vue-question>
    </div>
</template>

<script>

    import vueQuestion from './_Question'

    export default 
    {

        components:
        {
            'vue-question': vueQuestion,
        },

    	props:
    	{
    		record: {required: true},
            user_answers: {required: true},
            current: {required: true},
    	},

        computed:
        {
            questions()
            {
                return this.record.questions;
            },

            current_question()
            {
                return this.questions[this.current];
            },

            current_user_answer()
            {
                return _.find(this.user_answers, answer => answer.question_id == this.current_question.id)
            }
        },

        methods:
        {
            onUserAnswer(e)
            {
                this.$emit('user-answer', e);
            }
        },

        name: 'play-quiz'
    }

</script>