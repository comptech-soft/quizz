<template>
	<div 
        class="vue-image-container" 
        :id="id"

        v-if="source && dimensions && id"
    >
        <div v-if="false" style="background-color: blue; color: yellow">
            ID: {{ id }}<br/>
            Dimensions: {{ dimensions }} | {{ real_image_aspect }} | {{ viewport_image_aspect }}<br/>
            Container: {{ container }}<br/>
            Style: {{ i_style}}<br/>
            MaxHeight: {{maxheight}} 
        </div>

        <div 
            class="image-container"
            :style="{height: this.maxheight + 'px'}"
        >
            <img 
                v-if="visible"
                :src="source" 
                :style="i_style"
                @click="$emit('click')"
            />
        </div>
    </div>
</template>

<script>

    export default 
    {

    	props:
    	{
            id: {default: null, required: true},

            /*
            | url-ul imaginii
            */
    		source: {default: null, required: true},

            /*
            | Dimensiunile reale (fizice) ale imaginii
            */
            dimensions: {default: null, required: true},

            /*
            | inalaltimea maxima a containerului care cuprinde imaginea
            | String | Number
            */
            maxheight: {required: true},

            /*
            | alinierea verticala: default (la mijloc) | top
            */
            align: {type: String, default: 'default'},

            /*
            | alinierea orizontala: default (la mijloc) | left
            */
            halign: {type: String, default: 'default'}
    	},

        computed:
        {

            i_style()
            {
                let factorWidth, factorHeight;

                // incape pe latime
                if( this.dimensions.width <= this.container.width)
                {
                    if( this.dimensions.height <= this.container.height)
                    {
                        // poza incape atat pe latime cat si pe lungime
                        // se pastreaza dimensiunile reale
                        return {
                            width: this.dimensions.width + 'px',
                            height: this.dimensions.height + 'px',
                            top: ( (this.align == 'default') ? (this.container.height - this.dimensions.height)/2 + 'px' : '0px'),
                            margin: ((this.halign == 'default') ? '0px auto' : '0px'),
                        }
                    }
                    // poza incape pe latime, nu incape pe inaltime
                    // trebuie micsorata inaltimea si implicit latimea se face si mai mica
                    let factorHeight = this.container.height/this.dimensions.height;
                    return {
                        width: factorHeight * this.dimensions.width + 'px',
                        height: this.container.height + 'px',
                        margin: ((this.halign == 'default') ? '0px auto' : '0px'),
                    }

                }
                // nu incape pe latime, incape pe inaltime
                // trebuie micsorata latimea ca sa incapa si inaltimea deoarece am micosrat latimea
                if( this.dimensions.height <= this.container.height)
                {
                    let factorWidth = this.container.width/this.dimensions.width;
                    return {
                        width: this.container.width + 'px',
                        height: factorWidth * this.dimensions.height + 'px',
                        top: ( (this.align == 'default') ? (this.container.height - factorWidth * this.dimensions.height)/2 + 'px' : '0px'),
                        margin: ((this.halign == 'default') ? '0px auto' : '0px'),
                    }
                }
                // nu incape nici pe latime, nici pe inaltime
                factorHeight = this.container.height/this.dimensions.height;
                factorWidth = this.container.width/this.dimensions.width;
                if(factorHeight < factorWidth)
                {
                    // micsorez dupa inaltime ca sa incapa
                    return {
                        width: factorHeight * this.dimensions.width + 'px',
                        height: this.container.height + 'px',
                        margin: ((this.halign == 'default') ? '0px auto' : '0px'),
                    }

                }
                return {
                    width: this.container.width + 'px',
                    height: factorWidth * this.dimensions.height + 'px',
                    top: ( (this.align == 'default') ? (this.container.height - factorWidth * this.dimensions.height)/2 + 'px' : '0px'),
                    margin: ((this.halign == 'default') ? '0px auto' : '0px'),
                }
            }
        },

        data()
        {
            return {
                visible: false,

                container: {
                    width: null,
                    height: null,
                }
            };
        },

        mounted()
        {
            let vm = this, cnt = 0, i = setInterval( () => {
                // console.log('Image Vue (#' + vm.id + ') mounted. Try number ' + (++cnt));
                let jq = $('div#' + vm.id + '>div.image-container');
                if( jq.length == 1)
                {
                    this.visible = true;
                    let jq_image = jq.find('img');
                    // console.log('Image tag exists: ' + jq_image.length);
                    if( jq_image.length == 1)
                    {
                        $(window).on("debouncedresize." + vm.id, function(e) {
                            let outerWidth = $('div#' + vm.id + '>.image-container').outerWidth();
                            
                            if(outerWidth == 0)
                            {
                                $('div#' + vm.id + '>.image-container').css('border', '1px solid red');
                            }

                            vm.container.width = outerWidth; 
                            vm.container.height = vm.maxheight;
                            vm.visible = true
                            // console.log('Emmiting resized from #' + vm.id);
                            vm.$emit('resized', {
                                id: vm.id, 
                                container: vm.container, 
                                style: vm.i_style,
                                screen: {
                                    width: e.currentTarget.innerWidth,
                                    height: e.currentTarget.innerHeight,
                                }
                            });
                        });
                        clearInterval(i);
                        $(window).trigger('debouncedresize.' + vm.id);
                    }
                }
            }, 10);
        },

        destroyed()
        {
            $(window).off("debouncedresize." + this.id);
        },

        name: 'vue-image'
    }

</script>

<style lang="scss">
    .vue-image-container
    {
        padding: 0px;
        .image-container
        {
            position: relative;
            >img
            {
                position: relative;
                display: block;
            }
        }
    }
</style>