<template>
    <div id="quiz-create-container">
        
        <!--
            Nav tabs items
        -->
        <ul class="nav nav-tabs">    
            <tab-item
                id="_general-infos"
                href="#general-infos"
                caption="1. General Infos"
                :active="current_tab == 'general-infos'"
                @click="onFocusGeneralInfos"
            >
            </tab-item>

            <tab-item
                id="_questions"
                href="#questions"
                caption="2. Questions"
                :active="current_tab == 'questions'"
                @click="onFocusQuestions"
            >
            </tab-item>

            <tab-item
                id="_save"
                href="#save"
                caption="3. Review and Save"
                :active="current_tab == 'save'"
                @click="onFocusReview"
            >
            </tab-item>
        </ul>

        <!--
            Tabs contents
        -->
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
    import tabItem from './_Blocks/TabItem'

    import tabGenaralInfos from './TabGeneralInfos'
    import tabQuestions from './TabQuestions'
    import tabSave from './TabSave'

    import veeValidation from './../../../../boot/modules/validation/Validation'

    export default 
    {

        components: 
        {
            'tab-item': tabItem,
            'tab-general-infos': tabGenaralInfos,
            'tab-questions': tabQuestions,
            'tab-save': tabSave
        },

    	props:
    	{
    		action: {type: String, required: true}
    	},

        data()
        {
            return {
                current_tab: 'general-infos',
                errors: null,
                general_infos_rules: {
                    name: 'required',
                    title: 'required',
                    time: 'required|min_value:1',
                    success_percentage: 'required|min_value:1|max_value:100',
                    description: 'required'
                },
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

        computed:
        {
            general_infos()
            {
                return {
                    name: this.quiz.name,
                    title: this.quiz.title,
                    description: this.quiz.description,
                    time: this.quiz.time,
                    success_percentage: this.quiz.success_percentage,
                    image_url: this.quiz.image_url,
                }
            }
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
                this.errors = null;
                let generalInfosValidator = new veeValidation(this.general_infos_rules);
                generalInfosValidator.validate(this.general_infos).then( valid => {
                    if(valid)
                    {
                        this.showTab('questions');
                    }
                    else
                    {
                        this.errors = generalInfosValidator.getErrors();
                    }
                })
            },

            onFocusReview(e)
            {
                this.errors = null;
                let generalInfosValidator = new veeValidation(this.general_infos_rules);
                generalInfosValidator.validate(this.general_infos).then( valid => {
                    if(valid)
                    {
                        let questionsValidator = new veeValidation({
                            questions: 'required|min_value:1'
                        });
                        questionsValidator.validate({
                            questions: this.quiz.questions.length
                        }).then( valid => {
                            if(valid)
                            {
                                this.showTab('save');
                            }
                            else
                            {
                                this.showTab('questions');
                            }
                        })                        
                    }
                    else
                    {
                        this.showTab('general-infos');
                        this.errors = generalInfosValidator.getErrors();
                    }
                })
            },

            onUpdateGeneralInfos(e)
            {
                this.quiz[e.field] = e.value;
            }
        },

        name: 'quiz-create-tabs-container'
    }

</script>