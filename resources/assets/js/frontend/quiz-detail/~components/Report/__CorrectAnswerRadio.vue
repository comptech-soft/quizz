<template>
	<div class="correct-answer-component">
        <ul class="listview-radio-correct" :id="'listview-radio-correct-' + question.id">
            <li v-for="answer in answers">
                <label class="radio-button-correct">
                    <input 
                        :name="'question-correct-' + question.id"
                        :id="'answer-correct-' + answer.id" 
                        :value="answer.value" 
                        :checked="answer.value == correct_answer"
                        :data-value="answer.value"
                        :data-correct="correct_answer"
                        type="radio"
                    >
                    <span class="label-text">
                        {{ answer.caption }} / {{answer.value == correct_answer }}
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
                return this.correct.toLowerCase();
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
            iCheck()
            {
                let vm = this, i = setInterval(() => {

                    let selector = '#listview-radio-correct-' + this.question.id + ' label.radio-button-correct input';

                    if( $(selector).length == vm.answers.length )
                    {
                        clearInterval(i);
                        let _icheck = new ICheck(selector);
                        vm.icheck = _icheck.create();
                        vm.icheck.iCheck('disable');  
                        $('#listview-radio-correct-' + this.question.id + ' .iradio_square-blue').removeClass('disabled'); 
                    }
                }, 10);
            }
        },

        mounted()
        {
           this.iCheck();
        },

        name: 'correct-answer-radio'
    }

</script>