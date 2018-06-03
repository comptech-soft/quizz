<template>
	<div class="quiz-questions">

        <div class="row">
            <div class="col-xs-12">
                <div class="questions-toolbar">
                    <button 
                        type="button" 
                        class="btn btn-primary"
                        @click="showAddform"
                    >
                        <i class="fa fa-fw fa-plus"></i> 
                        Add a question
                    </button>

                    <div class="pull-right">
                        <button type="button" class="btn btn-default" @click="$emit('close')">Close questions list</button>
                    </div>

                </div>
            </div>
        </div>

        <div class="row">
            <div v-if="loading" class="col-xs-12">
                <i class="fa fa-spinner fa-spin"></i> Loading...
            </div>
        </div>

        <div class="row">
            <div 
                v-for="(question, index) in questions"
                class="col-xs-12 col-sm-6"
            >
                <div class="question-container">
                    
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="question-body">
                                <h5>
                                    <img :src="'/images/question-types/' + question.type + '.png'" style="width: 48px"/>
                                    Question {{question.order_no}} from {{questions.length}}
                                    <div class="pull-right" style="text-align: right">
                                        <div>
                                            Points: <span class="badge">{{question.points}}</span>
                                        </div>
                                        <div style="margin-top:4px;">
                                            <button 
                                                class="btn btn-xs btn-primary"
                                                style="font-family:  'Lato', sans-serif"
                                                @click="onClickEditQuestion(question)"
                                            >
                                                <i class="fa fa-fw fa-pencil"></i>
                                                Edit
                                            </button>

                                            <button 
                                                class="btn btn-xs btn-danger"
                                                style="font-family:  'Lato', sans-serif"
                                                @click="onClickDeleteQuestion(question)"
                                            >
                                                <i class="fa fa-fw fa-trash-o"></i>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </h5>
                                <div v-html="question.question">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-12">
                            <component
                                :is="'answers-' + question.type"
                                :answers="question.answers"
                                :correct="question.correct_answer"
                            >
                            </component>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-12 col-sm-8">
                            <div class="question-answer-description">
                                <h5>
                                    Explanation
                                </h5>
                                <div v-if="question.answer_description" v-html="question.answer_description">
                                </div>
                                <div v-else>
                                    -
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-4">
                            <div class="question-answer-image">
                                <h5>
                                    Answer image
                                </h5>
                                <div v-if="question.answer_image_url">
                                        <img :src="question.answer_image_url" class="img-responsive" />
                                </div>
                                <div v-else>
                                    -
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <vue-modal
            id="question-modal-form"
            :visible="form.visible"
            @close="hideQuestionForm"
        >

            <h4 slot="header">
                {{ form_header_caption }}
            </h4>

            <div slot="body">
                <question-form
                    :quiz="form.quiz"
                    :question="form.question"
                    :action="form.action"
                    :errors="errors"
                    @update="onUpdateQuestion"
                >
                </question-form>
            </div>

            <div slot="footer">
                <button
                    class="btn btn-primary"
                    @click="saveQuestion"
                >
                    <i class="fa fa-fw fa-save"></i>
                    {{ form_action_caption }}
                </button>

                <button
                    class="btn btn-default"
                    @click="hideQuestionForm"
                >
                    <i class="fa fa-fw fa-times"></i>
                    Cancel
                </button>
            </div>
        </vue-modal>
    </div>
</template>

