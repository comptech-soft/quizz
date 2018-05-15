<template>
	<form>
        <div class="panel panel-default">
            
            <div class="panel-body">

                <div class="row">
                    <div class="col-xs-12 col-sm-4">
                        <!-- Type  -->
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

                    <div class="col-xs-12 col-sm-4">
                        <!-- Order -->
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

                    <div class="col-xs-12 col-sm-4">
                        <!-- Points -->
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

                <!--
                    Componenta pentru definirea raspunsurilor
                -->
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

                <!--
                    Descrierea/explicatia raspunsului corect
                -->
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

    import vueAnswersText from './_AnswersText'
    import vueAnswersRadio from './_AnswersRadio'
    import vueAnswersCheck from './_AnswersCheck'
    import vueAnswersMatch from './_AnswersMatch'

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
                if( this.type == 'text')
                {
                    this.correct_answer = _.join(e.accepted_answers, ', ');
                    if(this.correct_answer.trim().length > 0)
                    {
                        this.error_by_type = '';
                    }
                }
                if( this.type == 'radio')
                {
                    this.correct_answer = e.accepted_answers;
                    if(this.correct_answer.trim().length > 0)
                    {
                        this.error_by_type = '';
                    }
                }
                if( this.type == 'check')
                {
                    this.correct_answer = e.accepted_answers; // _.join( _.map(e.accepted_answers, (item) => { return item.caption}), ', ');
                    if(this.correct_answer.trim().length > 0)
                    {
                        this.error_by_type = '';
                    }
                }
            },

            isValidByType()
            {
                if( this.type == 'text' )
                {
                    return {
                        valid: this.correct_answer.trim().length > 0,
                        message: 'Please define the accepted answers'
                    }
                }
                if( this.type == 'radio' )
                {
                    if(this.answers.length == 0)
                    {
                        return {
                            valid: false,
                            message: 'Please define the options list'
                        }
                    }
                    return {
                        valid: this.correct_answer.trim().length > 0,
                        message: 'Please define the correct option'
                    }
                }
                if( this.type == 'check' )
                {
                    if(this.answers.length == 0)
                    {
                        return {
                            valid: false,
                            message: 'Please define the options list'
                        }
                    }
                    return {
                        valid: this.correct_answer.length > 0,
                        message: 'Please define the corrects option'
                    }
                }
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

<style scoped lang="scss">
    .col-answer-description
    {
        margin-top: 10px;
    }
</style>
