<template>
    <div class="text-accepted-answers">
        
        <div class="row">
            <div class="col-xs-12">
                <div class="alert alert-info">
                    <strong>
                        <i class="fa fa-info">
                        </i>
                    </strong>
                    Here you can define the accepted answers!
                </div>
            </div>
        </div>

        <div class="row">

            <!-- Lista cu raspunsuri acceptate -->
            <div class="col-xs-8">
                <strong>Accepted items list</strong>
               
                <div v-if="accepted_answers.length == 0" class="alert alert-danger">
                    No accepted answers items defined.
                </div>
               
                <div v-else>
                    <ul class="list-group">
                        <li 
                            v-for="(answer, index) in accepted_answers" 
                            class="list-group-item"
                            :key="'item-' + index"
                        >
                            {{index + 1}}. {{ answer }}
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

                    <button 
                        type="button"
                        class="btn btn-primary"
                        :disabled="answer_item.length == 0"
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

        components: 
        {
            
        },

    	props:
    	{
    		
    	},

        computed:
        {

        },

        data()
        {
            return {
                accepted_answers: [],
                answer_item: '',

                action: 'insert',
                answer_old: ''
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
                        this.accepted_answers.push(this.answer_item);
                        this.answer_item = '';
                    }
                    else
                    {
                        if(this.action == 'update')
                        {
                            let items = this.accepted_answers;
                            this.accepted_answers = _.map(items, (item) => {
                                if( item == this.answer_old )
                                {
                                    return this.answer_item;
                                }
                                return item;
                            })
                            this.action = 'insert';
                            this.answer_old = '';
                            this.answer_item = '';
                        }
                    }
                    this.update();
                }
            },

            deleteItem(answer)
            {
                let items = this.accepted_answers;
                this.accepted_answers = [];
                let removed = _.remove(items, (item) => { 
                    return item === answer
                });
                this.accepted_answers = items;
                this.update();
            },

            editItem(answer)
            {
                this.action = 'update';
                this.answer_item = answer;
                this.answer_old = answer;
                $('#answer_item').focus();
            }
        },

        name: 'text-accepted-answers'
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
    }
</style>