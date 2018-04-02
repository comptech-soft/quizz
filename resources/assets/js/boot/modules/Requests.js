class Requests 
{

	constructor()
	{
   		if(! Requests.instance)
   		{
   			
        this.base_url = $('meta[name="base-url"]').attr('content')
        this.app_side = $('html').data('app');

     		Requests.instance = this;
   		}
   		return Requests.instance;
  	}

    redirect(endpoint)
    {
      location.href = ((endpoint.substr(0,4) == 'http') ? endpoint : (this.base_url + '/' + endpoint))
    }

    post(endpoint, data = {})
    {
        return Axios.post(this.base_url + '/' + endpoint, data);
    }

    makeSecventialRequest(i, requests)
    {
      if( i <= requests.length - 1)
      {
        if( ! requests[i].ready )
        {
          // console.log(i + ') ' + requests[i].endpoint);
          this.post(requests[i].endpoint, requests[i].data)
            .then( r => {
              requests[i].response = r.data;
              requests[i].ready = true;
              this.makeSecventialRequest(i + 1, requests);
            })
            .catch( e => {
              requests[i].error = e;
              requests[i].ready = true;
              this.makeSecventialRequest(i + 1, requests);
            })
        }
      }
    }

    secvential(requests)
    {
      this.makeSecventialRequest(0, requests);
    }
  	
}

const instance = new Requests();

Object.freeze(instance);

export default instance;