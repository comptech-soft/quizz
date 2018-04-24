<template>
	<div>
        <ul class="listview-check-user" :id="'listview-check-user-' + question.id">
            <li v-for="answer in answers">
                <label class="check-button-user">
                    <input 
                        :name="'question-user-' + question.id"
                        :id="'answer-user-' + answer.id" 
                        :data-answer_id="answer.id"
                        :value="answer.value" 
                        :checked="existsInUserAnswer(answer.value, answer.id)" 
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
            existsInUserAnswer(value, id)
            {
                let r = _.find(this.user_answer, item => (item.selected == value) && (item.answer_id == id) );
                return r != undefined;
            },

            iCheck()
            {
                let vm = this, i = setInterval(() => {

                    let selector = '#listview-check-user-' + this.question.id + ' label.check-button-user input';
                    if( $(selector).length == vm.answers.length )
                    {
                        clearInterval(i);
                        let _icheck = new ICheck(selector);
                        vm.icheck = _icheck.create();
                        vm.icheck.iCheck('disable');  
                        $('#listview-check-user-' + this.question.id + ' .icheckbox_square-blue').removeClass('disabled'); 
                    }
                }, 10);
            }
        },

        mounted()
        {
            this.iCheck();
        },

        name: 'user-answer-check'
    }

</script>