<template>
	<div class="quiz-actions">
        <button 
            type="button" 
            class="btn btn-primary"
            @click="onAction('edit')"
        >
            <i class="fa fa-fw fa-pencil"></i> 
            Edit quiz
        </button>

        <button 
            type="button" 
            class="btn btn-danger"
            @click="onAction('delete')"
        >
            <i class="fa fa-fw fa-trash-o"></i> 
            Delete quiz
        </button>

        <button 
            type="button" 
            class="btn btn-primary"
            @click="onAction('questions')"
        >
            <i class="fa fa-fw fa-question"></i>
            Questions ({{record.questions.length}})
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