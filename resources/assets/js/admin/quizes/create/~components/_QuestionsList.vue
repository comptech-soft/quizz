<template>
    <div v-if="questions.length == 0" class="alert alert-info">
        No questions
    </div>

    <div v-else>
        
        <div 
            v-for="(question, index) in questions"
            :key="'question-list-item-' + index"
            class="question-list-item"
        >
            <div class="row question-header-row">
                <div class="col-xs-6">
                    Question {{index + 1}} from {{ questions.length}} 
                </div>
                <div class="col-xs-6">
                    <div class="pull-right">
                        Order: <span class="label label-primary">{{ question.order_no }}</span> 
                        Type: <span class="label label-primary">{{question.type}}</span>
                        Points: <span class="label label-success">{{question.points}}</span>
                    </div>
                </div>
            </div>

            <div class="row-question-body row">
                <div class="col-xs-12 question-body-col">
                    <strong>Question</strong>
                    <div v-html="question.question"></div>
                </div>
            </div>

            <div class="row-answers-body row">
                <div class="col-xs-12 answers-body-col">
                    <component
                        :is="'vue-list-' + question.type + '-answer'"
                        :question="question"
                    >
                    </component>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import vueListTextAnswer from './Text/ListAnswer'
    import vueListRadioAnswer from './Radio/ListAnswer'

    export default 
    {

        components:
        {
            'vue-list-text-answer': vueListTextAnswer,
            'vue-list-radio-answer': vueListRadioAnswer,
        },

    	props:
    	{
    		questions: {require: true}
    	},

        data()
        {
            return {

            };
        },

        name: 'questions-list'
    }

</script>

<style lang="scss" scoped>
    .question-list-item
    {
        margin-bottom: 10px;
        border:1px solid #b3b3b3;
        background-color: #f7f7f7;
        padding: 10px;

        .question-body-col
        {
            margin-top: 10px;
        }
    }

    .question-list-item:last-child
    {
        margin-bottom: 0px;
    }
</style>