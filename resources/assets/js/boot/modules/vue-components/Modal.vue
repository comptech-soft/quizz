<template>

    <transition name="modal">
        <div class="modal modal-mask" style="display: block">
            <div :class="modal_class" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button v-if="closable" type="button" class="close" @click="$emit('close')">&times;</button>
                        <slot name="header"></slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body"></slot>
                    </div>

                    <div v-if="has_footer" class="modal-footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        </div>
    </transition> 

</template>

<script>

    export default 
    {

    	props:
    	{
            id: {type: String, required: true},
    		closable: {type: Boolean, default: true}
    	},

        computed:
        {
            modal_class()
            {
                let r = {
                    'modal-dialog':true,
                }
                r['modal-dialog-' + this.id] = true
                return r;  
            },

            has_footer()
            {
                if( this.$slots.footer == undefined )
                {
                    return false;
                }
                return true;
            }
        },

        name: 'modal'
    }

</script>

<style lang="scss" scoped>
    .modal-mask 
    {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity 0.3s ease;
    }

    .modal-enter-active
    {
        transition: all 0.5s ease;
    }

    .modal-leave-active
    {
        transition: all 0.5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .modal-enter, .modal-leave-to /* .fade-leave-active below version 2.1.8 */ 
    {
        opacity: 0;
        /*transform: scaleY(0); */
    }
</style>