<script>

    import UniformHeight from './../../../../../boot/modules/jquery/UniformHeight'

    import vueAnswerText from './Answer/Text'
    import vueAnswerRadio from './Answer/Radio'
    import vueAnswerCheck from './Answer/Check'
    import vueAnswerMatch from './Answer/Match'

    import vueQuestionForm from './Question/Form'

    import veeValidation from './../../../../../boot/modules/validation/Validation'

    export default 
    {

        components:
        {
            'answers-text': vueAnswerText,
            'answers-radio': vueAnswerRadio,
            'answers-check': vueAnswerCheck,
            'answers-match': vueAnswerMatch,
            'question-form': vueQuestionForm,
        },

    	props:
    	{
    		record: {required: true},
    	},

        data()
        {
            return {
                questions: [],
                loading: false,

                paginate: {
                    per_page: 12
                },

                form: {
                    visible: false,
                    action: '',
                    quiz: null,
                    question: null,
                },

                errors: null,
            };
        },

        computed:
        {
            form_header_caption()
            {
                if( ! this.form.visible )
                {
                    return '';
                }
                return this.record.title + ' - ' + (this.form.action == 'insert' ? ' Adding a new question' : 'Edit question')
            },

            form_action_caption()
            {
                if( ! this.form.visible )
                {
                    return '';
                }
                return (this.form.action == 'insert' ? 'Add' : 'Save')
            }
        },

        methods:
        {

            getRules()
            {
                let r = {
                    type: 'required|not_in:-',
                    order_no: 'required|min_value:1',
                    points: 'required|min_value:1',
                    question_body: 'required',
                    correct_answer: 'required',
                    answers: 'required|min_value:1',
                }
                return r;
            },

            getValidateData()
            {
                let r = {};
                if(this.form.question != null)
                {
                    r = {
                        type: this.form.question.type,
                        order_no: this.form.question.order_no,
                        points: this.form.question.points,
                        question_body: this.form.question.question,
                        correct_answer: this.form.question.correct_answer,
                        answers: this.form.question.answers.length,
                    }
                }
                else
                {
                    r = {
                        type: '-',
                        order_no: 0,
                        points: 0,
                        question_body: '',
                        correct_answer: '',
                        answers: 0,
                    }
                }
                return r;
            },

            getQuestion()
            {
                let r = this.form.question;
                r['quiz_id'] = this.record.id;
                return r;
            },

            uniform(selector, length)
            {
                let i = setInterval( () => {
                    if($(selector).length == length)
                    {
                        clearInterval(i);
                        let uniform_body_height = new UniformHeight(selector);
                        uniform_body_height.uniform();
                    }
                }, 500);
            },

            afterPopulate(r)
            {
                this.questions = r.data;
                this.loading = false;
                this.uniform('.question-container', this.questions.length);
            },

            afterShowForm()
            {
                $('body').addClass('modal-open');
                let i = setInterval( () => {
                    if( $('#order_no').length == 1)
                    {
                        clearInterval(i);
                        $('#order_no').focus();
                    }
                }, 100);   
            },

            showAddform()
            {
                this.form = {visible: true, action: 'insert', quiz: this.record, question: null}
                this.afterShowForm();             
            },

            hideQuestionForm()
            {
                this.form = {visible: false, action: '', quiz: null, question: null}
                $('body').removeClass('modal-open');
            },

            onClickEditQuestion(question)
            {
                this.form = {visible: true, action: 'update', quiz: this.record, question: question}  
                this.afterShowForm(); 
            },

            onClickDeleteQuestion(question)
            {
                alert('Delete question >>> ' + question.id);
            },

            onUpdateQuestion(e)
            {
                this.form.question = e; 
            },

            saveQuestion()
            {
                let validator = new veeValidation(this.getRules());
                validator.validate(this.getValidateData()).then( valid => {
                    if( valid )
                    {
                        Requests.post('admin/quizes/questions/insert', {
                            question: this.getQuestion(),
                            action: this.form.action,
                        })
                            .then( r => {
                                console.log(r);
                                alert('After save...');
                            });
                    }
                    else
                    {
                        this.errors = validator.getErrors();
                    }
                });
            },

            populate()
            {
                this.loading = true;
                Requests.post('admin/quizes/questions/populate', {
                    per_page: this.paginate.per_page,
                    quiz_id: this.record.id,
                })
                    .then(r => {
                        this.afterPopulate(r.data);
                    })
            },

        },

        mounted()
        {
            this.populate();
        },

        name: 'quiz-questions'
    }

</script>