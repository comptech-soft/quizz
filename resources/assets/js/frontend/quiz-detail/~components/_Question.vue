<template>
    <div>
        <section class="maincontent">
            <h4 class="question-number">Question {{question.order_no}} of {{total}}</h4>
            <hr/>
            {{ user_answer }}
        </section>

        <section class="maincontent">
            <p v-html="question.question">
            </p>
            <div class="text-right">
                <span>
                    ({{question.points}} points)
                </span>
            </div>
        </section>

        <section class="maincontent">
            <component 
                :is="'vue-answer-' + question.type"
                :question="question"
                :user_answer="user_answer"
                @user-answer="onUserAnswer"
            >
            </component>
        </section>
    </div>
</template>

<script>

    import vueAnswerRadio from './__Radio'
    import vueAnswerCheck from './__Check'
    import vueAnswerMatch from './__Match'

    export default 
    {

        components:
        {
            'vue-answer-radio': vueAnswerRadio,
            'vue-answer-check': vueAnswerCheck,
            'vue-answer-match': vueAnswerMatch,
        },

    	props:
    	{
    		question: {required: true},
            total: {required: true},
            user_answer: {required: true},
    	},

        methods:
        {
            onUserAnswer(e)
            {
                this.$emit('user-answer', e);
            }
        },

        name: 'question'
    }

</script>