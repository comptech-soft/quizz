<template>
	<div class="user-response-match-container">
        <ul class="list-group">
            <li 
                v-for="answer in answers"
                class="list-group-item"
            >
                <span
                    :class="{
                        'is-correct': correct_answer[answer.caption ] == getUserResponse(answer.id),
                        'is-wrong': correct_answer[answer.caption ] != getUserResponse(answer.id)
                    }"
                >
                    {{ answer.caption }}
                </span>
                <span 
                    v-if="getUserResponse(answer.id)" 
                    :class="{
                        badge: true,
                        'badge-is-correct': correct_answer[answer.caption ] == getUserResponse(answer.id),
                        'badge-is-wrong': correct_answer[answer.caption ] != getUserResponse(answer.id)
                    }">
                    {{ getUserResponse(answer.id) }}
                </span>
            </li>
        </ul>
    </div>
</template>

<script>

    export default 
    {

    	props:
    	{
    		user_answer: {required: true},
            question: {required: true},
            correct: {required: true},
    	},

        computed:
        {
            correct_answer()
            {
                return JSON.parse(this.correct)
            },

            answers()
            {
                return this.question.answers;
            }
        },

        methods:
        {
            getUserResponse(answer_id)
            {
                let r = _.find(this.user_answer, (item) => item.answer_id == answer_id);
                if( r == undefined )
                {
                    return '';
                }
                let response = _.find(this.answers, (item) => item.id == r.response_id);
                if( response == undefined )
                {
                    return '';
                }
                return response.value;
            }
        },

        name: 'user-answer-match'
    }

</script>