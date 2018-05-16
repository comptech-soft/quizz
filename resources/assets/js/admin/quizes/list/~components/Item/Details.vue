<template>
	<div class="quiz-details">
        <div class="row">
            <div v-if="record.image_url" class="col-xs-4">
                <img :src="record.image_url" class="img-respomsive" />
            </div>

            <div :class="{'col-xs-8': record.image_url, 'col-xs-12': ! record.image_url}">
                <ul class="list-group">
                    <li 
                        v-for="item in fields"
                        class="list-group-item"
                    >
                        <h5 class="detail-caption">
                            {{ item.caption }}
                        </h5>
                        <div class="detail-value" v-html="record[item.field]">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    export default 
    {

    	props:
    	{
    		record: {required: true},
    	},

        computed:
        {

        },

        data()
        {
            return {
                fields: [
                    {
                        caption: 'Name',
                        field: 'name',
                    },
                    {
                        caption: 'Slug',
                        field: 'slug',
                    },
                    {
                        caption: 'Title',
                        field: 'title',
                    },
                    {
                        caption: 'Description',
                        field: 'description',
                    },
                    {
                        caption: 'Time to solve in minutes',
                        field: 'time',
                    },
                    {
                        caption: 'Minimum percentage for success (%)',
                        field: 'success_percentage',
                    },
                    {
                        caption: 'Created At',
                        field: 'created_at',
                    },
                    {
                        caption: 'Updated At',
                        field: 'updated_at',
                    }
                ]
            };
        },

        methods:
        {

        },

        name: 'quiz-details'
    }

</script>