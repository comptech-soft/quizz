<template>
	<div id="match-container" class="match-container row">

        <div class="col-xs-12">
            <div style="background-color: blue; color: yellow; margin-bottom:5px" v-for="ua in user_answer.answer">
                {{ ua }}
            </div>
        </div>

        <div class="col-xs-12 col-sm-4">
            <ul class="list-group">
                <li 
                    v-for="answer in answers"
                    class="list-group-item"
                >
                    {{ answer.caption }}
                </li>
            </ul>
        </div>

        <div class="col-xs-12 col-sm-4">
            <ul class="list-group">
                <li 
                    v-for="answer in answers"
                    class="list-group-item is-snaper is-droppable has-response"
                    :id="'is-droppable-'+answer.id" 
                    :data-answer-id="answer.id"
                >
                    <div 
                        v-if="getAnswerUserResponse(answer) != null"
                        class="is-draggable"
                        :data-response-id="getAnswerUserResponse(answer).id"
                    >
                        {{ getAnswerUserResponse(answer).value }}
                    </div>                   
                </li>
            </ul>
        </div>

        <div class="col-xs-12 col-sm-4">
            <ul class="list-group">
                <li 
                    v-for="response in responses"
                    class="list-group-item"
                >
                    <div 
                        v-if="! responseExists(response)"
                        class="is-draggable"
                        :data-response-id="response.id"
                    >
                        {{ response.value }}
                    </div>

                </li>
            </ul>
        </div>


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
                // selected: '',
                // icheck: null,
                responses: [],
                dragged: null,
            };
        },

        methods:
        {
            shuffleResponses()
            {
                this.responses = _.shuffle(this.answers);
                _.each(this.responses, response => {
                    response['status'] = 'initial';
                })
            },

            makeResponse()
            {
                let r = [];
                $('li.has-response').each( function(i){
                    let jq = $(this).find('div'), response_id = null;
                    if( jq.length == 1)
                    {
                        response_id = jq.data('response-id');
                    }
                    r.push({
                        answer_id: $(this).data('answer-id'),
                        response_id: response_id,
                    })
                })
                return r;
            },

            getAnswerUserResponse(answer)
            {
                let r = _.find(this.user_answer.answer, item => item.answer_id == answer.id)
                if( (r == undefined) || (r.response_id == null) )
                {
                    return null;
                }
                return _.find(this.question.answers, answer => answer.id == r.response_id)
            },

            responseExists(response)
            {
                let r = _.find(this.user_answer.answer, item => item.response_id == response.id)
                return r != undefined;
            },

            draggable()
            {
                let vm = this;
                $('.is-draggable').draggable({
                    containment: '#match-container',
                    cursor: 'move',
                    opacity: 0.5,
                    zIndex: 100,
                    helper: 'clone',
                    revert: 'invalid',
                    revertDuration: 500,
                    start: function(e, ui){
                        vm.dragged = $(this).closest('li');
                        let response_id = $(this).data('response-id');
                        $(this).addClass('is-dragged');
                        let response = _.find(vm.responses, response => response.id == response_id)
                        response.status = 'start';
                        vm.$forceUpdate();
                        console.log('(' + response.value + ', ' + response_id + ', start) >> ');
                    },
                    stop: function(e, ui) {
                        let response_id = $(this).data('response-id');
                        let response = _.find(vm.responses, response => response.id == response_id)
                        $(this).removeClass('is-dragged');
                        if( response.status != 'drop')
                        {
                            response.status = 'initial'
                        }
                        vm.$forceUpdate();
                        console.log('(' + response.value + ', ' + response_id + ', stop) >> ');

                    },
                    drag: function(e, ui){
                    }
              });
            },

            droppable()
            {
                let vm = this;
                $('.is-droppable').droppable({
                    accept: function(droppables){
                        let id = $(this).attr('id');
                        let answer_id = $(this).data('answer-id');
                        let has_answer = $(this).find('div.is-draggable');
                        return has_answer.length == 0;
                    },
                    tolerance: 'pointer',
                    hoverClass: 'is-hovered',
                    activeClass: 'is-activate',

                    drop: function(e, ui)
                    {
                        let response_id = ui.draggable.data('response-id');
                        let response = _.find(vm.responses, response => response.id == response_id)
                        response.status = 'drop';
                        vm.$forceUpdate();
                        console.log('(' + response.value + ', ' + response_id + ', drop) >> ');
                        $(this)
                            .removeClass('is-hovered')
                            .addClass('is-dropped')
                            .append(ui.draggable)
                        ;
                        console.log('Destroy...');
                        $('.is-droppable').droppable('destroy');
                        vm.dragged.addClass('is-droppable');
                        setTimeout(() => {
                            console.log('Recreate...' + $('.is-droppable').length);
                            vm.droppable();
                            vm.$emit('user-answer', {
                                question_id: vm.question.id,
                                answer: vm.makeResponse(),
                            });
                        }, 50);
                    }
                });
            },

            makeDraggable()
            {
                let vm = this, i = setInterval( () => {
                    if($('.is-draggable').length && $('.is-droppable').length)
                    {
                        clearInterval(i);
                        vm.draggable();
                        vm.droppable();
                    }
                }, 100);
            }
        },

        mounted()
        {
            this.shuffleResponses();
            this.makeDraggable();
        },

        name: 'answers-match'
    }

</script>

<style scoped lang="scss">
    .is-draggable
    {
        /*background-color: red;
        color: #fff;*/
       
    }

    .is-droppable
    {
        /*background-color: green;*/
    }

    .is-snaper
    {
       /* height: 20px;
        border:1px solid red;*/
    }

    .is-hovered
    {
       /* border:2px solid #000;*/
    }

    .is-dropped
    {
       /* border:2px solid yellow;*/
    }

    .is-activate
    {
       /* background-color: yellow;*/
    }

    .is-dragged
    {
        font-weight: bold;
        color: #000;
    }
</style>