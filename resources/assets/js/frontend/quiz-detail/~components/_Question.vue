<template>
    <div>
        <section class="maincontent">
            <div class="row">
                <div class="col-xs-8">
                    <h4 class="question-number">
                        Question {{question.order_no}} of {{total}}
                    </h4>
                </div>

                <div class="col-xs-4 text-right">
                    <h4>
                        {{question.points}} points
                    </h4>
                </div>
            </div>

            <div class="row">
                <div class="col-xs-12">
                    <div class="progress">
                        <div 
                            class="progress-bar" 
                            role="progressbar" 
                            :aria-valuenow="percent"
                            aria-valuemin="0" 
                            aria-valuemax="100" 
                            :style="{
                                width: percent + '%'
                            }"
                        >
                            <span>{{ percent }} %</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="question-text-section" class="maincontent">
            <p v-html="question.question">
            </p>
        </section>

        <section id="question-options" class="maincontent">
            <component 
                :is="'vue-answer-' + question.type"
                :id="'question-' + question.id"
                :key="'question-' + question.id"
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
    import vueAnswerText from './__Text'
    
    export default 
    {

        components:
        {
            'vue-answer-radio': vueAnswerRadio,
            'vue-answer-check': vueAnswerCheck,
            'vue-answer-match': vueAnswerMatch,
            'vue-answer-text': vueAnswerText,
        },

    	props:
    	{
    		question: {required: true},
            total: {required: true},
            user_answer: {required: true},
            current: {required: true},
    	},

        computed:
        {
            percent()
            {
                let r = (this.current + 1) * 100 / this.total;
                return r.toFixed(2);
            }
        },

        methods:
        {
            onUserAnswer(e)
            {
                this.$emit('user-answer', e);
            }
        },

        mounted()
        {
            let i = setInterval(() => {
                if( $('#quiz-detail-container').length == 1 )
                {
                    clearInterval(i);
                    $.scrollTo('#quiz-detail-container', 1000);
                }
            }, 10)
        },

        name: 'question'
    }

</script>