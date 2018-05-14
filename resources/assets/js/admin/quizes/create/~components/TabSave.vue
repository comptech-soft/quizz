<template>
	<div id="save" class="tab-pane fade">
        
        <h3 class="tab-header">Review and Save</h3>
        
        <div class="row">
            <div class="col-xs-12">
                <quiz-summary
                    :quiz="quiz"
                >
                </quiz-summary>
            </div>
        </div>

        <div id="questions-row" class="row">
            <div class="col-xs-12">
                <quiz-questions-summary
                    :quiz="quiz"
                >
                </quiz-questions-summary>
            </div>
        </div>

        <div id="actions-row" class="row">
            <div class="col-xs-12">
                <button 
                    class="btn btn-primary"
                    @click="saveQuiz"
                >
                    Save the quiz
                </button>
            </div>
        </div>
        
    </div>
</template>

<script>

    import vueQuizSummary from './_QuizSummary'
    import vueQuizQuestionsSummary from './_QuizQuestionsSummary'

    export default 
    {

        components:
        {
            'quiz-summary': vueQuizSummary,
            'quiz-questions-summary': vueQuizQuestionsSummary
        },

    	props:
    	{
    		quiz: {type: Object, required: true}
    	},

        computed:
        {

        },

        data()
        {
            return {

            };
        },

        methods:
        {
            saveQuiz()
            {
                Requests.post('/admin/quizes/insert', {quiz: this.quiz})
                    .then( r => {
                        console.log(r);
                    })
            }
        },

        name: 'tab-save'
    }

</script>

<style scoped lang="scss">
    #questions-row, #actions-row
    {
        margin-top: 20px;
    }

    button.btn
    {
        border-radius: 0px;
    }
</style>