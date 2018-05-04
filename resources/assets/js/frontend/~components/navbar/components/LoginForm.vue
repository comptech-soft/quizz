<template>
    <div v-if="ready">
        <form
            @keydown="onKeydown"
        >
            <div v-if="visible_credentials_row" class="row">
                <div class="col-xs-12 col-sm-12 col-md-6">
                    <vue-textbox
                        :field="email_field_name"
                        placeholder="Email"
                        label="Email *"
                        v-model="fields.email"
                        :errors="errors"
                    >
                    </vue-textbox>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-6">
                    <!-- Password -->
                    <vue-textbox
                        :field="password_field_name"
                        :type="password_field_type"
                        placeholder="Password"
                        label="Password *"
                        v-model="fields.password"
                        :errors="errors"
                    >
                    </vue-textbox>
                </div>
            </div>

            <div id="row-forgot-password" class="row">
                <div class="col-xs-12 text-right">
                    <a href="#" class="text-white">I forgot my password</a>
                </div>
            </div>

            <div v-if="false" id="row-social-links" class="row">
                <div class="col-xs-12 text-center">
                    <div class="clearfix">
                        <button type="button" class="btn btn-facebook-login">
                            Sign in with Facebook 
                            <i class="fa fa-facebook"></i>
                        </button>
                        
                        <button type="button" class="btn btn-linkedin-login">
                            Login with LinkedIn
                            <i class="fa fa-linkedin-square"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-xs-5">
                    <button type="button" class="btn" @click="onClickLogin">
                        <i v-if="submiting" class="fa fa-spinner fa-spin"></i>
                        Login
                    </button>
                </div>
                <div class="col-xs-7 text-right">
                    <vue-icheck-box
                        type="integer"
                        caption="Remember Me"
                        field="remember_me"
                        v-model="fields.remember_me"
                        :errors="errors"
                    >
                    </vue-icheck-box>
                </div>
            </div>
        </form>
    </div>
</template>

<script>

    import formmix from './../../../../boot/modules/form/form-mix.js'

    export default 
    {
        mixins: [
            formmix
        ],

        props:
        {
            app: {required: true}
        },

        data()
        {
            return {
                fields:
                {
                    email: '',
                    password: '',
                    remember_me: 0,
                },

                email_field_name: 'fakeusernameremembered',
                password_field_name: 'fakepasswordremembered',
                password_field_type: 'text',
                visible_credentials_row: false,
            };
        },

        methods:
        {
            onClickLogin()
            {
                this.$emit('start-submiting');
                this.form.onClickSubmit(r => {
                    this.$emit('end-submiting', r);
                });
            }
        },

        mounted()
        {
            this.visible_credentials_row = true;
            let vm = this, i = setTimeout( () => {
                vm.email_field_name = 'email';
                vm.password_field_name = 'password';
                vm.password_field_type = 'password';
                vm.fields['app'] = vm.app;

            }, 1000);
        },

        name: 'login-form'
    }

</script>