<template>
	<div>
        <vue-question
            :question="current_question"
            :total="questions.length"
            :user_answer="current_user_answer"
            @user-answer="onUserAnswer"
        >
        </vue-question>

        <div id="questions-actions">
            <div class="row">
                <div class="col-xs-6">
                </div>

                <div class="col-xs-6">
                    <div class="btn-group pull-right">
                        <button 
                            type="button" 
                            class="btn btn-primary"
                            :disabled="current == 0"
                            @click="prev"
                        >
                            Previos
                        </button>
                        <button
                            type="button"
                            class="btn btn-warning"
                            :disabled="true"
                        >
                            {{ clock }}
                        </button>
                        <button 
                            type="button" 
                            class="btn btn-primary"
                            @click="next"
                        >
                            Next
                        </button>
                    </div>
                </div>                
            </div>
        </div>
    </div>
</template>

<script>

    import vueQuestion from './_Question'

    export default 
    {

        components:
        {
            'vue-question': vueQuestion,
        },

    	props:
    	{
    		record: {required: true},
            user_answers: {required: true},
    	},

        computed:
        {
            questions()
            {
                return this.record.questions;
            },

            current_question()
            {
                return this.questions[this.current];
            },

            current_user_answer()
            {
                return _.find(this.user_answers, answer => answer.question_id == this.current_question.id)
            }
        },

        data()
        {
            return {
                current: 0,
                timer: null,
                clock: '00:00:00',
            };
        },

        methods:
        {
            prev()
            {
                if(this.current > 0)
                {
                    this.current--;
                }
            },

            next()
            {
                if( this.current < this.questions.length - 1)
                {
                    this.current++;
                }
            },

            onUserAnswer(e)
            {
                this.$emit('user-answer', e);
            }
        },

        mounted()
        {
            let vm = this;
            this.timer = new Timer();
            this.timer.start();
            this.timer.addEventListener('secondsUpdated', function(e) {
                vm.clock = vm.timer.getTimeValues().toString();
            });
        },

        name: 'play-quiz'
    }

</script>