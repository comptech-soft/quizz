<template>
	<div class="correct-answer-component">
        <ul class="listview-check-correct" :id="'listview-check-correct-' + question.id">
            <li v-for="answer in answers">
                <label class="check-button-correct">
                    <input 
                        :name="'question-correct-' + question.id"
                        :id="'answer-correct-' + answer.id" 
                        :data-answer_id="answer.id"
                        :value="answer.value" 
                        :checked="existsInCorrectAnswer(answer.value, answer.id)" 
                        type="checkbox"
                    >
                    <span class="label-text">
                        {{ answer.caption }}
                    </span>
                </label>
            </li>
        </ul>
    </div>
</template>

<script>

    import ICheck from './../../../../boot/modules/jquery/ICheck.js'

    export default 
    {

    	props:
    	{
    		correct: {required: true},
            question: {required: true}
    	},

        computed:
        {
            correct_answer()
            {
                return JSON.parse(this.correct)
            },

            answers()
            {
                return this.question.answers;
            }
        },

        data()
        {
            return {
                icheck: null,
            };
        },

        methods:
        {
            existsInCorrectAnswer(value, id)
            {
                let r = _.find(this.correct_answer, item => item.toLowerCase() == value );
                return r != undefined;
            },

            iCheck()
            {
                let vm = this, i = setInterval(() => {

                    let selector = '#listview-check-correct-' + this.question.id + ' label.check-button-correct input';

                    if( $(selector).length == vm.answers.length )
                    {
                        clearInterval(i);
                        let _icheck = new ICheck(selector);
                        vm.icheck = _icheck.create();
                        vm.icheck.iCheck('disable');  
                        $('#listview-check-correct-' + this.question.id + ' .icheckbox_square-blue').removeClass('disabled'); 
                    }
                }, 10);
            }
        },

        mounted()
        {
            this.iCheck();
        },

        name: 'correct-answer-check'
    }

</script>