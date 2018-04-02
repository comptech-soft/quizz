<template>
	<div 
        v-if="ready" 
        :class="control_class"
    >
		<label v-if="label">
    		<span
	        	v-if="! ready"
	        >
	        	<i class="fa fa-spinner fa-spin">
				</i>
	        </span>
	        <span v-html="label">
	        </span>
    	</label>

    	<select 
    		:class="'form-control' + (this.size ? ' input-' + size : '')"
            :disabled="disabled"
    		v-model="selected"
    		@change="onChangeOption"
    	>
    		<option
    			v-for="item in options"
    			:value="item.id"
                v-html="item.label"
    		>
    		</option>
        </select>

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
            endpoint: {type: String, default: () => {return ''} },
            items: {type: Array, default: () => {return []} },
            selected_value: {default: null },
            first_option: {default: null},
            size: {type:String, default: () => {return ''} },
        },

        data()
        {
        	return {
        		options: [],
        		selected: null,
        		ready: true,
        	}
        },

        methods:
        {
        	setValue(selected_id)
            {
            	this.selected = selected_id;
            },

        	onChangeOption(e)
        	{
        		this.$emit('input', this.selected);
        	},

        	getOptions()
        	{
        		let vm = this;
        		this.ready = false;
        		this.$emit('start');
                Requests.post(this.endpoint).then( r => {
                    vm.options = r.data;
                    if( vm.first_option != null )
                    {
                        vm.options.splice(0, 0, vm.first_option );
                    }
                    vm.setValue(vm.selected_value);
                    vm.ready = true;
                    vm.$emit('end', {options: r.data});
                });
        	}
        },

        watch: 
        {
            'items': function(newItems)
            {
                this.options = newItems
            },

            'selected_value': function(newValue)
            {
                this.setValue(newValue);                
            }
        },

        mounted()
        {
        	if( this.endpoint)
            {
                this.getOptions();
            }
            else
            {
                this.options = this.items;
                if( this.first_option != null )
                {
                    this.options.splice(0, 0, this.first_option );
                }
                this.setValue(this.selected_value);
                //this.$emit('input',this.selected_value);
            }
        },

        name: 'select-simple'
    }

</script>