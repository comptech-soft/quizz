<template>
    <div 
        :class="control_class"
        :id="'datepicker-container-' + field"
    >
        <label
            v-if="label"
            v-html="label"
        >
        </label>

        <div class="input-group">

            <div class="input-group-addon">
                <i class="fa fa-phone"></i>
            </div>
            
            <input 
                :id="field"
                :name="field"
                :type="type" 
                :class="'form-control' + (this.size ? ' input-' + size : '')" 
                :placeholder="placeholder"
                :value="value"
                :maxlength="maxlength"

                @input="updateValue($event.target.value)"
            />
        
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
    
    /*
    | https://uxsolutions.github.io/bootstrap-datepicker
    | https://bootstrap-datepicker.readthedocs.io/en/stable/
    */

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
            // datepicker: {default: () => {return {}} },
        },

        data()
        {
            return {
                instance: null,
            }
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

        name: 'phonebox',
    }

</script>