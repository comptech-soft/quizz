class JQueryHelpers 
{

	constructor()
	{
   		if(! JQueryHelpers.instance)
   		{
     		JQueryHelpers.instance = this;
   		}
   		return JQueryHelpers.instance;
  	}

    byId(id)
    {
        return $('#' + id);
    }

    AutonumericById(id, options)
    {
        let _this = this, i = setInterval( () => {
            if( _this.byId(id).length ===  1)
            {
                clearInterval(i);
                new Autonumeric('#' + id, options);
            }
        }, 250);
    }	

    DatepickerById(id, options)
    {
        options.autoclose = true;
        options.clearBtn = true;
        options.todayBtn = true;
        options.todayHighlight = true;
        options.container = '#datepicker-container-' + id;

        return $('#' + id).datepicker(options)
    }

    enableTooltips(id)
    {
      let trys = 0, i = setInterval( () => {
        let jq = $('#' + id);
        // console.log(++trys + '--->' + jq.length + ' (' + jq.attr('title') + ')');
        if( jq.length == 1)
        {
          jq.tooltip("destroy");
          clearInterval(i);
          setTimeout( () => jq.tooltip({
            title: jq.attr('title')
          }), 500);
        }      
      }, 10);
    }
}

const instance = new JQueryHelpers();

Object.freeze(instance);

export default instance;