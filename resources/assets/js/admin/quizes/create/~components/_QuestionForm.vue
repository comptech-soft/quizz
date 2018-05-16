<template>
	<form class="question-form">
        <div class="panel panel-default">
            <div class="panel-body">
                <div class="row">
                    <!-- Question Type  -->
                    <div class="col-xs-12 col-sm-4">
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
                    <!-- Question Order Number -->
                    <div class="col-xs-12 col-sm-4">
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
                    <div class="col-xs-12 col-sm-4">
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
                            field="question"
                            label="Question body"
                            v-model="question"
                            :errors="errors"
                        >
                        </vue-summernote>
                    </div>
                </div>

                <!-- Question Answers -->
                <div v-if="type != '-'" class="row">
                    <div class="col-xs-12">
                        <component
                            :is="'answers-' + type"
                            :error="error_by_type"
                            @update="onUpdateAnswers"
                        >
                        </component>
                    </div>                    
                </div>

                <!-- Correct Answer description -->
                <div v-if="type != '-'" class="row">
                    <div class="col-xs-12 col-answer-description">
                        <vue-summernote
                            field="answer_description"
                            label="Answer Description"
                            v-model="answer_description"
                        >
                        </vue-summernote>
                    </div>
                </div>
            </div>
            
            <!-- Footer with Actions -->
            <div class="panel-footer">
                <div class="btn-group pull-right" role="group">       
                    <button 
                        type="button" 
                        class="btn btn-default"
                        @click="addQuestion"
                    >
                        Add
                    </button>
                    <button 
                        type="button" 
                        class="btn btn-default"
                        @click="$emit('cancel')"
                    >
                        Cancel
                    </button>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </form>
</template>

<script>

    import veeValidation from './../../../../boot/modules/validation/Validation'

    import vueAnswersText from './Text/_AnswersText'
    import vueAnswersRadio from './Radio/_AnswersRadio'
    import vueAnswersCheck from './Check/_AnswersCheck'
    import vueAnswersMatch from './Match/_AnswersMatch'

    import Question from './_Modules/Question'

    export default 
    {

        components:
        {
            'answers-text': vueAnswersText,
            'answers-radio': vueAnswersRadio,
            'answers-check': vueAnswersCheck,
            'answers-match': vueAnswersMatch,
        },

    	props:
    	{
    		next_no: {required: true},
    	},

        computed:
        {
            form_data()
            {
                return {
                    type: this.type,
                    order_no: this.order_no,
                    points: this.points,
                    question: this.question,
                };
            },

            errors()
            {
                if(this.vee_validator == null)
                {
                    return null;
                }
                return this.vee_validator.getErrors();
            }

        },

        data()
        {
            return {
                type: '-',
                order_no: 0,
                points: 0,
                question: '',
                correct_answer: '',
                answer_description: null,
                answer_image_url: null,
                answers: [],

                vee_validator: null,

                error_by_type: '',
            };
        },

        watch:
        {
            'type': function(newValue, oldValue)
            {
                if(newValue != '-')
                {
                    this.vee_validator.removeError('type');
                }
                else
                {
                    this.vee_validator.validateField('type', newValue)
                }
                this.answers = [];
            },

            'order_no': function(newValue, oldValue)
            {
                if(newValue > 0)
                {
                    this.vee_validator.removeError('order_no');
                }
                else
                {
                    this.vee_validator.validateField('order_no', newValue)
                }
            },

            'points': function(newValue, oldValue)
            {
                if(newValue > 0)
                {
                    this.vee_validator.removeError('points');
                }
                else
                {
                    this.vee_validator.validateField('points', newValue)
                }
            },

            'question': function(newValue, oldValue)
            {
                if(newValue.trim().length > 0)
                {
                    this.vee_validator.removeError('question');
                }
                else
                {
                    this.vee_validator.validateField('question', newValue)
                }
            }

        },

        methods:
        {
            onUpdateAnswers(e)
            {
                this.answers = e.answers;
                let _question = new Question({
                    answers: this.answers,
                    type: this.type,
                    accepted_answers: e.accepted_answers,
                    correct_answer: this.correct_answer,
                });
                let r = _question.updateAnswers();
                this.correct_answer = r.correct_answer;
                this.error_by_type = r.error_by_type;
            },

            isValidByType()
            {
                let _question = new Question({
                    answers: this.answers,
                    type: this.type,
                    accepted_answers: null,
                    correct_answer: this.correct_answer,
                });
                return _question.validateByType();
            },

            addQuestion()
            {
                this.error_by_type = '';
                this.vee_validator.validate(this.form_data).then( valid => {
                    if( valid )
                    {
                        let valid_by_type = this.isValidByType();
                        if(  valid_by_type.valid )
                        {
                            this.$emit('add', {
                                type: this.type,
                                order_no: this.order_no,
                                points: this.points,
                                question: this.question,
                                correct_answer: this.correct_answer,
                                answer_description: this.answer_description,
                                answer_image_url: this.answer_image_url,
                                answers: this.answers,
                            })
                        }
                        else
                        {
                            this.error_by_type = valid_by_type.message;
                        }
                    }
                })
            }

        },

        mounted()
        {
            this.vee_validator = new veeValidation({
                type: 'not_in:-',
                order_no: 'min_value:1',
                points: 'min_value:1',
                question: 'required'
            })
            this.order_no = this.next_no;
        },

        name: 'question-form'
    }

</script>