<template>
	<div :id="id" class="check-answer-container">
        <ul class="listview-check-question" :id="'listview-check-question-' + question.id">
            <li v-for="answer in answers">
                <label class="check-button-question">
                    <input 
                        :name="'question-' + question.id"
                        :id="'answer-' + answer.id" 
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
                    let selector = '#' + vm.id +  ' #listview-check-question-' + this.question.id + ' label.check-button-question input';
                    if( $(selector).length == vm.answers.length )
                    {
                        clearInterval(i);
                        let _icheck = new ICheck(selector);
                        vm.icheck = _icheck.create();
                        vm.icheck.on('ifClicked', function(event){
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