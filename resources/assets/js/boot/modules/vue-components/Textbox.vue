<template>
    <div 
        :class="control_class"
    >
        <label
            v-if="label"
            v-html="label"
        >
        </label>

        <input 
            :id="field"
            :name="field"
            :type="type" 
            :class="'form-control' + (this.size ? ' input-' + size : '')" 
            :placeholder="placeholder"
            :value="value"
            :disabled="disabled"
            :maxlength="maxlength"
            @input="updateValue($event.target.value)"
        >
        <span 
            v-if="icon"
            :class="feedback_class"
        >
        </span>
        <span 
            v-if="render_errors"
            class="help-block"
            v-html="render_errors"
        >
        </span>
    </div>
</template>

<script>
    
    import controlMix from './~mixins/control-mix';
    import errorsMix from './~mixins/errors-mix';

    export default {
        
        mixins: 
        [
            errorsMix,
            controlMix,
        ],
        
        props:
        {
            type: {type:String, default: 'text'},
            icon: {type:String, default: '' },
            
            size: {type:String, default: '' },
        },

        computed:
        {


            feedback_class()
            {
                let result = {
                    'glyphicon': true,
                };
                if( this.icon ) 
                {
                    result['glyphicon-' + this.icon] = true;
                }
                result['form-control-feedback'] = true;
                return result;
            }
        },

        methods:
        {
            updateValue(value)
            {
                this.$emit('input', value);
            }
        },

        name: 'textbox',
    }

</script>