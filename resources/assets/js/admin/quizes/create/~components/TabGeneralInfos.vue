<template>
	<div id="general-infos" class="tab-pane fade in active">

        <h3 class="tab-header">
            General infos
        </h3>
    
        <div class="row">
            <!-- Quiz Name -->
            <div class="col-xs-12">
                <vue-textbox
                    field="name"
                    placeholder="Quiz Name"
                    label="Quiz Name"
                    v-model="name"
                    :errors="errors"
                    @input="onInput('name', $event)"
                >
                </vue-textbox>
            </div>
        </div>

        <div class="row">
            <!-- Quiz Title  -->
            <div class="col-xs-12">
                <vue-textbox
                    field="title"
                    placeholder="Quiz Title"
                    label="Quiz Title"
                    v-model="title"
                    :errors="errors"
                    @input="onInput('title', $event)"
                >
                </vue-textbox>
            </div>
        </div>

        <div class="row">
            <!-- Quiz Time -->
            <div class="col-xs-12 col-sm-6">
                <vue-number
                    field="time"
                    placeholder="Time [min]"
                    label="Time [min]"
                    v-model="time"
                    maxlength="3"
                    :autonumeric="{
                        digitGroupSeparator: '',
                        minimumValue: 0,
                        maximumValue: 999,
                        decimalPlaces: 0,
                    }"
                    :errors="errors"
                    @input="onInput('time', $event)"
                >
                </vue-number>
            </div>
            <!-- Quiz Success Percentage -->
            <div class="col-xs-12 col-sm-6">
                <vue-number
                    field="success_percentage"
                    placeholder="Success percentage [%]"
                    label="Success percentage [%]"
                    v-model="success_percentage"
                    maxlength="3"
                    :autonumeric="{
                        digitGroupSeparator: '',
                        minimumValue: 0,
                        maximumValue: 100,
                        decimalPlaces: 0,
                    }"
                    :errors="errors"
                    @input="onInput('success_percentage', $event)"
                >
                </vue-number>
            </div>
        </div>

        <div class="row">
            <!-- Quiz Descripton -->
            <div class="col-xs-12">
                <vue-summernote
                    field="description"
                    label="Descripton"
                    v-model="description"
                    :errors="errors"
                    @input="onInput('description', $event)"
                >
                </vue-summernote>
            </div>
        </div>

    </div>
</template>

<script>

    export default 
    {

    	props:
    	{
    		errors: {required: true}
    	},

        data()
        {
            return {
                name: '',
                title: '',
                description: '',
                image_url: '',
                time: 0,
                success_percentage: 100,
            };
        },

        methods:
        {
            onInput(field, value)
            {
                this.$emit('update', {field: field, value: value})
            }
        },

        name: 'tab-general-infos'
    }

</script>