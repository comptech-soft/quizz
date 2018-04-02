<template>

    <transition name="alert">
        <div :class="alert_class">
            <a v-if="closable" href="#" class="close" @click="$emit('close')">&times;</a>
            <strong v-if="info" v-html="info"></strong> 
            <span v-if="message" v-html="message"></span>

            <slot name="body"></slot>
        </div>
    </transition>

</template>

<script>

    export default 
    {

    	props:
    	{
    		type: {type: String, required: true},
            message: {type: String, default: ''},
            info: {type: String, default: ''},
            closable: {type: Boolean, default: true},
    	},

        computed:
        {
            alert_class()
            {
                let r = {
                    'alert': true
                };
                r['alert-' + this.type] = true;
                return r;
            }

        },

        data()
        {
            return {

            };
        },

        methods:
        {

        },

        name: 'alert'
    }

</script>

<style lang="scss" scoped>
    
    .alert-enter-active
    {
        transition: all 0.5s ease;
    }

    .alert-leave-active
    {
        transition: all 0.5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .alert-enter, .alert-leave-to /* .fade-leave-active below version 2.1.8 */ 
    {
        opacity: 0;
        /*transform: scaleY(0); */
    }

    .alert
    {
        border-radius: 2px;
    }
</style>