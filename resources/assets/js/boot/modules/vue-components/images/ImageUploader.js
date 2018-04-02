class ImageUploader
{

	constructor()
	{
        this.File = null;
        this.type = null;
        this.extension = null;
        this.maxsize = null;
        this.extensions = [];
        this.valid = {
            type: null,
            size: null,
        };
	}

    SetFile(file)
    {
        this.File = file;
        this.type = file.type.split('/').pop().toLowerCase();
        this.extension = this.FileExtension().toLowerCase();

        this.valid.type = 
            ($.inArray(this.type, this.extensions) > -1) && 
            ($.inArray(this.extension, this.extensions) > -1);

        this.valid.size = (this.File.size <= this.maxsize * 1024 * 1024);

        return this;
    }

    SetMaxsize(size)
    {
        this.maxsize = size;
        return this;
    }

    SetExtensions(extensions)
    {
        this.extensions = extensions;
        return this;
    }

    FileExtension()
    {
        let parts = this.File.name.split('.');
        let result  = '';
        if(parts.length > 1) 
        {
            result = parts[parts.length - 1];
        } 
        return result;
    }

    Validate()
    {
        for(let key in this.valid )
        {
            if( this.valid[key] === false )
            {
                return false;
            }
        }

        return true;      
    }

    humanSize(bytes) 
    {
        return Strings.humanSize(bytes);
        // const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
        // if (bytes === 0)
        // {
        //     return '0 Bytes';
        // }
        // const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
        // if (i === 0)
        // {
        //     return `${bytes} ${sizes[i]})`
        // }
        // return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`
    }

    Info()
    {
        let errors = [];
        if( ! this.valid.size )
        {
            errors.push('The file ' + this.File.name + ' (' + this.humanSize(this.File.size) + ') is to large. Maximum ' + this.humanSize(this.maxsize * 1024 * 1024) + ' is allowed.');
        }
        if( ! this.valid.type )
        {
            errors.push('The file type ' + this.extension + ' of ' + this.File.name + ' is not allowed. Allowed types are ' + this.extensions.join(', '));
        }

        return {
            file_name: this.File.name,
            errors: errors,
            info: {
                size: {
                    maxsize: this.maxsize * 1024 * 1024,
                    file_size: this.File.size,
                    success: this.valid.size,
                },
                type: {
                    extension: this.extension,
                    allowed: this.extensions.join(', '),
                    success: this.valid.type,
                }
            }
        }
    }

    Upload()
    {
        return 'Tre sa fac upload...';
    }
}

export default ImageUploader;