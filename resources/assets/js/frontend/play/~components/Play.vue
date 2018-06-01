<template>
	
    <div v-if="ready">
        <div 
            id="get-player-infos" 
            v-if="gettting_player_infos"
        >
            <!-- Contestant panel -->
            <div class="panel panel-default">    
                
                <!-- Panel Heading -->
                <div class="panel-heading">
                    <h4>
                        {{ $t('play.player-caption') }}
                    </h4>
                </div>

                <!-- Panel body -->
                <div class="panel-body">
                    
                    <div class="row row-info">
                        <div class="col-xs-12">
                            <div class="alert alert-info">
                                <img src="/images/1.png" alt="">
                                <span class="info-message">
                                    {{ $t('play.player-info') }}
                                </span>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>

                    <div id="person-infos-container">
                        <div class="row">
                            <!-- Name -->
                            <div class="col-xs-12 col-sm-5">
                                <vue-textbox
                                    field="first_name"
                                    :label="$t('play.form.labels.first_name')"
                                    v-model="player.first_name"
                                    :errors="errors"
                                >
                                </vue-textbox>
                            </div>

                            <!-- Surname -->
                            <div class="col-xs-12 col-sm-5">
                                <vue-textbox
                                    field="last_name"
                                    :label="$t('play.form.labels.last_name')"
                                    v-model="player.last_name"
                                    :errors="errors"
                                >
                                </vue-textbox>
                            </div>

                            <!-- class -->
                            <div class="col-xs-12 col-sm-2">
                                <vue-textbox
                                    field="class"
                                    :label="$t('play.form.labels.class')"
                                    v-model="player.class"
                                    :errors="errors"
                                >
                                </vue-textbox>
                            </div>

                        </div>

                        <div class="row">
                            <!-- Email -->
                            <div class="col-xs-12 col-sm-12">
                                <vue-textbox
                                    field="email"
                                    :label="$t('play.form.labels.email')"
                                    v-model="player.email"
                                    :errors="errors"
                                >
                                </vue-textbox>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="panel-footer">
                    <button
                        class="btn btn-primary"
                        :disabled="(errors != null) && (errors.items.length > 0)"
                        @click="onClickStartContest"
                    >
                        {{ $t('play.form.labels.start-contest') }}
                    </button>
                </div>
            </div>
        </div>

        <div
            v-else
        >

            <div
                v-if="! loading && (0 < responses.length)"
                class="alert alert-success"
                style="margin-bottom: 30px"
            >
                <h4>
                    {{ $t('play.finish.header') }}
                </h4>
                <div class="row-info">
                    <img src="/images/1.png" alt="">
                    <span class="info-message">
                        {{ $t('play.finish.body') }}
                    </span>
                    <div class="clearfix"></div>
                </div>
            </div>

            <vue-response-report
                v-if="! loading && (0 < responses.length)"
                :record="record"
                :responses="responses"
                :solving="solving"
            >
            </vue-response-report>

            <div 
                v-if="! loading && (responses.length == 0)" 
                class="panel panel-default"
            >
                <!-- Heading -->
                <div class="panel-heading">
                    <div class="row">
                        <div class="col-xs-8">
                            <h3 class="panel-title">
                                {{ user_infos }}
                            </h3>
                        </div>
                        <div class="col-xs-4 text-right">
                            <i class="fa fa-fw fa-clock-o"></i>
                            {{ clock }}
                        </div>
                    </div>
                </div>

                <!-- Body -->
                <div class="panel-body">
                    <div id="plaing-container">
                        <vue-play-quiz
                            :record="record"
                            :user_answers="user_answers"
                            :current="current"
                            @user-answer="onUserAnswer"
                        >
                        </vue-play-quiz>
                    </div>
                </div>

                <!-- Footer -->
                <div class="panel-footer" id="questions-actions">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="btn-group pull-left">
                                <button
                                    class="btn btn-success"
                                    @click="restart"
                                >
                                    {{ $t('play.actions.restart') }}
                                </button>
                            </div>

                            <div class="btn-group pull-right">
                                <!-- Previous -->
                                <button 
                                    v-if="current > 0"
                                    type="button" 
                                    class="btn btn-primary"
                                    :disabled="current == 0"
                                    style="margin-right:4px"
                                    @click="prev"
                                >
                                    <i class="fa fa-fw fa-chevron-left"></i>
                                    {{ $t('play.actions.prev') }}
                                </button>
                                <!-- Next -->
                                <button
                                    v-if="current < this.questions.length - 1" 
                                    type="button" 
                                    class="btn btn-primary"
                                    @click="next"
                                >
                                    {{ $t('play.actions.next') }}
                                    <i class="fa fa-fw fa-chevron-right"></i>
                                </button>
                                <!-- Finish -->
                                <button
                                    v-if="current == this.questions.length - 1" 
                                    type="button" 
                                    class="btn btn-success"
                                    @click="finish"
                                >
                                    <i class="fa fa-fw fa-flag-checkered"></i>
                                    {{ $t('play.actions.finish') }}
                                </button>
                            </div>
                        </div>                
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

    import vuePlayQuiz from './../../quiz-detail/~components/_PlayQuiz'
    import vueResponseReport from './../../quiz-detail/~components/_ResponseReport'

    import veeValidation from './../../../boot/modules/validation/Validation'

    export default 
    {

        components:
        {
            'vue-play-quiz': vuePlayQuiz,
            'vue-response-report': vueResponseReport
        },

        computed:
        {

            ready()
            {
                return Quizz.$store.getters.ready
            },

            locale()
            {
                return Quizz.$store.getters.config.locale
            },

            user_infos()
            {
                return this.user.first_name + ', ' + this.user.last_name + ', ' + this.user.class + ', ' + this.user.email
            },

            record()
            {
                return {
                    title: this.user_infos,
                    questions: this.questions,
                    total_available_points: _.sumBy(this.questions, function(o) { return o.points; }),
                    success_percentage: null,
                }
            },

            solving()
            {
                return {
                    total_real_points: _.sumBy(this.responses, function(o) { return o.points; }),
                }
            },

            errors()
            {
                if(this.validator == null)
                {
                    return null;
                }
                return this.validator.getErrors();
            }
        },

        data()
        {
            return {
                gettting_player_infos: true,
                loading: false,

                validator: null,

                player: {
                    first_name: 'Popescu',
                    last_name: 'Leordel',
                    class: Math.random().toString(36).substring(10, 11),
                    email: 'popescu_' + Math.random().toString(36).substring(10, 13) + '@yahoo.com',
                    password: Math.random().toString(36).substring(10),
                },

                // player: {
                //     first_name: '',
                //     last_name: '',
                //     class: '',
                //     email: '',
                //     password: Math.random().toString(36).substring(2),
                // },

                user: null,
                questions: null,
                contest: null,

                clock: '00:00:00',
                timer: null,

                responses: [],
                user_answers: [],
                current: 0,
            };
        },

        watch: 
        {
            'player.first_name': function(newValue, oldValue)
            {
                this.validator.validateField('first_name', newValue);
            },

            'player.last_name': function(newValue, oldValue)
            {
                this.validator.validateField('last_name', newValue);
            },

            'player.class': function(newValue, oldValue)
            {
                this.validator.validateField('class', newValue);
            },

            'player.email': function(newValue, oldValue)
            {
                this.validator.validateField('email', newValue);
            }
        },

        methods:
        {

            /*
            | Cand se face click pe butonul start contest.
            | Se reseteaza erorile formularului si se reface validarea datelor
            | In caz de succes, se apeleaza "startContest"
            | In caz de eroare, se seteaza erorile formularului pentru afisare.
            */
            onClickStartContest()
            {
                this.validator.removeErrors();
                this.validator.validate(this.player).then( valid => {
                    if(valid)
                    {
                        this.startContest();
                    }
                })
            },

            prepareUserAnswers()
            {
                let vm = this
                _.each(this.questions, question => {

                    let answer = null;
                    switch(question.type)
                    {
                        case 'text':
                        case 'radio':
                            answer = '';
                            break;
                        case 'check':
                        case 'match':
                            answer = [];
                            break;
                    }

                    vm.user_answers.push({
                        question_id: question.id,
                        answer: answer
                    })
                })
            },

            startContest()
            {
                this.loading = true;
                let vm = this;
                Requests.post('/play-quiz/start-contest', {player: this.player})
                    .then( r => {
                        this.user = r.data.user;
                        this.questions = r.data.questions;
                        this.contest = r.data.contest;
                        this.prepareUserAnswers();
                        this.gettting_player_infos = false;
                        this.loading = false;

                        this.timer = new Timer();
                        this.timer.start({});
                        this.timer.addEventListener('secondsUpdated', function(e) {
                            vm.clock = vm.timer.getTimeValues().toString();
                        });
                    })
                ;
            },

            onUserAnswer(e)
            {
                for(let i = 0; i < this.user_answers.length; i++)
                {
                    if( this.user_answers[i].question_id == e.question_id )
                    {
                        this.user_answers[i] = {
                            question_id: e.question_id,
                            answer: e.answer
                        }
                        break;
                    }
                }
                this.$forceUpdate();
            },

            restart()
            {
                let vm = this;
                $.confirm({
                    title: this.$t('play.modals.restart.title'),
                    content: this.$t('play.modals.restart.content'),
                    buttons: {
                        restart: {
                            text: this.$t('play.modals.restart.yes'),
                            btnClass: 'btn-blue',
                            action: function(){
                                vm.current = 0;
                                vm.user_answers = [];
                                vm.prepareUserAnswers();
                                vm.timer.reset();
                                vm.$forceUpdate();
                            }
                        },
                        cancel: {
                           text: this.$t('play.modals.restart.no'),
                        },
                    }
                });
            },

            next()
            {
                if( this.current < this.questions.length - 1)
                {
                    this.current++;
                }
            },

            prev()
            {
                if(this.current > 0)
                {
                    this.current--;
                }
            },

            finish()
            {
                let vm = this;
                $.confirm({
                    title: this.$t('play.modals.finish.title'),
                    content: this.$t('play.modals.finish.content'),
                    buttons: {
                        finish: {
                            text: this.$t('play.modals.finish.yes'),
                            btnClass: 'btn-blue',
                            action: function(){
                                vm.sendResponses();
                            }
                        },
                        cancel: {
                            text: this.$t('play.modals.finish.no'),
                        },
                    }
                });
            },

            sendResponses()
            {
                let vm = this
                vm.sending_responses = true;
                Requests.post('play-quiz/send-responses', {
                    user: this.user,
                    user_answers: this.user_answers,
                    contest_id: this.contest.id,
                })
                    .then(r => {

                        console.log(r);
                        vm.responses = r.data.responses;
                    })
            },
        },

        mounted()
        {
            let vm = this, i = setInterval(() => {
                if(vm.ready)
                {
                    clearInterval(i);
                    vm.validator = new veeValidation({
                        first_name: 'required',
                        last_name: 'required',
                        class: 'required',
                        email: 'required|email|unique:users,email',
                    }, vm.locale);
                }
            }, 10);
        },

        name: 'play'

    }

</script>


<style lang="scss" scoped>
    .panel-body
    {
        padding: 0px;

        .row-info
        {
            .alert-info
            {
                margin-bottom: 20px;
                border-left: none;
                border-right: none;
                border-top: none;
            }
        }

        #person-infos-container, #plaing-container
        {
            padding: 0px 15px 20px 15px;
        }
    }

    .row-info
    {
        img
        {
            width: 64px;
            height: 64px;
            float: left;
            display: block;
        }

        span.info-message
        {
            display: block;
            width: calc(100% - 64px);
            padding: 0px 10px;
            float: left;
        }
    }

</style>