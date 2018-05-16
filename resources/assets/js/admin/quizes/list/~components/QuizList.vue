<template>
    <div class="row" id="quizes-list-component">

        <div class="col-xs-12 col-quizes-toolbar">
            <a id="btn-new-quiz" class="btn btn-primary" href="/admin/quizes/new">
                Create a new quiz
            </a>
        </div>

        <div v-if="loading" class="col-xs-12">
            <i class="fa fa-spinner fa-spin"></i> Loading...
        </div>
        <div class="col-xs-12">            
            <div 
                v-for="(record, index) in records"
                class="quiz-render-item"
            >
                <quiz-title
                    :record="record"
                    :index="index"
                >
                </quiz-title>

                <div v-if="form.visible && (record.id == form.record.id)">
                    <quiz-form
                        :record="form.record"
                        @update="update"
                        @cancel="hideForm"
                    >
                    </quiz-form>
                </div>

                <div v-else>
                    

                    <quiz-details
                        :record="record"
                    >
                    </quiz-details>
                    
                    <quiz-actions 
                        v-if="! form.visible"
                        :record="record"
                        @click="onClick"
                    >
                    </quiz-actions>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>

    import vueQuizTitle from './Item/Title'
    import vueQuizDetails from './Item/Details'
    import vueQuizActions from './Item/Actions'
    import vueQuizForm from './Item/Form'

    export default 
    {

        components:
        {
            'quiz-title': vueQuizTitle,
            'quiz-details': vueQuizDetails,
            'quiz-actions': vueQuizActions,
            'quiz-form': vueQuizForm
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
                loading: false,
                records: [],

                paginate: {
                    per_page: 10
                },

                orderBy: [{
                    field: 'created_at',
                    direction: 'desc',
                }],

                form: {
                    visible: false,
                    record: null,
                }
            };
        },

        methods:
        {
            onClick(e)
            {
                this['onClick' + Strings.capitalize(e.action)](e.record);
            },

            onClickDelete(record)
            {
                let vm = this;
                $.confirm({
                    title: 'Confirm quiz deletion ',
                    content: 'Are you sure you want delete the quiz?',
                    buttons: {
                        finish: {
                            text: 'Delete',
                            btnClass: 'btn-red',
                            action: function(){
                                vm.delete(record);
                            }
                        },
                        cancel: {
                            text: 'Cancel',
                        },
                    }
                });
            },

            onClickEdit(record)
            {
                this.form.visible = true;
                this.form.record = record;
            },

            hideForm()
            {
                this.form.visible = false;
                this.form.record = null;
            },

            delete(record)
            {
                Requests.post('admin/quizez/delete', {
                    id: record.id
                })
                    .then(r => {
                        $.notify('The quiz was deleted.', "success");
                        this.populate();
                    })
            },

            update(e)
            {
                if( e.success )
                {
                    let records = _.map(this.records, (record) => {
                        if(record.id == e.record.id)
                        {
                            return e.record;
                        }
                        return record;
                    })
                    this.records = records;
                    this.hideForm();
                    this.populate();
                    $.notify(e.notification.message, "success");
                }
            },

            afterPopulate(r)
            {
                this.records = r.data;

                this.loading = false;
            },

            populate()
            {
                this.loading = true;
                Requests.post('admin/quizez/populate', {
                    per_page: this.paginate.per_page,
                    orderBy: this.orderBy,
                })
                    .then(r => {
                        this.afterPopulate(r.data);
                    })
            }
        },

        mounted()
        {
            this.populate();
        },

        name: 'quizes-list'
    }

</script>