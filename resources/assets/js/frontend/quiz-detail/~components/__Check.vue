<template>
	<div>
        <ul class="listview">
            <li v-for="answer in answers">
                <label class="checkbutton checked">
                    <input 
                        :name="'question-' + question.id"
                        :id="'answer-' + answer.id" 
                        :data-answer_id="answer.id"
                        :value="answer.value" 
                        :checked="existsInUserAnswer(answer.value, answer.id)" 
                        type="checkbox"
                    >
                    <span class="label-text">
                        {{ answer.caption }} / {{ existsInUserAnswer(answer.value, answer.id) }}
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
            question: {required: true},
            user_answer: {required: true},
        },

        computed:
        {
            answers()
            {
                return this.question.answers;
            },

            user_selected()
            {
                return this.user_answer.answer;
            }
        },

        data()
        {
            return {
                selected: [],
                icheck: null,
            };
        },

        methods:
        {

            existsInUserAnswer(value, id)
            {
                let r = _.find(this.user_selected, item => (item.selected == value) && (item.answer_id == id) );
                return r != undefined;
            },

            existsInSelected(value, id)
            {
                let r = _.find(this.selected, item => (item.selected == value) && (item.answer_id == id) );
                return r != undefined;
            },

            addToSelected(value, id)
            {
                if( ! this.existsInSelected(value, id) )
                {
                    this.selected.push({
                        answer_id: id,
                        selected: value,
                    });
                }
            },

            removeFromSelected(value, id)
            {
                if( this.existsInSelected(value, id) )
                {
                    _.remove(this.selected, item => (item.selected == value) && (item.answer_id == id))   
                }
                this.selected = this.selected
            },

            onClickCheckbox(jqObject)
            {
                let id = jqObject.attr('id'), value = $('#' + id).val(), answer_id = jqObject.data('answer_id');
                setTimeout(() => {
                    if( this.existsInSelected(value, answer_id) )
                    {
                        $('#' + id).iCheck('uncheck');
                        $('#' + id).removeAttr('checked').iCheck('update');
                        this.removeFromSelected(value, answer_id)
                    }
                    else
                    {
                        this.addToSelected(value, answer_id)
                    }
                    this.$emit('user-answer', {
                        question_id: this.question.id,
                        answer: this.selected,
                    });
                }, 10)               
            },

            iCheck()
            {
                let vm = this, i = setInterval(() => {
                    if( $('label.checkbutton input').length == vm.answers.length )
                    {
                        clearInterval(i);
                        vm.icheck = $('label.checkbutton input').iCheck({
                            checkboxClass: 'icheckbox_square-blue',
                            radioClass: 'iradio_square-blue',
                            increaseArea: '20%',
                        }).on('ifClicked', function(event){
                            vm.onClickCheckbox( $(this))           
                        });
                    }
                }, 10);
            }
        },

        mounted()
        {
            this.iCheck();
        },

        name: 'answers-check'
    }

</script>