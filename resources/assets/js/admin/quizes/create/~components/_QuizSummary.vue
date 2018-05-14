<template>
	<div class="panel panel-default">
        
        <div class="panel-heading">
            <strong>
            	{{quiz.name}}
            </strong>
            . General infos 
        </div>
        
        <div class="panel-body">
        	<div>
        		<strong>Title</strong> 
        		<div v-html="quiz.title">
        		</div>
        	</div>

        	<div id="description-container">
        		<strong>Description</strong>
        		<div v-html="quiz.description">
                </div>
        	</div>

        	<div class="row" id="parameters-container">
        		<div class="col-xs-6">
        			<div>
        				<strong>Time</strong>
        				<span class="badge">{{quiz.time}} min</span>
        			</div>
        		</div>
        		<div class="col-xs-6">
        			<div>
        				<strong>Success percentage</strong>
        				<span class="badge">{{quiz.success_percentage}} %</span>
        			</div>
        		</div>
        	</div>
            
        </div>
    </div>
</template>

<script>

    export default 
    {
    	props:
    	{
    		quiz: {required: true},
    	},

        name: 'quiz-summary'
    }

</script>

<style scoped lang="scss">
	div.panel-heading
	{
		strong
		{
			color: #3d84e6;
		}
	}

	#description-container, #parameters-container
	{
		margin-top:10px;
	}
</style>