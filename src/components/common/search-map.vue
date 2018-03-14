<template>
    <section class="select-map">
        <div class="search-box" v-if="!$route.query.point">
            <div class="weui-search-bar__form">
                <div class="weui-search-bar__box">
                    <i class="weui-icon-search"></i>
                    <input type="search"
                            class="weui-search-bar__input"
                            id="searchInput"
                            placeholder="搜索"
                            v-model="keyValue"
                            @blur="getMess"
                            @keyup.13="getMess">
                </div>
                <label class="weui-search-bar__label" v-if="!isSearch" @click="setSearch">
                    <i class="weui-icon-search"></i>
                    <span>搜索</span>
                </label>
            </div>
        </div>
        
        <div class="map-box" id="containerhouse"></div>

        <section v-if="messDate.length" class="results-box">
            <div class="weui-cells no-margin">
                <div  class="weui-media-box weui-media-box_appmsg"
                    @click="setMap(item)"
                    v-for="(item, index) in messDate">
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">{{item.title}}</h4>
                        <p class="weui-media-box__desc">{{item.address}}</p>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>
<script>
import $ from 'Jquery'
import util from '../../utils/tools'
import { mapActions } from 'vuex'

export default {
    data () {
        return {
            isSearch: false,
            keyValue: '',
            messDate: [],
            mapData: {
                point: '',
                address: '',
                url: ''
            }
        }
    },
    mounted () {
        var _self = this
        this.loadScript()
        window.initialize = function () {
            _self.initMap()
        }
        $('.select-map').height($(document).height())
    },
    methods: {
        ...mapActions([
          'setMapInfo'
        ]),
        loadScript() {
            var mapId = document.getElementById('BaiduMap')

            if (mapId) {
                this.initMap()
                return false
            }

            var script = document.createElement("script")
            script.id = 'BaiduMap'
            script.src = "http://api.map.baidu.com/api?v=2.0&ak=jouhDzsnci9OiZjX4OnXXiaL9QR4mqY9&callback=initialize"
            document.body.appendChild(script)
        },
        getMess () {
            if (this.keyValue === '') {
                this.isSearch = false
                return false
            }

            let _self = this
            var options = {
                onSearchComplete (results) {
                    _self.messDate = results.zr
                }
            }
          
            var local = new window.BMap.LocalSearch('北京', options)
            local.search(this.keyValue)
        },
        setSearch () {
            this.isSearch = true
            $('#searchInput').focus()
        },
        setMap (item) {
            this.drawMap(item)
            var mapData = Object.assign({}, this.mapData)
            this.setMapInfo(mapData)
            
            this.$router.go(-1)
        },
        initMap () {
            if (!this.map) {
                var map = new window.BMap.Map('containerhouse')
                this.map = map

                var point = ''
                
                if (this.$route.query.point) {
                    var pointArr = this.$route.query.point.split(',')
                    point = new window.BMap.Point(pointArr[0], pointArr[1])
                    map.centerAndZoom(point, 15)
                    map.clearOverlays()
                    var marker = new window.BMap.Marker(point)
                    map.addOverlay(marker)
                } else {
                    point = new window.BMap.Point(116.409, 39.918)
                    map.centerAndZoom(point, 15)
                }
            }
        },
        drawMap (mapInfo) {
            this.mapData.point = mapInfo.point.lng + ',' + mapInfo.point.lat
            this.mapData.address = mapInfo.title
            this.mapData.url = this.setImg()
            var point = new window.BMap.Point(mapInfo.point.lng, mapInfo.point.lat)
            this.map.clearOverlays()
            this.map.panTo(point)
            var marker = new BMap.Marker(point)
            this.map.addOverlay(marker)
        },
        setImg () {
            var url = 'http://api.map.baidu.com/staticimage?center=' + this.mapData.point + '&zoom=17&width=750&height=120&markers=' + this.mapData.point + '&name=' + this.mapData.address

            return url
        }
    }
}
</script>
<style lang="scss">
.select-map {
    position: fixed;
    display: flex;
    width: 100%;
    flex-direction: column;
    background: #ffffff;

    .weui-search-bar__form {
        line-height: 26px;
    }

    .search-box {
        position: relative;
        padding: 8px 10px;
        width: 100%;
        height: 44px;
        box-sizing: border-box;
        background-color: #efeff4;
    }

    .results-box {
        .weui-mask {
            opacity: 0;
            display: none;
        }

        .show-box {
            opacity: 1;
            display: block;
        }
    }

    .map-box {
        flex: 1;
        width: 100%;
    }

    .results-box {
        flex: 1;
        overflow: auto;
    }
}
</style>