<template>
    <div v-if="ready" class="container">

        <div class="navbar-header">
            <!-- Button for smallest screens -->
            <button 
                type="button" 
                class="navbar-toggle" 
                data-toggle="collapse" 
                data-target=".navbar-collapse"
            >
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            
            <a 
                class="navbar-brand" 
                :href="config.base_url"
            >
                <img :src="config.logo" alt="Quizz Logo" />
            </a>
        </div>

        <div class="navbar-collapse collapse">

            <ul id="main-nav" class="nav navbar-nav pull-right mainNav">

                <li v-if="user" id="hello-item" class="no-option-item">
                    Hi {{user.username}}
                </li>

                <li
                    v-for="bar in options" 
                    :class="{active: (current != null) && (bar.id == current.id) }"
                >
                    <a 
                        href="#"
                        @click.prevent="onBar(bar)"
                    >
                        {{ bar.caption }}
                    </a>
                </li>
            </ul>

        </div>

        <vue-modal
            v-if="visible"
            :visible="visible"
            :id="current.id"
            @close="onCloseModal"
        >
            <h2 slot="header">
                {{ current.caption }}
            </h2>

            <div slot="body">

                <vue-alert
                    v-if="notification != null"
                    :type="notification.type"
                    @close="notification=null"
                >
                    <div slot="body">
                        {{notification.message}}
                    </div>
                </vue-alert>

                <component 
                    :is="current.id + 'form'"
                    :rules="rules[current.id]"
                    :endpoint="endpoint[current.id]"
                    :app="app"
                    @start-submiting="notification=null"
                    @end-submiting="onEndSubmiting"
                >
                </component>
            </div>
        </vue-modal>
    </div>
    <i v-else class="fa fa-spinner fa-spin"></i>
</template>

<script>

    import vueLogin from './components/LoginForm'
    import vueRegister from './components/RegisterForm'
    
    export default 
    {

        components:
        {
            'loginform': vueLogin,
            'registerform': vueRegister,
        },

    	props:
    	{
    		app: {required: true}
    	},

        data()
        {
            return {
                modal_visible: false,

                notification: null,
            }
        },

        computed:
        {
            ready()
            {
                return Quizz.$store.getters.ready
            },

            user()
            {
                return Quizz.$store.getters.user
            },

            options()
            {
                return Quizz.$store.getters.navbar.options
            }, 

            current()
            {
                return Quizz.$store.getters.navbar.current
            },  

            config()
            {
                return Quizz.$store.getters.config
            }, 

            visible()
            {
                if( this.current == null)
                {
                    return false;
                }
                return this.modal_visible;
            },

            rules()
            {
                return {
                    login: {
                        email: 'required|email',
                        password: 'required',
                    },

                    register: {

                    }
                }
            },

            endpoint()
            {
                return {
                    login: 'login',
                    register: 'register'
                }
            }  

        },

        
        methods:
        {
            onClicklogin(bar)
            {
                this.modal_visible = true;
            },

            onClickregister(bar)
            {
                this.modal_visible = true;
            },

            onClicklogout(bar)
            {
                if(this.app == 'frontend')
                {
                    Requests.post('logout').then(r => {
                        alert(r.data.url);
                        Requests.redirect(r.data.url)
                    })
                }
                else
                {
                    Requests.post('admin/logout').then(r => {
                        alert(r.data.url);
                        Requests.redirect(r.data.url)
                    })
                }
            },

            onClickquizz(bar)
            {
                Requests.redirect('quiz')
            },

            onBar(bar)
            {
                Quizz.$store.dispatch('setCurrentNavbar', bar);
                this['onClick' + bar.id](bar);
            },

            onCloseModal(e)
            {
                this.modal_visible = false
                Quizz.$store.dispatch('setCurrentNavbar', null);
            },

            onEndSubmiting(r)
            {
                if( ! r.success )
                {
                    this.notification = r.notification;
                }
                else
                {
                    alert(r.redirect);
                    Requests.redirect(r.redirect);
                }
            }
        },

        name: 'app-navbar'
    }

</script>

<style lang="scss" scoped>
    #main-nav
    {
        li
        {
            a:hover
            {
                opacity: 0.75;
            }
        }

        li.active
        {
            a
            {
                background-color:#3d84e6;
            }
        }
    }
</style>