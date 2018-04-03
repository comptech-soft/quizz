<template>
    <div v-if="ready" class="row">

        <div class="col-md-12">
            <div class="row">
                <div class="portfolio-items isotopeWrapper clearfix">
    
                    <article 
                        v-for="record in records" 
                        class="col-sm-4 isotopeItem"
                    >
                        <div class="portfolio-item">
                            <img 
                                :src="record.image_url" 
                                class="img-responsive"
                                alt="" 
                            />
                            <div class="portfolio-desc align-center">
                                <div class="folio-info">
                                    <a 
                                        :href="'quiz-detail/' + record.slug" 
                                        class="fancybox"
                                    >
                                        <h5>{{ record.name }}</h5>
                                        <i class="fa fa-link fa-2x"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </article>

                </div>
            </div>
        </div>

    </div>
	<i v-else class="fa fa-spinner fa-spin"></i>
</template>

<script>

    export default 
    {

    	props:
    	{
    		
    	},

        computed:
        {
            ready()
            {
                return Quizz.$store.getters.ready
            },

            user()
            {
                return Quizz.$store.getters.user
            },

            records()
            {
                if( this.result == null )
                {
                    return [];
                }
                return this.result.data;
            },
        },

        data()
        {
            return {
                result: null,
                loading: false,
            };
        },

        methods:
        {
            fetch()
            {
                let vm = this;
                vm.loading = true;
                Requests.post('quizes/fetch')
                    .then( r => {

                        vm.result = r.data;
                        vm.loading = false;
                    })
            }
        },

        mounted()
        {
            this.fetch();
        },

        name: 'quizz-selector'
    }

</script>