<template>
	<div class="btn-group">
        <button 
        	v-for="(btn, index) in buttons"
        	v-if="btn.visible(record)"
        	type="button" 
        	:class="btn_class(btn)"
        	:title="btn.tooltip(record)"
            :disabled="! btn.enabled(record)"
        	@click="clickButton(btn)"
        >
        	<i v-if="btn.icon" :class="'fa fa-fw fa-' + btn.icon"></i>
        	<span v-if="btn.caption" v-html="btn.caption"></span>
        </button>
    </div>
</template>

<script>

    export default 
    {

    	props:
    	{
    		size: {type:String, default: ''},
    		buttons: {type: Array, default: () => [], },
    		record: {type: Object, default: () => null, }
    	},

        methods:
        {
        	btn_class(btn)
        	{
        		let r = {
        			btn: true,
                    'btn-default': true,
        		}
        		r['text-' + btn.color(this.record)] = true;
        		if( this.size )
        		{
        			r['btn-' + this.size] = true;
        		}
        		if(btn.tooltip(this.record))
        		{
        			r['has-tooltip'] = true;
        		}
        		return r;
        	},

        	clickButton(btn)
        	{
        		this.$emit('toolbarclick', {action: btn.event, record: this.record})
        	}
        },

        name: 'toolbar'
    }

</script>


