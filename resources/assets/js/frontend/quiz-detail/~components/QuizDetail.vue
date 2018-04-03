<template>
    <div>
        {{ id }}
	   <i v-if="true" class="fa fa-spinner fa-spin"></i>
        
    </div>
</template>

<script>

    export default 
    {

    	props:
    	{
    		id: {required: true}
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

        name: 'quiz-detail'
    }

</script>