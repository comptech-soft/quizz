<template>
	<li :class="{active: active}">
        <a 
            :id="id"
            :href="href"
            @click.prevent="$emit('click')"
        >
            <span
                :class="{active: active}"
            >
                {{ caption }}
            </span>
        </a>
    </li>
</template>

<script>

    export default 
    {

    	props:
    	{
            id: {type:String, required: true},
            href: {type:String, required: true},
            caption: {type:String, required: true},
    		active: {type:Boolean, default:false}
    	},

        computed:
        {

        },

        data()
        {
            return {

            };
        },

        methods:
        {

        },

        name: 'tab-item'
    }

</script>