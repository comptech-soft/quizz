<template>
    <div id="quiz-create-container">
        
        <ul class="nav nav-tabs">
            <li :class="{active: current_tab == 'general-infos'}">
                <a 
                    id="_general-infos"
                    href="#general-infos"
                    @click.prevent="onFocusGeneralInfos"
                >
                    <span
                        :class="{active: current_tab == 'general-infos'}"
                    >
                        1. General Infos
                    </span>
                </a>
            </li>

            <li :class="{active: current_tab == 'questions'}">
                <a 
                    id="_questions"
                    href="#questions"
                    @click.prevent="onFocusQuestions"
                >
                    <span
                        :class="{active: current_tab == 'questions'}"
                    >
                        2. Questions
                    </span>
                </a>
            </li>

            <li :class="{active: current_tab == 'save'}">
                <a 
                    id="_save"
                    href="#save"
                    @click.prevent="onFocusReview"
                >
                    <span
                        :class="{active: current_tab == 'save'}"
                    >
                        3. Review and Save
                    </span>
                </a>
            </li>
        </ul>

        <div class="tab-content">

            <tab-general-infos
                @update="onUpdateGeneralInfos"
                :errors="errors"
            >
            </tab-general-infos>

            <tab-questions
                @questions="quiz.questions = $event"
            >
            </tab-questions>

            <tab-save
                :quiz="quiz"
            >
            </tab-save>

        </div>
    
    </div>
</template>

<script>

    /*
    Quiz Create Tab Container
    =========================
    */
    import tabGenaralInfos from './TabGeneralInfos'
    import tabQuestions from './TabQuestions'
    import tabSave from './TabSave'
    
    import veeValidation from './../../../../boot/modules/validation/Validation'

    export default 
    {

        components: 
        {
            'tab-general-infos': tabGenaralInfos,
            'tab-questions': tabQuestions,
            'tab-save': tabSave
        },

    	props:
    	{
    		action: {type: String, required: true}
    	},

        computed:
        {
            errors()
            {
                if(this.vee_validator == null)
                {
                    return null;
                }
                return this.vee_validator.getErrors();
            }
        },

        data()
        {
            return {

                current_tab: 'general-infos',

                vee_validator: null,

                quiz: {
                    name: '',
                    title: '',
                    description: '',
                    image_url: '',
                    time: 0,
                    success_percentage: 100,
                    questions: [],
                }
            };
        },

        methods:
        {

            showTab(id)
            {
                let i = setInterval( () => {
                    if( $('#_' + id).length == 1)
                    {
                        this.current_tab = id;
                        clearInterval(i);
                        $('#_' + id).tab('show');
                    }
                }, 10)

            },

            onFocusGeneralInfos(e)
            {
                this.showTab('general-infos');
            },

            onFocusQuestions(e)
            {

                this.vee_validator.validate({
                    name: this.quiz.name,
                    title: this.quiz.title,
                    description: this.quiz.description,
                    time: this.quiz.time,
                    success_percentage: this.quiz.success_percentage,
                    image_url: this.quiz.image_url,
                }).then( valid => {

                    console.log('Valid >>> ' + valid);
                    if(valid)
                    {
                        this.showTab('questions');
                    }
                })
            },

            onFocusReview(e)
            {
                this.showTab('save');
            },

            onUpdateGeneralInfos(e)
            {
                this.quiz[e.field] = e.value;
            }
        },

        mounted()
        {
            this.vee_validator = new veeValidation({
                name: 'required',
                title: 'required',
                time: 'required',
                success_percentage: 'required',
                description: 'required'
            })


            this.showTab('questions');
        },

        name: 'quiz-create-tabs-container'
    }

</script>

<style scoped lang="scss">
    #quiz-create-container
    {
        margin-top: 20px;

        a
        {
            border-radius: 0px;
            span
            {
                color: #333;
            }

            span.active
            {
                font-weight: bold;
                color: #3d84e6;
            }
        }
    }
</style>