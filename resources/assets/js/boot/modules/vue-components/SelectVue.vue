<template>
    <div 
        :class="control_class"
    >
    	<label v-if="label || ! ready">
    		<span
	        	v-if="! ready"
	        >
	        	<i class="fa fa-spinner fa-spin">
				</i>
	        </span>
	        <span v-html="label">
	        </span>
    	</label>

    	<v-select
            :options="options"
            :on-change="onChangeOption"
            :placeholder="placeholder"
            :searchable="searchable"
            v-model="selected"
        >
        </v-select>

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
    | https://sagalbot.github.io/vue-select/docs/Api/Props.html
    | https://codepen.io/collection/nrkgxV/
    | Example: 
        <select-box-vue
            field="category_id"
            endpoint="admin/vue-select-all-categories"
            label="FAQ Category"
            placeholder="Select a category"
            :errors="errors"
            @selected="onSelectedCategory"
            @start="onStartPopulate"
            @end="onEndPopulate"
        >
        </select-box-vue>

    */

    import vueSelect from 'vue-select'

    import errorsMix from './~mixins/errors-mix';

    export default {
        
        mixins: 
        [
            errorsMix,
        ],
        
        components:
        {
            'v-select': vueSelect
        },

        props:
        {
            endpoint: {type: String, default: () => {return ''} },
            
            
            items: {type: Array, default: () => {return []} },
            searchable: {type: Boolean, default: true},
            selected_value: {default: null },           
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
                this.onChangeOption(_.find(this.options, function(item) { return item.id == selected_id; }))
            },

        	onChangeOption(option)
        	{
        		this.selected = option;
        		this.$emit('selected', option);
        	},

        	getOptions()
        	{
        		let vm = this;
        		this.ready = false;
        		this.$emit('start');
                axios.post(this.endpoint).then( r => {
                    vm.options = r.data;
                    vm.ready = true;
                    vm.$emit('end', {options: r.data});
                });
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
                this.setValue(this.selected_value);
            }
            
            
        },

        name: 'select-vue',
    }

</script>



