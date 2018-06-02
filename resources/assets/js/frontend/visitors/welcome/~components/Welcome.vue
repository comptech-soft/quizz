<template>
	<div v-if="ready" class="welcome-container">
        <div class="heading-text">
            <h1 class="animated flipInY delay1 start-quiz">
                <div>
                    {{ $t('welcome.header') }}
                </div>
            </h1>
            <div v-html="$t('welcome.info')">
            </div>
        </div>

        <div class="fluid_container">
            <div class="camera_wrap camera_emboss pattern_1" id="camera_wrap_4">
                <div 
                    v-for="image in slides" 
                    class="camera-items"
                    :data-thumb="'/images/slides/thumbs/' + image" 
                    :data-src="'/images/slides/' + image"
                >
                </div> 
            </div>
        </div>        
    </div>
</template>

<script>

    export default 
    {

        computed:
        {
            ready()
            {
                return Quizz.$store.getters.ready
            },
        },

        data()
        {
            return {
                slides: [
                    'mars01.jpg',
                    'mars02.jpg',
                    'mars03.jpg',
                    'mars04.jpg',  
                ],
            };
        },

        methods:
        {
            applyCamera()
            {
                let vm = this, i = setInterval( () => {
                    if( $('#camera_wrap_4').length == 1 )
                    {
                        if( $('.camera-items').length = vm.slides.length )
                        {
                            clearInterval(i);
                            $('#camera_wrap_4').camera({
                                transPeriod: 500,
                                time: 3000,
                                height: '600',
                                loader: 'false',
                                pagination: true,
                                thumbnails: false,
                                hover: false,
                                playPause: false,
                                navigation: false,
                                opacityOnGrid: false,
                                imagePath: 'images/'
                            });

                            $('.start-quiz').click(function(e){
                                location.href = '/play-quiz'
                            })

                        }
                    }
                }, 100);
            }
        },

        mounted()
        {
            this.applyCamera();
        },

        name: 'welcome'
    }

</script>