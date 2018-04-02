<template>

    <ul :class="'pagination pagination-' + size">

        <li 
            v-for="p in firsts" 
            :title="'Go to page #' + p"
        >
            <a
                href="javascript:void(0);"
                :class="{'pagination-link': true, 'is-current' : current_page == p}"

                @click.prevent="onClick(p)"
            >
                {{p}}
            </a>
        </li>

        <li 
            v-if="(firsts.length > 0) && (middles.length > 0) && (firsts[firsts.length - 1] + 1 < middles[0])"
        >
            <span class="pagination-ellipsis">&hellip;</span>
        </li>

        <li 
            v-for="p in middles" 
            :title="'Go to page #' + p"
        >
            <a 
                href="javascript:void(0);"
                :class="{'pagination-link': true, 'is-current' : current_page == p}"
            
                @click.prevent="onClick(p)"
            >
                {{p}}
            </a>
        </li>
    
        <li 
            v-if="(middles.length > 0) && (lasts.length > 0) && (middles[middles.length-1] + 1 < lasts[0])"
        >
            <span class="pagination-ellipsis">&hellip;</span>
        </li>


        <li 
            v-for="p in lasts" 
            :title="'Go to page #' + p"
        >
            <a 
                href="javascript:void(0);" 
                :class="{'pagination-link': true, 'is-current' : current_page == p}"

                @click.prevent="onClick(p)"
            >
                {{p}}
            </a>
        </li>
    </ul>


</template>

<script>


	export default 
    {

    	props:
    	{
    		size: {type: String, default: 'sm'},
            current_page: {type: Number, default: 1, required: true},
            last_page: {type: Number, default: 1, required: true},
            has_incremental: {type: Boolean, default: true},
            arround: {type: Number, default: 2},
    	},

        computed:
        {
            has_previous()
            {
                if( ! this.has_incremental )
                {
                    return false;
                }
                if(this.current_page > 1)
                {
                    return true;
                }
                return false;
            },

            has_next()
            {
                if( ! this.has_incremental )
                {
                    return false;
                }
                if(this.current_page < this.last_page)
                {
                    return true;
                }
                return false;
            },

            firsts()
            {
                let result = [];
                for(let i = 1; i <= this.arround; i++)
                {
                    if( i <= this.last_page)
                    {
                        result.push(i);
                    }
                }
                return result;
            },

            middles()
            {
                let result = [];
                for(let i = this.current_page - this.arround; i <= this.current_page + this.arround; i++)
                {
                    if( (i >= 1) && (i <= this.last_page)  && (this.firsts.indexOf(i) == - 1) )
                    {
                        result.push(i);
                    }
                }
                return result;
            },

            lasts()
            {
                let result = [];
                for(var i = this.last_page - this.arround + 1; i <= this.last_page; i++)
                {
                    if( (i >= 1) && (this.firsts.indexOf(i) == - 1) && (this.middles.indexOf(i) == - 1) )
                    {
                        result.push(i);
                    }
                }
                return result;
            }
        },

        methods:
        {
            onClick(newpage)
            {
                this.$emit('change-page', {oldpage: this.current_page, newpage: newpage});
            }
        }


    }

</script>

<style lang="scss" scoped>
    ul.pagination
    {
        margin: 0px;
        li > a.is-current
        {
            background-color: #3c8dbc;
            border-color: #3c8dbc;
            color: #fff;
        }
    }
</style>