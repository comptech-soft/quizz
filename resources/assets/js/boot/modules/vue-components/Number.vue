<template>
    <div 
        :class="control_class"
    >
        <label
            v-if="label"
            v-html="label"
        >
        </label>

        <div :class="{ 'input-group': variant_content.length != 0}">
            <input 
                :id="field"
                :name="field"
                type="text" 
                :class="'text-right form-control' + (this.size ? ' input-' + size : '')" 
                :placeholder="placeholder"
                :value="value"
                :maxlength="maxlength"
                :disabled="disabled"
                @input="updateValue($event.target.value)"
            >
            <span 
                v-if="variant_content"
                class="input-group-addon"
                v-html="variant_content"
            >
            </span>
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
    
    import controlMix from './~mixins/control-mix';
    import errorsMix from './~mixins/errors-mix';

    export default {
        
        mixins: 
        [
            errorsMix,
            controlMix
        ],
        
        props:
        {
            value: {type: Number, default: 0 },
            size: {type:String, default: '' },
            variant: {type:String, default: '' },
            autonumeric: {}
        },

        computed:
        {
            variant_content()
            {
                if(this.variant == 'percentage')
                {
                    return '%';
                }
                if(this.variant == 'currency')
                {
                    return '&euro;';
                }
                return '';
            },

        },

        methods:
        {
            updateValue(value)
            {
                if( (value.length == 0) || _.isNaN(value) || (value == null) )
                {
                    value = 0;
                }
                else
                {
                    value = parseFloat(value)
                }
                this.$emit('input', value );
            }
        },

        mounted()
        {
            JQueryHelpers.AutonumericById(this.field, this.autonumeric);
        },

        name: 'numberbox',
    }

</script>