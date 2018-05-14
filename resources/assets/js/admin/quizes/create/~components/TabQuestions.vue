<template>
	<div id="questions" class="tab-pane fade">

        <div v-if="! form.visible" class="row">
            <div class="col-xs-12">
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

        <div v-if="form.visible" class="row">
            <div class="col-xs-12">
                <div id="question-form-container">
                    <question-form
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
                
                <div v-if="questions.length == 0" class="alert alert-info">
                    No questions
                </div>

                <div v-else class="table-responsive">
                    <table class="table table-bordered table-condensed">
                        <thead>
                            <tr>
                                <th>Order Position</th>
                                <th>Type</th>
                                <th>Question</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="q in questions">
                                <td>
                                    {{ q.order_no }}
                                </td>
                                <td>
                                    {{ q.type }}
                                </td>
                                <td v-html="q.question">
                                </td>
                                <td>
                                    {{ q.points }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

    import vueQuestionForm from './_QuestionForm'

    export default 
    {

        components:
        {
            'question-form': vueQuestionForm,
        },

    	props:
    	{
    		
    	},

        computed:
        {

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
    .toolbar
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
</style>