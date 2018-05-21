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
            <ul class="list-group">
                <li class="list-group-item">
                    Number of points achieved
                    <span class="badge">
                        {{ solving != null ? solving.total_real_points : '???'}}
                    </span>
                </li>
                <li class="list-group-item">
                    Number of points available
                    <span class="badge">
                        {{ record.total_available_points }}
                    </span>
                </li>
                <li v-if="solving != null" class="list-group-item">
                    Percentage
                    <span class="badge">
                        {{ percentage }} %
                    </span>
                </li>
                <li v-if="solving != null" class="list-group-item">
                    Success Percentage
                    <span class="badge">
                        {{ record.success_percentage }} %
                    </span>
                </li>
            </ul>
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
            responses: {required: true},
            solving: {required: true},
    	},

        computed:
        {
            questions()
            {
                return this.record.questions;
            },

            percentage()
            {
                if( this.solving != null )
                {
                    let r = 100 * this.solving.total_real_points / this.record.total_available_points;
                    return r.toFixed(2);
                }
                return '??';
            }
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

<style lang="scss" scoped>
    ul.list-group
    {
        margin-bottom: 0px;
    }
</style>