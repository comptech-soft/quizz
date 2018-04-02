<template>
    <div 
        :class="control_class"
    >
        <label
            v-html="label"
        >
        </label>

        <textarea 
            :disabled="disabled"
            class="form-control"
            :placeholder="placeholder"
            :id="'summer-editor-' + field"
        >
        </textarea>

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
            value: {type:String, default: () => {return ''} },
            /*
            | Summernote options
            */
            height: {type: Number, default: () => {return null},},
        },

        methods:
        {
            updateValue(value)
            {
                this.$emit('input', value);
            },

            attachSummerNote()
            {
                let vm = this, i = setInterval( () => {
                    if( $('#summer-editor-' + vm.field).length )
                    {
                        clearInterval(i);
                        let sn = $('#summer-editor-' + vm.field).summernote({
                            height: vm.height,
                            minHeight: null,             // set minimum height of editor
                            maxHeight: null,             // set maximum height of editor
                            focus: true,                 // set focus to editable area after initializing summernote
                        })
                        .on('summernote.change', function(we, contents, $editable){

                            if( $('#summer-editor-' + vm.field).summernote('isEmpty') )
                            {
                                vm.updateValue('');
                            }
                            else
                            {
                                vm.updateValue(contents);
                            }
                        })
                        .on('summernote.keydown', function(we, e) {
                            vm.$emit('keydown', {target: {id: vm.field}});
                        });
                        if( vm.value )
                        {
                            sn.summernote('code', vm.value)
                        }
                        if( vm.disabled )
                        {
                            sn.summernote('disable');
                            sn.parent().find('.note-toolbar-wrapper').hide();
                        }
                    }
                }, 10);
            }
        },

        mounted()
        {
            this.attachSummerNote();
        },

        destroyed()
        {
            $('#summer-editor-' + this.field).summernote('destroy');
        },

        name: 'editbox-summernote',
    }

</script>