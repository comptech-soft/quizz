<template>
	<div :id="id" class="radio-answer-container">
        <ul class="listview-radio-question" :id="'listview-radio-question-' + question.id">
            <li v-for="answer in answers">
                <label class="radio-button-question">
                    <input 
                        :name="'question-' + question.id"
                        :id="'answer-question-' + answer.id" 
                        :value="answer.value" 
                        :checked="answer.value == user_answer.answer"
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

    import ICheck from './../../../boot/modules/jquery/ICheck.js'

    export default 
    {

    	props:
        {
            id: {required: true},
            question: {required: true},
            user_answer: {required: true},
        },

        computed:
        {
            answers()
            {
                return this.question.answers;
            }
        },

        data()
        {
            return {
                selected: '',
                icheck: null,
            };
        },

        methods:
        {
            onRadioClick(jq_option)
            {
                let vm = this, id = jq_option.attr('id'), value = $('#' + vm.id + ' #' + id).val();
                setTimeout( () => {
                    if(this.selected == value)
                    {
                        this.selected = '';
                        $('#' + vm.id + ' #' + id).iCheck('uncheck');
                        $('#' + vm.id + ' #' + id).removeAttr('checked').iCheck('update');
                    }
                    else
                    {
                        this.selected = value;
                    }
                    this.$emit('user-answer', {
                        question_id: this.question.id,
                        answer: this.selected,
                    });
                }, 10);
            },

            iCheck()
            {
                let vm = this, i = setInterval(() => {
                    let selector = '#' + vm.id +  ' #listview-radio-question-' + this.question.id + ' label.radio-button-question input';
                    if( $(selector).length == vm.answers.length )
                    {
                        clearInterval(i);
                        let _icheck = new ICheck(selector);
                        vm.icheck = _icheck.create();
                        vm.icheck.on('ifClicked', function(event){
                            vm.onRadioClick($(this));
                        });                        
                    }
                }, 10);
            }
        },

        mounted()
        {
            this.iCheck();
        },

        name: 'question-answers-radio'
    }

</script>