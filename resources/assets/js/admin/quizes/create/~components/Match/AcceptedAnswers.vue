<template>
    <div class="text-accepted-answers">
        
        <div class="row">

            <!-- Lista cu raspunsuri acceptate -->
            <div class="col-xs-8">
                <strong>Options list</strong>
               
                <div v-if="accepted_answers.length == 0" class="alert alert-danger">
                    No options list items are defined.
                </div>
               
                <div v-else>
                    <ul class="list-group">
                        <li 
                            v-for="(answer, index) in accepted_answers" 
                            :key="'item-' + index"
                            :class="{ 'list-group-item': true}"
                        >
                            <span>
                                {{index + 1}}. {{ answer.caption }} - {{answer.value}}
                            </span>
                            <span class="pull-right">
                                
                                <i 
                                    title="Edit this item" 
                                    class="fa fa-fw fa-pencil"
                                    @click="editItem(answer)"
                                >
                                </i>

                                <i 
                                    title="Delete this item" 
                                    class="fa fa-fw fa-trash-o"
                                    @click="deleteItem(answer)"
                                >
                                </i>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Formularul de adaugare -->
            <div class="col-xs-4">
                <div class="actions">
                    
                    <vue-textbox
                        field="answer_item"
                        placeholder="Answer Item"
                        v-model="answer_item"
                    >
                    </vue-textbox>

                    <vue-textbox
                        field="answer_match"
                        placeholder="Match Item"
                        v-model="answer_match"
                    >
                    </vue-textbox>

                    <button 
                        type="button"
                        class="btn btn-primary"
                        :disabled="(answer_item.trim().length == 0) || (answer_match.trim().length == 0)"
                        @click.prevent="addItem"
                    >
                        {{ action == 'insert' ? 'Add' : 'Save' }}
                    </button>
                </div>
            </div>
        </div>  
    
    </div>
</template>

<script>
    
    export default 
    {

        data()
        {
            return {
                accepted_answers: [],
                answer_item: '',
                answer_match: '',

                action: 'insert',
                answer_old: '',
                match_old: ''
            };
        },

        methods:
        {

            update()
            {
                this.$emit('update', this.accepted_answers)
            },

            addItem()
            {
                if(this.answer_item)
                {
                    if(this.action == 'insert')
                    {
                        this.accepted_answers.push({
                            caption: Strings.capitalizeWords(this.answer_item), 
                            value: Strings.capitalizeWords(this.answer_match),
                        });
                        this.answer_item = '';
                        this.answer_match = '';
                    }
                    else
                    {
                        if(this.action == 'update')
                        {
                            let items = this.accepted_answers;
                            this.accepted_answers = _.map(items, (item) => {
                                if( (item.caption == this.answer_old) && (item.value == this.match_old) )
                                {
                                    return {
                                        caption: Strings.capitalizeWords(this.answer_item), 
                                        value: Strings.capitalizeWords(this.answer_match),
                                    };
                                }
                                return item;
                            })
                            this.action = 'insert';
                            this.answer_old = '';
                            this.answer_item = '';
                            this.match_old = '';
                            this.answer_match = '';
                        }
                    }
                    this.update();
                    $('#answer_item').focus();
                }
            },

            deleteItem(answer)
            {
                let items = this.accepted_answers;
                this.accepted_answers = [];
                let removed = _.remove(items, (item) => { 
                    return (item.caption === answer.caption) && (item.value == answer.value)
                });
                this.accepted_answers = items;
                this.update();
            },

            editItem(answer)
            {
                this.action = 'update';
                
                this.answer_item = answer.caption;
                this.answer_match = answer.value;
                
                this.answer_old = answer.caption;
                this.match_old = answer.value;
                
                this.update();
                $('#answer_item').focus();
            },
        },

        name: 'match-accepted-answers'
    }

</script>


<style scoped lang="scss">
    .text-accepted-answers
    {
        border:1px solid #ccc;
        background-color: #FCFCFC;
        padding: 6px;
        
        .alert
        {
            border-radius: 0px;
            margin-bottom: 6px;
        }
        
        .form-group 
        {
            margin-bottom: 4px;
        }
        
        .actions
        {
            margin-top: 20px;
        }

        .list-group
        {
            margin-bottom: 0px;
            li
            {
                border-radius: 0px;
            }
        }

        i.fa-trash-o
        {
            cursor: pointer;
            &:hover
            {
                color: red;
            }
        }

        i.fa-pencil
        {
            cursor: pointer;
            &:hover
            {
                color: #3d84e6;
            }
        }

        i.fa-thumbs-up
        {
            cursor: pointer;
            &:hover
            {
                color: #2d8c0b !important
            }
        }

        li.correct
        {
            background-color: #effcea !important;
        }

        span.correct
        {
            color: #2d8c0b !important;
            font-weight: bold;
        }
    }
</style>