<template>
	<div class="question-answers-component">
        
        <div class="row">
            <div class="col-xs-12" v-if="correct_answer.length > 0">
                <h4>
                    Accepted Answers
                </h4>
                <div
                    class="accepted-answer-item"
                    v-for="(answer, index) in correct_answer"
                >
                    <div class="answer-item">
                        {{ answer }}
                        <div class="pull-right answer-actions">
                            
                            <i class="fa fa-fw fa-pencil" @click="editItem(answer)">
                            </i>

                            <i class="fa fa-fw fa-trash-o" @click="deleteItem(answer)">
                            </i>
                        </div>
                    </div>
                </div>
                <div class="clearfix">
                </div>
            </div>

            <div v-else class="col-xs-12">
                <h4>
                    Accepted Answers
                </h4>

                <div class="alert alert-info">
                    No accepted items defined
                </div>
                
                <div class="has-error" v-if="correct_answer_error">
                    <span 
                        class="help-block"
                        v-html="correct_answer_error"
                    >
                    </span>
                </div>
            </div>
        </div>

        
        <div class="row">
            <div class="col-xs-12">
                <h4>
                    {{ list_action == 'insert' ? 'Adding new accepted item' : 'Editing accepted item' }}
                </h4>
                <vue-textbox
                    field="answer_item"
                    placeholder="Answer Item"
                    v-model="answer_item"
                >
                </vue-textbox>
                <button 
                    type="button"
                    class="btn btn-primary"
                    :disabled="answer_item.length == 0"
                    style="margin-top: 4px;"
                    @click.prevent="saveItem"
                >
                    {{ list_action == 'insert' ? 'Add' : 'Save' }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>

    import answersMix from './~mixins.js';

    export default 
    {
        mixins: [
            answersMix
        ],

        methods:
        {

            updateQuestion()
            {
                this.$emit('update', {
                    answers: this.answers,
                    correct_answer: this.correct_answer.join(', '),
                });
            },

            

            insertItem()
            {
                this.correct_answer.push(this.answer_item);
                this.answer_item = '';
                this.updateQuestion();
                $('#answer_item').focus();
            },

            updateItem()
            {
                let items = this.correct_answer;
                this.correct_answer = _.map(items, (item) => {
                    if( item == this.answer_old )
                    {
                        return this.answer_item;
                    }
                    return item;
                })
                this.list_action = 'insert';
                this.answer_old = '';
                this.answer_item = '';
                this.updateQuestion();
                $('#answer_item').focus();
            },

            deleteItem(answer)
            {
                let vm = this;
                $.confirm({
                    title: '',
                    content: 'Are you sure you want delete the item <strong>' + answer + '</strong>?',
                    buttons: {
                        finish: {
                            text: 'Delete',
                            btnClass: 'btn-red',
                            action: function(){
                                let items = vm.correct_answer;
                                vm.correct_answer = [];
                                let removed = _.remove(items, (item) => { 
                                    return item === answer
                                });
                                vm.correct_answer = items;
                                vm.updateQuestion();
                            }
                        },
                        cancel: {
                            text: 'Cancel',
                        },
                    }
                });
            },

            editItem(answer)
            {
                this.list_action = 'update';
                this.answer_item = answer;
                this.answer_old = answer;
                $('#answer_item').focus();
            }
        },

        mounted()
        {
            if( this.action == 'update') 
            {
                this.answers = this.question.answers;
                this.correct_answer = this.question.correct_answer.split(', ');
            }
            else
            {
                this.answers = [{
                    caption: 'Type your answer',
                    value: null,
                    order_no: 1,
                }];
            }
        },

        name: 'question-answers-text'
    }

</script>