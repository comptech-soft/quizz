<template>
	<div class="quiz-actions">
        <button 
            type="button" 
            class="btn btn-primary"
            @click="onAction('edit')"
        >
            Edit quiz
        </button>

        <button 
            type="button" 
            class="btn btn-danger"
            @click="onAction('delete')"
        >
            Delete quiz
        </button>
    </div>
</template>

<script>

    export default 
    {

    	props:
    	{
    		record: {required: true},
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
            onAction(action)
            {
                this.$emit('click', {action: action, record: this.record});
            }
        },

        name: 'quiz-actions'
    }

</script>