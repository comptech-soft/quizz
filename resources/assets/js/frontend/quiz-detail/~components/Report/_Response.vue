<template>
    <div class="response-container">

        <div class="row">
            <div class="col-xs-8">
                <h4
                    :class="{
                        is_correct:is_correct,
                        is_not_correct: !is_correct,
                    }"
                >
                    Question {{index}} of {{record.questions.length}}
                </h4>
            </div>
            <div class="col-xs-4 text-right">
                <h4
                    :class="{
                        is_correct:is_correct,
                        is_not_correct: !is_correct,
                    }"
                >
                    {{ question.points }} points
                </h4>
            </div>
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
                        :question="question"
                    >
                    </component>

                </div>
                <div 
                    :class="{
                        'col-xs-12': true, 
                        'col-sm-6': true,
                        is_correct:is_correct,
                        is_not_correct: !is_correct,
                    }"
                >
                    <div>
                        <h5>
                            <i :class="{
                                fa: true, 
                                'fa-fw': true, 
                                'fa-thumbs-up': is_correct, 
                                'fa-thumbs-down': !is_correct
                            }">
                            </i>
                            Your Answer
                        </h5>
                        <div>
                            <component
                                :is="'user-answer-' + question.type"
                                :user_answer="user_answer"
                                :question="question"
                            >
                            </component>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <h5><i class="fa fa-fw fa-exclamation-circle"></i>Explanation</h5>
            <div class="row">
                <div v-if="question.answer_image_url != null" class="col-xs-12 col-sm-6">
                    <img :src="'/' + question.answer_image_url" class="img-responsive" />
                </div>
                <div :class="{
                    'col-xs-12': question.answer_image_url == null,
                    'col-sm-12': question.answer_image_url == null,
                    'col-sm-6': question.answer_image_url != null
                }">
                    <div v-html="question.answer_description">
                    </div>
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

    import vueUserAnswerText from './__UserAnswerText'
    import vueUserAnswerCheck from './__UserAnswerCheck'
    import vueUserAnswerRadio from './__UserAnswerRadio'

    export default 
    {

        components:
        {
            'correct-answer-text': vueCorrectAnswerText,
            'correct-answer-check': vueCorrectAnswerCheck,
            'correct-answer-radio': vueCorrectAnswerRadio,
            'correct-answer-match': vueCorrectAnswerMatch,

            'user-answer-text': vueUserAnswerText,
            'user-answer-check': vueUserAnswerCheck,
            'user-answer-radio': vueUserAnswerRadio,
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
            },

            user_answer()
            {
                if(this.response.response != null)
                {
                    if(this.question.type == 'text')
                    {
                        return this.response.response.toLowerCase();
                    }
                    if(this.question.type == 'check')
                    {
                        return JSON.parse(this.response.response);
                    }
                    if(this.question.type == 'radio')
                    {
                        return this.response.response.toLowerCase();
                    }
                }
                return '';
            },

            is_correct()
            {
                if( this.question.type == 'text')
                {
                    return this.is_correct_text.is_correct;
                }
                if( this.question.type == 'check')
                {
                    return this.is_correct_check.is_correct;
                }
                if( this.question.type == 'radio')
                {
                    return this.is_correct_radio.is_correct;
                }
                return false;
            },

            is_correct_text()
            {
                let correct_answers = _.split(this.question.correct_answer, ',');
                correct_answers = _.map(correct_answers, answer => answer.trim().toLowerCase());
                let founded = _.find(correct_answers, item => item == this.user_answer)
                let is_correct = false;
                if( founded != undefined)
                {
                    is_correct = true;
                }
                return {
                    correct_answers: correct_answers,
                    user_answer: this.user_answer,
                    founded: founded == undefined ? null : founded,
                    is_correct: is_correct
                };
            },

            is_correct_check()
            {
                let correct_answers = JSON.parse(this.question.correct_answer);
                correct_answers = _.map(correct_answers, answer => answer.trim().toLowerCase());
                correct_answers = _.orderBy(correct_answers);

                let user_answers = _.map(this.user_answer, item => item.selected.toLowerCase())
                user_answers = _.orderBy(user_answers);

                return {
                    correct_answers: correct_answers,
                    user_answer: user_answers,
                    is_correct: _.isEmpty(_.xor(correct_answers, user_answers))
                };
            },

            is_correct_radio()
            {
                return {
                    correct_answers: this.question.correct_answer.toLowerCase(),
                    user_answer: this.user_answer.toLowerCase(),
                    is_correct: this.question.correct_answer.toLowerCase() == this.user_answer.toLowerCase(),
                };
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