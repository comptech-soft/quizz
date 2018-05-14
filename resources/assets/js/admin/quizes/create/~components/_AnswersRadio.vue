<template>
	<div class="answers-container answers-container-radio">

        <div class="row">

            <div class="col-xs-9">
                <!-- Option  -->
                <vue-textbox
                    field="option"
                    placeholder="New option"
                    label="New option"
                    v-model="option"
                >
                </vue-textbox>
            </div>

            <div class="col-xs-3">
                <button class="btn btn-default">
                    Add
                </button>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-12">
                <div v-if="options.length == 0" class="alert alert-danger">
                    No options
                </div>
                
                <ul v-else class="list-group">
                    <li v-for="opt in options" class="list-group-item">
                        {{ opt }}
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>

    export default 
    {

    	props:
    	{
    		
    	},

        computed:
        {

        },

        data()
        {
            return {
                option: '',

                options: [],
            };
        },

        methods:
        {

        },

        name: 'answers-radio'
    }

</script>