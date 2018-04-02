export default 
{
	methods:
    {
        openBrowseForFile()
        {
            this.$emit('open-browse-window');
            $('#' + this.btn_browse_id).trigger('click');
        },

        bindUploadEvent()
        {
          
            let form_id = '#' + this.form_id;
            let browse_id = form_id + ' #' + this.btn_browse_id;
            let submit_id = form_id + ' #' + this.btn_submit_id;
            
            let vm = this,  _i = setInterval( () => {
                
                if( ($(browse_id).length == 1) && ($(submit_id).length == 1) )
                {

                	$(browse_id).off('change').change( function(e){
                        $(submit_id).trigger('click');
                    });

                    $(submit_id).off('click').click( function(e){
                        e.preventDefault();
                        e.stopPropagation();

                        vm.info = null;
                        vm.image = null;
                        
                        let files = $(browse_id).prop('files');
                        if( ! vm.uploaderManager.SetFile(files[0]).Validate() )
                        {
                        	// $(browse_id).val(null);
                        	vm.$emit('upload-validation-fail', vm.info = vm.uploaderManager.Info() )
                        }
                        else
                        {
                        	vm.$emit('upload-validation-success', vm.info = vm.uploaderManager.Info() )
                        	vm.Upload(files[0]);
                        }
                    });                    
                    clearInterval(_i);
                }
            }, 250);
        },

        Upload(file)
        {
        	let data = new FormData(), vm = this;
        	data.append('file', file);
        	data.append('folder', this.folder);
        	this.$emit('uploading-process-start', {id: this.id, file: file});
        	this.uploading = true;
        	Requests.post('upload-image', data)
        		.then(r => {
        			if(r.data.success)
        			{
        				this.$emit('uploading-process-end-success', r.data);
                        this.image = r.data.image;
        			}
        			else
        			{
        				this.$emit('uploading-process-end-fail', r.data);
                        this.image = null;
        			}
        			this.uploading = false;
        		})
        		.catch( e => {
        			this.$emit('uploading-process-end-fail', e);
        			this.uploading = false;
                    this.image = null;
        		})
        }
    },

}