<template>
	<div class="question-answers-component">
        
        <div class="row">
            <div class="col-xs-12" v-if="correct_answer.length > 0">
                <h4>
                    Options
                </h4>
                <div
                    class="accepted-answer-item"
                    v-for="(answer, index) in correct_answer"
                >
                    <div class="answer-item">
                        <span
                            v-if="answer.is_correct"
                        >
                            <i class="fa fa-fw fa-check"></i>
                        </span>
                        <span
                            v-else
                        >
                            <i class="fa fa-fw fa-ban"></i>
                        </span>
                            {{ answer.item }} 
                        <div class="pull-right answer-actions">
                            
                            <i 
                                v-if="! answer.is_correct"
                                title="Make this the correct option" 
                                class="fa fa-fw fa-check"
                                @click="makeCorrectOption(answer)"
                            >
                            </i>

                            <i 
                                v-else
                                title="Make this the correct option" 
                                class="fa fa-fw fa-ban"
                                @click="makeCorrectOption(answer)"
                            >
                            </i>

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
                    Options
                </h4>

                <div class="alert alert-info">
                    No options defined
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
                    {{ list_action == 'insert' ? 'Adding new option' : 'Editing option' }}
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
                let answers = _.map(this.correct_answer, (element, index) => {
                    return {
                        caption: element.item,
                        value: element.item.toLowerCase(),
                        order_no: index + 1,
                    }
                });
                let correct_answer = _.filter(this.correct_answer, (element) => {return element.is_correct});
                this.$emit('update', {
                    answers: answers,
                    correct_answer: correct_answer,
                });
            },

            insertItem()
            {
                this.correct_answer.push({ 
                    item: this.answer_item,
                    is_correct: false,
                });
                this.answer_item = '';
                this.updateQuestion();
                $('#answer_item').focus();
            },

            updateItem()
            {
                let items = this.correct_answer;
                this.correct_answer = _.map(items, (answer) => {
                    if( answer.item == this.answer_old )
                    {
                        return {
                            item: this.answer_item,
                            is_correct: answer.is_correct,
                        }
                    }
                    return answer;
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
                    content: 'Are you sure you want delete the option <strong>' + answer.item + '</strong>?',
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
                this.answer_item = answer.item;
                this.answer_old = answer.item;
                $('#answer_item').focus();
            },

            makeCorrectOption(answer)
            {
                answer.is_correct = ! answer.is_correct;
                this.updateQuestion();
            }
        },

        mounted()
        {
            if( this.action == 'update') 
            {
                this.answers = this.question.answers;
                this.correct_answer = this.question.correct_answer;
            }
            else
            {
            }
        },

        name: 'question-answers-check'
    }

</script>