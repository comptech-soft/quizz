class BootstrapModal 
{

    constructor()
    {
        if(! BootstrapModal.instance)
        {
            BootstrapModal.instance = this;
        }
        this.id = '';
        this.title = '';
        this.body = '';
        return BootstrapModal.instance;
    }

    setId(id)
    {
        this.id = id;
        return this;
    }

    setTitle(title)
    {
        this.title = title;
        $('#' + this.id + ' .modal-title').html(this.title);
        return this;
    }

    setImage(image)
    {
        this.setTitle(image.original_name);

        this.setBody('<img class="img-responsive modal-image" src="' + image.s3_path + '" />')
        return this;
    }

    setBody(body)
    {
        this.body = body;
        $('#' + this.id + ' .modal-body').html(this.body);
        return this;
    }

    show()
    {
        $('#' + this.id).modal('show');
    }
    
}

const instance = new BootstrapModal();

export default instance;