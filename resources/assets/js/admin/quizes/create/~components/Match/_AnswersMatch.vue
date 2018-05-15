<template>
    <div class="answers-container answers-container-radio">

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

    import vueAcceptedAnswers from './AcceptedAnswers'

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
                accepted_answers: [],
            };
        },

        methods:
        {

            update()
            {
                let answers = [];
                _.map(this.accepted_answers, (answer, index) => {
                    answers.push({
                        caption: Strings.capitalizeWords(answer.caption),
                        value: Strings.capitalizeWords(answer.value),
                        order_no: index + 1,
                    })
                })
                let correct = {};
                _.map(this.accepted_answers, (answer, index) => {
                    correct[Strings.capitalizeWords(answer.caption)] = Strings.capitalizeWords(answer.value)
                })
                this.$emit('update', {
                    accepted_answers: correct,
                    answers: answers
                });
            },

            onUpdateAcceptedAnswers(e)
            {
                this.accepted_answers = e;
                this.update();
            }

        },

        name: 'definition-answers-match'
    }

</script>