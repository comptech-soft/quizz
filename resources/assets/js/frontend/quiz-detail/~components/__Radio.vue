<template>
	<div :id="id" class="radio-answer-container">
        <ul class="listview">
            <li v-for="answer in answers">
                <label class="radiobutton checked">
                    <input 
                        :name="'question-' + question.id"
                        :id="'answer-' + answer.id" 
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

                    let selector = '#' + vm.id + ' label.radiobutton input';
                    let jq = $(selector);
                    if( jq.length == vm.answers.length )
                    {
                        clearInterval(i);
                        vm.icheck = $('#' + vm.id + ' label.radiobutton input').iCheck({
                            checkboxClass: 'icheckbox_square-blue',
                            radioClass: 'iradio_square-blue',
                            increaseArea: '20%',
                        }).on('ifClicked', function(event){
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

        name: 'answers-radio'
    }

</script>