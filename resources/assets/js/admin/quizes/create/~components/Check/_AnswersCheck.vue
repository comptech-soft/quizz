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
                    let caption = answer.caption.toLowerCase();
                    answers.push({
                        caption: caption.charAt(0).toUpperCase() + caption.slice(1),
                        value: caption,
                        order_no: index + 1,
                    })
                })
                let correct = _.filter(this.accepted_answers, (answer) => {
                    return answer.correct;
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

        name: 'definition-answers-check'
    }

</script>