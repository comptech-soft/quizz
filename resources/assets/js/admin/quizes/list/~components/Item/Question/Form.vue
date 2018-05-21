<template>
	<div v-if="! type_is_selected" class="question-form-component">
        <div class="row">
            <div class="col-xs-12">
                <vue-select-simple
                    field="type"
                    label="Question type"
                    :items="[
                        {id: '-', label: '-'},
                        {id: 'text',  label: 'Text Question'},
                        {id: 'radio', label: 'One Choice Question'},
                        {id: 'check', label: 'Multiple Choice Question'},
                        {id: 'match', label: 'Matching Question'},
                    ]"
                    :selected_value="type"
                    :errors="errors"
                    @input="type = $event"
                >
                </vue-select-simple>
            </div>
        </div>
    </div>

    <div v-else class="question-form-component">

        <div class="row">
            <div class="col-xs-12 col-sm-2 text-right">
                <img :src="'/images/question-types/' + type + '.png'" style="width: 48px; padding-top: 20px"/>
            </div>
            <!-- Question Order Number -->
            <div class="col-xs-12 col-sm-5">
                <vue-number
                    field="order_no"
                    placeholder="Order position"
                    label="Order position"
                    v-model="order_no"
                    maxlength="4"
                    :autonumeric="{
                        digitGroupSeparator: '',
                        minimumValue: 0,
                        maximumValue: 9999,
                        decimalPlaces: 0,
                    }"
                    :errors="errors"
                >
                </vue-number>
            </div>
            <!-- Question Points -->
            <div class="col-xs-12 col-sm-5">
                <vue-number
                    field="points"
                    placeholder="Points"
                    label="Points"
                    v-model="points"
                    maxlength="2"
                    :autonumeric="{
                        digitGroupSeparator: '',
                        minimumValue: 0,
                        maximumValue: 99,
                        decimalPlaces: 0,
                    }"
                    :errors="errors"
                >
                </vue-number>
            </div>
        </div>

        <div class="row">
            <!-- Question Body -->
            <div class="col-xs-12">
                <vue-summernote
                    field="question_body"
                    label="Question body"
                    v-model="question_body"
                    :errors="errors"
                >
                </vue-summernote>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-12">
                <component
                    :is="'answers-' + type"
                    :question="question"
                    :action="action"
                    :errors="errors"
                    @update="onUpdateQuestion"
                >
                </component> 
            </div>
        </div>

        <div class="row row-after-answers">
            <!-- Question Body -->
            <div class="col-xs-12">
                <vue-summernote
                    field="answer_description"
                    label="Answer description"
                    v-model="answer_description"
                    :errors="errors"
                >
                </vue-summernote>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-12">
                <vue-image-uploader
                    label="Answer image"
                    id="answer_image_url"
                    field="answer_image_url"
                    maxsize="5"
                    maxheight="128"
                    folder="quizes"
                    :extensions="['png', 'jpg', 'jpeg']"
                    :errors="errors"
                    :initial_image="answer_image_url ? { s3_path: answer_image_url, width: 160} : null"
                    
                    @upload-validation-fail="onImageValidationFail"
                    @uploading-process-end-success="onImageUploadSuccess"
                >
                </vue-image-uploader>
            </div>
        </div>

    </div>
</template>

<script>

    import vueAnswersText from './Answers/Text'
    import vueAnswersCheck from './Answers/Check'
    import vueAnswersRadio from './Answers/Radio'
    import vueAnswersMatch from './Answers/Match'


    export default 
    {

        components:
        {
            'answers-text': vueAnswersText,
            'answers-check': vueAnswersCheck,
            'answers-radio': vueAnswersRadio,
            'answers-match': vueAnswersMatch,  
        },

    	props:
    	{
    		quiz: {required: true},
            action: {required: true},
            question: {required: true},
            errors: {required: true},
    	},

        computed:
        {
            type_is_selected()
            {
                return ! (this.type == '-');
            }
        },

        data()
        {
            return {
                id: null,
                type: '-',
                order_no: 0,
                points: 0,
                question_body: '',
                answer_description: '',
                answer_image_url: '',
                correct_answer: '',

                answers: [],
            };
        },

        watch:
        {
            'type': function(newValue, oldValue)
            {
                if(newValue != '-')
                {
                    let i = setInterval( () => {
                        if( $('#modal-content-question-modal-form > div.modal-body').length == 1)
                        {
                            clearInterval(i);
                            $('#modal-content-question-modal-form > div.modal-body').scrollTo(0, 250);
                        }
                    }, 100);
                }
                this.onUpdateQuestion({
                    correct_answer: this.correct_answer,
                    answers: this.answers
                })
            },

            'order_no': function(newValue, oldValue)
            {
                this.onUpdateQuestion({
                    correct_answer: this.correct_answer,
                    answers: this.answers
                })
            },

            'points': function(newValue, oldValue)
            {
                this.onUpdateQuestion({
                    correct_answer: this.correct_answer,
                    answers: this.answers
                })
            },

            'question_body': function(newValue, oldValue)
            {
                this.onUpdateQuestion({
                    correct_answer: this.correct_answer,
                    answers: this.answers
                })
            },

            'answer_description': function(newValue, oldValue)
            {
                this.onUpdateQuestion({
                    correct_answer: this.correct_answer,
                    answers: this.answers
                })
            },

            'answer_image_url': function(newValue, oldValue)
            {
                this.onUpdateQuestion({
                    correct_answer: this.correct_answer,
                    answers: this.answers
                })
            },
        },

        methods:
        {

            onImageValidationFail(e)
            {
                this.answer_image_url = '';
            },

            onImageUploadSuccess(e)
            {
                this.answer_image_url = e.image.s3_path;
            },


            onUpdateQuestion(e)
            {
                this.correct_answer = e.correct_answer;
                this.answers = e.answers;
                this.$emit('update', {
                    id: this.id,
                    type: this.type,
                    order_no: this.order_no,
                    points: this.points,
                    question: this.question_body,
                    answers: this.answers,
                    correct_answer: this.correct_answer,
                    answer_description: this.answer_description,
                    answer_image_url: this.answer_image_url,
                })
            },

            fillQuestionRecord()
            {
                this.id = this.question.id;
                this.type = this.question.type;
                this.order_no = this.question.order_no;
                this.points = this.question.points;
                this.question_body = this.question.question;
                this.correct_answer = this.question.correct_answer;
                this.answer_description = this.question.answer_description;
                this.answer_image_url = this.question.answer_image_url;
                this.answers = this.question.answers;
            }
        },

        mounted()
        {
            if( this.action == 'update' )
            {
                this.fillQuestionRecord();
            }
        },

        name: 'quiz-question-form'
    }

</script>