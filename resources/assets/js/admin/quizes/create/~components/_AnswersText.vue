<template>
	<div class="answers-container answers-container-text">

        <div class="row">
            <div class="col-xs-12">
                <!-- Name  -->
                <vue-textbox
                    field="caption"
                    placeholder="The caption before user answer"
                    label="The caption before user answer"
                    v-model="caption"
                    @input="onInput"
                >
                </vue-textbox>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-12 col-accepted-answers">
                <accepted-answers
                    @update="onUpdateAcceptedAnswers"
                >
                </accepted-answers>                
            </div>

            <div class="col-xs-12">
                {{ error }}
            </div>
        </div>

    </div>
</template>

<script>

    import vueAcceptedAnswers from './Text/AcceptedAnswers'

    export default 
    {

        components:
        {
            'accepted-answers': vueAcceptedAnswers, 
        },

        props:
        {
            error: {required: true}
        },

        data()
        {
            return {
                caption: 'Type your answer',
                value: null,
                order_no: 1,
                accepted_answers: [],
            };
        },

        methods:
        {

            update()
            {
                this.$emit('update', {
                    accepted_answers: this.accepted_answers,
                    answers: [{
                        caption: this.caption,
                        value: this.value,
                        order_no: this.order_no,
                    }]
                });
            },

            onInput()
            {
                this.update();
            },

            onUpdateAcceptedAnswers(e)
            {
                this.accepted_answers = e;
                this.update();
            }

        },

        name: 'definition-answers-text'
    }

</script>

