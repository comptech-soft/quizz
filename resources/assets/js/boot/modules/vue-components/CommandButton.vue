<template>
    <button 
        type="button" 
        :class="button_class"
        @click.prevent="$emit('click')"
    >
        <span 
            v-html="button_caption"
        >
        </span>
    </button>
</template>

<script>
    
    export default {
        
        props:
        {
            caption: {type:String, default: () => {return ''} },
            variant: {type:Array, default: () => {return []} },
            spin: {type:Boolean, default: () => {return false} },
            spinner: {type:String, default: () => {return 'spinner'} },
        },

        computed:
        {
            button_class()
            {
                let result = {
                    btn: true,
                };
                _.forEach( this.variant, value => {
                    result['btn-' + value] = true;
                });
                return result;
            },

            button_caption()
            {
                let result = this.caption;
                if( this.spin )
                {
                    return '<i class="fa fa-' + this.spinner + ' fa-spin"></i> ' + result;
                }
                return result;
            }
        },

        name: 'command-button',
    }

</script>