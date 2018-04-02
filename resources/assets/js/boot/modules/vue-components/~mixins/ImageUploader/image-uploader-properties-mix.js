export default 
{
	props:
	{
		id: {type: String, required: true},
        label: {type: String, default: ''},
        folder: {type: String, required: true},
        maxsize: {type: String, required: true},
        extensions: {type: Array, required: true},
        caption: {type: String, default: '',},
        initial_image: {type: Object, default: null},
        disabled: {type: Boolean, default: false},

        /*
        | inalaltimea maxima a containerului care cuprinde imaginea
        */
        maxheight: {type: String, required: true},
	},

    data()
    {
        return {
            uploaderManager: null,
            uploading: false,
            image: null,
            info: null,
        };
    },
	
	computed:
    {
        form_id()
        {
            return 'iu-form-' + this.id;
        },

        btn_browse_id()
        {
            return 'iu_btn_browse-' + this.id;
        },

        btn_submit_id()
        {
            return 'iu_btn_submit-' + this.id;
        },

        btn_fake_browse()
        {
            return 'iu_btn_fake_browse-' + this.id;  
        },

        file()
        {
            if(this.uploaderManager == null)
            {
                return null;
            }
            return this.uploaderManager.File
        },

        file_name()
        {
            if( this.file == null)
            {
                return null;
            }
            return this.file.name;
        },

        image_url()
        {
            return this.image == null ? null : this.image.s3_path;
        },

        image_real_dimensions()
        {
            return this.image == null ? null : {width: this.image.width, height: this.image.height};
        },

        uploader_control_class()
        {
            let r = this.control_class;
            if( this.validation_errors )
            {
                r['has-error'] = true;
            }
            return r;
        },

        validation_errors()
        {
            if( this.info == null)
            {
                return '';
            }
            if( this.info.errors.length == 0)
            {
                return '';
            }
            return this.info.errors.join('<br/>');
        }
    },


    mounted()
    {
        this.image = this.initial_image;
    }
}