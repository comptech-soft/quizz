<template>
    <div 
        :class="control_class"
    >
        <label
            v-if="label"
            v-html="label"
        >
        </label>

        <textarea
            :id="field"
            :name="field"
            :disabled="disabled"
            :class="'form-control' + (this.size ? ' input-' + size : '')"  
            rows="3" 
            :placeholder="placeholder"
            :value="value"
            @input="updateValue($event.target.value)"
        >
        </textarea>
        
        <div v-if="extra" class="help-extra" v-html="extra">
        </div>
        
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
    import controlMix from './~mixins/control-mix';
    
    export default {
        
        mixins: 
        [
            errorsMix,
            controlMix
        ],

        props:
        {
            value: {type:String, default: () => {return ''} },
            size: {type:String, default: () => {return ''} },
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

        name: 'editbox',
    }

</script>