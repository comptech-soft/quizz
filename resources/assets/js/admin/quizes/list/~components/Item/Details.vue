<template>
	<div class="quiz-details">
        <div class="row">
            <div v-if="record.image_url" class="col-xs-6">
                <div class="detail-block">
                    <h5 class="detail-caption">
                        Quiz image
                    </h5>
                    <img :src="record.image_url" class="img-respomsive" />
                </div>
                <div class="detail-block">
                    <h5 class="detail-caption">
                        Description
                    </h5>
                    <div class="detail-value" v-html="record.description">
                    </div>
                </div>
            </div>

            <div :class="{'col-xs-6': record.image_url, 'col-xs-12': ! record.image_url}">
                <ul class="list-group">
                    <li 
                        v-for="item in fields"
                        class="list-group-item"
                    >
                        <h5 class="detail-caption">
                            {{ item.caption }}
                        </h5>
                        <div class="detail-value" v-html="item.render(record)">
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
                        render: record => record.name
                    },
                    {
                        caption: 'Slug',
                        render: record => record.slug
                    },
                    {
                        caption: 'Title',
                        render: record => record.title
                    },
                    {
                        caption: 'Questions',
                        render: record => record.questions.length
                    },
                    {
                        caption: 'Time to solve',
                        render: record => record.time + ' min'
                    },
                    {
                        caption: 'Minimum percentage for success',
                        render: record => record.success_percentage + ' %'
                    },
                    {
                        caption: 'Created At',
                        render: record => DateTime.humanFromNow(record.created_at)
                    },
                    {
                        caption: 'Updated At',
                        render: record => DateTime.humanFromNow(record.updated_at)
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