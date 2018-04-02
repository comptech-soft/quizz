<template>
    <div 
        :class="icheck_control_class"
    >
        <label>
            <input 
                type="checkbox"
                :id="field" 
                :checked="value"
                :disabled="disabled"
            /> 
            <span 
                v-html="caption"
            >
            </span>
        </label>
        <span 
            v-if="render_errors"
            class="help-block"
            v-html="render_errors"
        >
        </span>
    </div>
</template>

<script>
    
    import errorsMix from './~mixins/errors-mix';

    export default {
    
        mixins: 
        [
            errorsMix,
        ],  
        
        props:
        {
            type: {type: String, default: 'boolean'},
            caption: {type:String, default: '' },
            value: {},
            disabled: {type: Boolean, default: false},
        },

        data()
        {
            return {
                checked: false,
            };
        },

        computed:
        {
            icheck_control_class()
            {
                let result = {
                    'checkbox': true,
                    'icheck': true,
                    'form-group': true,
                }
                if(this.has_error)
                {
                    result['has-error'] = true;
                }
                return result;
            },
        },

        methods:
        {
            updateValue(value)
            {
                this.checked = value;
                if( this.type == 'integer')
                {
                    value = (value ? 1 : 0);
                }
                this.$emit('input', value);
            },

            applyICheck()
            {
                let vm = this;
                let i = setInterval( () => {
                    let jq = $('input[type="checkbox"]#' + vm.field);
                    if( jq.length == 1)
                    {
                        clearInterval(i);
                        jq.iCheck({
                            checkboxClass: 'icheckbox_square-blue',
                            radioClass: 'iradio_square-blue',
                            increaseArea: '20%'
                        }).on('ifUnchecked', function(e){
                            vm.updateValue(false);
                        }).on('ifChecked', function(e){
                            vm.updateValue(true);
                        });
                    }
                }, 10);
            }
        },

        mounted()
        {
            this.applyICheck();
        },

        name: 'icheckbox',
    }

</script>