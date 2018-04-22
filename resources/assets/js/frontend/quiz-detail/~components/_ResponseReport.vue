<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">
                {{ record.title }}
            </h3>
        </div>

        <div class="panel-body">
            <vue-response
                v-for="(question, index) in questions"
                :key="'question-' + question.id"
                :question="question"
                :record="record"
                :index="1 + index"
                :response="getResponseByQuestion(question.id)"
            >
            </vue-response>
        </div>

        <div class="panel-footer">
            ???
        </div>
    </div>
</template>

<script>

    import vueResponse from './Report/_Response.vue'

    export default 
    {

        components:
        {
            'vue-response': vueResponse
        },

    	props:
    	{
    		record: {required: true},
            responses: {required: true}
    	},

        computed:
        {
            questions()
            {
                return this.record.questions;
            },
        },

        data()
        {
            return {

            };
        },

        methods:
        {
            getResponseByQuestion(question_id)
            {
                let r = _.find( this.responses, response => response.question_id == question_id);
                return r;
            }
        },

        name: 'report'
    }

</script>