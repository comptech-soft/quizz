<template>
	<div v-if="ready" class="ranking-container">
        <div class="grey-box-icon">
            <div class="icon-box-top grey-box-icon-pos">
                <img src="/images/1.png" alt="">
            </div>

            <h4>
                {{ $t('ranking.total', {total: total}, 2) }}
            </h4>

            <h4>
                {{ $t('ranking.title') }}                
            </h4>
            <button
                class="btn btn-primary btn-xs"
                @click="reload"
            >
                <i v-if="loading" class="fa fa-spinner fa-spin"></i>
                {{ $t('ranking.reload') }}   
            </button>

            <div v-if="data != null" id="ranking-list-container">
                
                <div 
                    v-for="(record, index) in records"
                    :class="{
                        'record-item': true,
                    }"
                >
                    <div class="user-info">
                        <strong>#{{(data.current_page - 1) * data.per_page + index + 1}}</strong>. 
                        {{ record.user.first_name}}, {{record.user.last_name}}<br/>
                        {{ $t('ranking.class', {class: record.user.class}) }}
                    </div>

                    <div class="user-points">
                        <div class="points">
                            {{ record.points }}
                        </div>
                        <div class="times">
                            {{ difference(record) }}
                        </div>
                    </div>

                    <div class="clearfix"></div>
                </div>
            </div>

            <div v-if="data != null" class="row row-navigation">
                <div class="col-xs-3 col-prev">
                    <p v-if="page > 1">
                        <a href="#" @click.prevent="prev">
                            <em>
                                <i class="fa fa-fw fa-chevron-left"></i>
                            </em>
                        </a>
                    </p>
                </div>
                <div class="col-xs-6">
                     {{ $t('ranking.current-page', {page: page, total: data.last_page  }) }}
                </div>
                <div class="col-xs-3 col-next">
                    <p v-if="page < data.last_page">
                        <a href="#" @click.prevent="next">
                            <em>
                                <i class="fa fa-fw fa-chevron-right"></i>
                            </em>
                        </a>
                    </p>
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

            records()
            {
                if(this.data == null)
                {
                    return [];
                }
                return this.data.data;
            },

            total()
            {
                if(this.data == null)
                {
                    return 0;
                }
                return this.data.total;
            },
        },

        data()
        {
            return {
               
               loading: false,

               data: null,
               page: 1,

            };
        },

        methods:
        {

            difference(record)
            {
                let r = DateTime.difference(record.finished_at, record.start_at);
                return _.padStart(r.hours, 2, '0') + ':' + _.padStart(r.minutes, 2, '0') + ':' + _.padStart(r.seconds, 2, '0');
            },

            reload()
            {
                this.getRanking();
            },

            getRanking()
            {
                let vm = this;
                this.loading = true;
                Requests.post('get-ranking?page=' + this.page, {})
                    .then( r => {
                        this.data = r.data;
                        this.loading = false;
                    });
            },

            next()
            {
                this.page++;
                this.getRanking();
            },

            prev()
            {
                this.page--;
                this.getRanking();
            }

        },

        mounted()
        {
           this.getRanking();
        },

        name: 'ranking'
    }

</script>

<style lang="scss" scoped>
    h4
    {
        margin: 5px auto;
    }

    #ranking-list-container
    {
        margin-top: 20px;
        text-align: left;

        .record-item
        {
            margin: 5px 0px;
            padding: 5px;
        }

        .user-info, .user-points
        {
            float:left;
        }

        .user-info
        {
            width: 70%;
        }

        .user-points
        {
            width: 30%;
            text-align: right;
            .points
            {
                height: auto;
                margin: 0px 0px 0px auto;
                font-size:16px;
                font-weight: bold;
                background-color: #3d84e6;
                color: #fff;
                border-radius: 20px;
                text-align: center;
            }
            .times
            {
                height: auto;
                margin: 0px 0px 0px auto;
                font-size:14px;
                font-weight: bold;
                border-radius: 20px;
                text-align: center;
            }
        }
    }

    .row-navigation
    {

        .col-prev
        {
            text-align: left;
        }

        .col-next
        {
            text-align: right;
        }

        p
        {
            margin-bottom: 0px;
            a
            {
                background-color: #426876;
                color: #fff;
                padding: 6px 12px;
                &:hover
                {
                    opacity: 0.7;
                }
            }
        }
    }
</style>