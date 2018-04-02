<template>
    <div 
        class="owl-carousel owl-theme" 
        :id="id" 
        v-if="items.length"
    >
        <div 
            v-for="(item, index) in items" 
            class="item"
            v-html="renderitem(item)"
        >
        </div>
    </div>
</template>

<script>

    export default 
    {

    	props:
    	{
    		id: {type: String, required: true},
            items: {type: Array, required: true},
            renderitem: {required: true},
            options: {type: Object, required: true},
    	},

        computed:
        {

        },

        data()
        {
            return {
                instance: null,
            };
        },

        methods:
        {
            makeCarousel()
            {
                let vm = this, _i = setInterval( () => {
                    if( $('#' + vm.id).length )
                    {
                        clearInterval(_i);
                        if(vm.items.length > 0)
                        {
                            vm.instance = $('#' + vm.id).owlCarousel(vm.options);
                            $(window).on("debouncedresize.carousel-" + vm.id, function(e){                                
                                vm.$emit("debouncedresize", {id: vm.id});
                            });
                            $(window).trigger("debouncedresize.carousel-" + vm.id);
                        }
                    }
                }, 250);
            }
        },

        mounted()
        {
            this.makeCarousel();
        },

        destroyed()
        {
            $(window).off("debouncedresize.carousel-" + vm.id);
        },

        name: 'owl-slider'
    }

</script>