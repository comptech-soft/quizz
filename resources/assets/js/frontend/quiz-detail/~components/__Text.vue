<template>
	<div :id="id" class="text-answer-container">
        <vue-textbox
            field="value"
            :placeholder="answer.caption"
            v-model="value"
            @input="onChangeValue"
        >
        </vue-textbox>
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
            answer()
            {
                return this.question.answers[0];
            },

            user_selected()
            {
                return this.user_answer.answer;
            }
        },

        data()
        {
            return {
                value: '',
            };
        },

        methods:
        {
            onChangeValue(e)
            {
                this.$emit('user-answer', {
                    question_id: this.question.id,
                    answer: this.value,
                });
            }
        },

        mounted()
        {
            this.value = this.user_selected;
            let vm = this, i = setInterval( () => {
                if($('div#' + vm.id + ' input').length == 1)
                {
                    $('div#' + vm.id + ' input').focus();
                }
            }, 10)
        },

        name: 'answers-text'
    }

</script>