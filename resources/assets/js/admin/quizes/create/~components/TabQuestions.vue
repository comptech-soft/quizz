<template>
	<div id="questions" class="tab-pane fade">

        <!--
            Toolbar
        -->
        <div v-if="! form.visible" class="row">
            <div class="col-xs-6">
                <label class="number-of-questions">Number of questions: <strong>{{questions.length}}</strong></label>
            </div>
            <div class="col-xs-6">
                <div class="btn-group toolbar pull-right" role="group">
                    <button 
                        type="button" 
                        class="btn btn-default"
                        @click="onClickNewQuestion"
                    >
                        New
                    </button>
                </div>
            </div>
        </div>

        <!--
            The form to attach question to a quiz
        -->
        <div v-if="form.visible" class="row">
            <div class="col-xs-12">
                <div id="question-form-container">
                    <question-form
                        :next_no="questions.length + 1"
                        @add="addQuestion"
                        @cancel="form.visible=false"
                    >
                    </question-form>
                </div>
            </div>
        </div>

        <!--
            The list of defined questions
        -->
        <div v-if="! form.visible" class="row">
            <div class="col-xs-12">
                <questions-list
                    :questions="questions"
                >
                </questions-list>                
            </div>
        </div>

    </div>
</template>

<script>

    import vueQuestionForm from './_QuestionForm'
    import vueQuestionsList from './_QuestionsList'

    export default 
    {

        components:
        {
            'question-form': vueQuestionForm,
            'questions-list': vueQuestionsList,
        },

        data()
        {
            return {
                questions: [],

                form: {
                    visible: false,
                    question: {
                        type: '',
                        order_no: 0,
                        points: 0,
                        question: '',
                        correct_answer: '',
                        answer_description: null,
                        answer_image_url: null,
                        answers: [],
                    },
                }
            };
        },

        methods:
        {
            onClickNewQuestion()
            {
                if(! this.form.visible )
                {
                    this.form.visible = true;
                }
            },

            addQuestion(e)
            {
                this.questions.push(e);
                this.$emit('questions', this.questions);
                this.form.visible = false;
            }
        },

        name: 'tab-questions'
    }

</script>

<style scoped lang="scss">
    .toolbar, .number-of-questions
    {
        margin: 6px 0px;
    }

    button.btn, div.alert
    {
        border-radius: 0px;
    }

    #question-form-container
    {
        margin-top: 30px;
    }

    .number-of-questions
    {
        line-height: 34px;
    }
</style>