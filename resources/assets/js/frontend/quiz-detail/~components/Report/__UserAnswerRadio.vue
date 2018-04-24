<template>
	<div>
        <ul class="listview-radio-user" :id="'listview-radio-user-' + question.id">
            <li v-for="answer in answers">
                <label class="radio-button-user">
                    <input 
                        :name="'question-user-' + question.id"
                        :id="'answer-user-' + answer.id" 
                        :value="answer.value" 
                        :checked="answer.value == user_answer.toLowerCase()"
                        type="radio"
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
    		user_answer: {required: true},
            question: {required: true}
    	},

        data()
        {
            return {
                icheck: null,
            }
        },

        computed:
        {
            answers()
            {
                return this.question.answers;
            }
        },

        methods:
        {

            iCheck()
            {
                let vm = this, i = setInterval(() => {

                    let selector = '#listview-radio-user-' + this.question.id + ' label.radio-button-user input';

                    if( $(selector).length == vm.answers.length )
                    {
                        clearInterval(i);
                        let _icheck = new ICheck(selector);
                        vm.icheck = _icheck.create();
                        vm.icheck.iCheck('disable');  
                        $('#listview-radio-user-' + this.question.id + ' .iradio_square-blue').removeClass('disabled'); 
                    }
                }, 10);
            }
        },

        mounted()
        {
            this.iCheck();
        },

        name: 'user-answer-radio'
    }

</script>