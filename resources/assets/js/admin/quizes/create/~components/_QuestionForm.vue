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
                            @update="onUpdateAnswers"
                        >
                        </component>
                    </div>                    
                </div>

                <!--
                    Descrierea/explicatia raspunsului corect
                -->
                <div v-if="type != '-'" class="row">
                    <div class="col-xs-12">
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

                /* ----- */
                vee_validator: null,

            };
        },

        watch:
        {
            'type': function(newValue, oldValue)
            {
                console.log(oldValue + ' ====> ' + newValue);
                if(newValue != '-')
                {
                    this.vee_validator.removeError('type');
                }
                this.answers = [];
            } 
        },

        methods:
        {
            onUpdateAnswers(e)
            {
                this.answers = e.answers;
                this.correct_answer = _.join(e.accepted_answers, ', ');
            },

            addQuestion()
            {
                this.vee_validator.validate(this.form_data).then( valid => {
                    if( valid )
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
        },

        name: 'question-form'
    }

</script>