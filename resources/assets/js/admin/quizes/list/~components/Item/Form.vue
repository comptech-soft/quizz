<template>
	<div class="quiz-form">
        
        <div class="row">
            <!-- Quiz Name -->
            <div class="col-xs-12">
                <vue-textbox
                    field="name"
                    placeholder="Quiz Name"
                    label="Quiz Name"
                    v-model="name"
                    :errors="errors"
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
                >
                </vue-summernote>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-12">
                <vue-image-uploader
                    label="Quiz image"
                    id="image_url"
                    field="image_url"
                    maxsize="5"
                    maxheight="128"
                    folder="quizes"
                    :extensions="['png', 'jpg', 'jpeg']"
                    :errors="errors"
                    :initial_image="{ s3_path: record.image_url, width: 160}"
                    
                    @upload-validation-fail="onImageValidationFail"
                    @uploading-process-end-success="onImageUploadSuccess"
                >
                </vue-image-uploader>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-12">
                <button 
                    type="button" 
                    class="btn btn-primary"
                    @click="onSave"
                >
                    Save
                    <i v-if="saving" class="fa fa-spinner fa-spin"></i>
                </button>

                <button 
                    type="button" 
                    class="btn btn-default"
                    @click="$emit('cancel')"
                >
                    Cancel
                </button>
            </div>
        </div>
    </div>
</template>

<script>

    import veeValidation from './../../../../../boot/modules/validation/Validation'

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
                name: '',
                title: '',
                time: 0,
                success_percentage: 0,
                description: '',
                image_url: '',

                errors: null,

                saving: false,
            };
        },

        methods:
        {

            onImageValidationFail(e)
            {
                this.image_url = '';
            },

            onImageUploadSuccess(e)
            {
                this.image_url = e.image.s3_path;
            },

            onSave()
            {
                this.errors = null;
                
                let data = {
                    id: this.record.id,
                    name: this.name,
                    title: this.title,
                    time: this.time,
                    success_percentage: this.success_percentage,
                    description: this.description,
                    image_url: this.image_url,
                }

                let validator = new veeValidation({
                    name: 'required',
                    title: 'required',
                    time: 'required|min_value:1',
                    success_percentage: 'required|min_value:1|max_value:100',
                    description: 'required',
                    image_url: 'required',
                });

                validator.validate(data).then( valid => {
                    if(valid)
                    {
                        this.saving = true;
                        Requests.post('admin/quizez/update', data)
                            .then(r => {
                                this.saving = false;
                                this.$emit('update', r.data);
                            })
                    }
                    else
                    {
                        this.errors = validator.getErrors();
                    }
                });
            }
        },

        mounted()
        {
            this.name = this.record.name;
            this.title = this.record.title;
            this.time = this.record.time;
            this.success_percentage = this.record.success_percentage;
            this.description = this.record.description;
            this.image_url= this.record.image_url;
        },

        name: 'quiz-form'
    }

</script>