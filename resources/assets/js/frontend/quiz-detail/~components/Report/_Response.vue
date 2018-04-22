<template>
    <div class="response-container">

        <div>
            <h4>Question {{index}} of {{record.questions.length}}</h4>
        </div>

        <div>
            <span v-html="question.question">
            </span>
        </div>

        <div class="question-container">
            <div class="row">
                <div class="col-xs-12 col-sm-6">
                    <h5>Accepted Answer</h5>
                    
                    <component
                        :is="'correct-answer-' + question.type"
                        :correct="question.correct_answer"
                    >
                    </component>

                </div>
                <div class="col-xs-12 col-sm-6">
                    <h5>Your Answer</h5>
                    {{ response.response }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import vueCorrectAnswerText from './__CorrectAnswerText'
    import vueCorrectAnswerCheck from './__CorrectAnswerCheck'
    import vueCorrectAnswerRadio from './__CorrectAnswerRadio'
    import vueCorrectAnswerMatch from './__CorrectAnswerMatch'

    export default 
    {

        components:
        {
            'correct-answer-text': vueCorrectAnswerText,
            'correct-answer-check': vueCorrectAnswerCheck,
            'correct-answer-radio': vueCorrectAnswerRadio,
            'correct-answer-match': vueCorrectAnswerMatch,
        },

    	props:
    	{
            record: {required: true},
    		question: {required: true},
            index: {required: true},
            response: {required: true},
    	},

        computed:
        {
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

        name: 'response'
    }

</script>