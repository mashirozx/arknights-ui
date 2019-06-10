var GYST = {
    //横竖屏判断
    landScape : function(option) {
        var _this = this;
        _this.option = {
            'pic': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAAB4CAMAAADVLa6HAAABCFBMVEUAAAAAAAAAAABWVlYAAADFxcUAAACKioovLy8AAAAAAAAAAAC+vr6+vr6EhIQAAAALCwsBAQEGBgbIyMjGxsYAAADGxsbHx8cAAADHx8fAwMCoqKi9vb1SUlIGBgbHx8fFxcW0tLSxsbGgoKC7u7slJSVeXl6ysrLFxcW/v7+7u7uoqKiRkZEUFBQFBQWMjIxxcXHExMTExMTCwsK6urq2trbBwcHExMSsrKzExMS1tbWUlJTDw8O0tLSnp6dpaWm9vb1ZWVmDg4PAwMCvr6+Ojo4+Pj4xMTFKSkpnZ2e2trahoaGxsbGfn5+3t7ecnJyvr6+CgoKVlZU9PT1WVlasrKy8vLzJycmXdzvDAAAAV3RSTlMAARMjBL8WfEggDinGSGgeBwsj++IU8vkb9N6oeE0x7tBMt49nLykPxtLEmoM9NxcG6dvl0Ma6sLCnnYmHb11cW1hSUUFAOzo2NCQcqpmOfXx1bUY9Ny21pUe+AAAC6klEQVR42uzaV2/bMBSGYVI9kRs6aanhWc/YiffKHs1oM5t0r+///5MyrgvXqR0XuZIP+N5IF7rQAxIHAkQxTpJWDo+URySmRPri48oghcUvKDbef/UT3j9Mqaub4FSydePqSSb9KAGZtU9v3208W/g2Lk8OQ8Ns+4r+NlZTSFbWXaWJSC58BuGdlIC1dYfGxhywc+V6JPhEOhdgZ6yUZ8CruMOJOGSWM1iLqxHrNmOMiptRCFkOcOTr3/e72C6wW8ehLIfkN3cou0DqTZqjUYh+yexRT5j2sB/3pGDZKjKdBAlRC8B1IYWQm4gtG9w5sgVn2kKS5yxAcwbmazNgvfvLvrlMaQmL0JWSj+/XbEEJcYCKrxcX+dx9FHmLVNcRYhftWcj2ddS/ZOcia0AnIY0ltjwDGfO1jHZzkcI8MULSDORy1KfufyFdi7TISGSRFmmR0coiLdIio9UTkMMfPh5Jzkiqhkg1vyeIM/IcK63DTCOuJGPkXlhIe8c4dYkxcmklrsQqXry0yEhlkRZpkdHKIi3SIqOVRVqkRUYri+SJJK2U4zhKE1sk9Y6bYRAMmpUb1yOeyH6uiFGp1rpDkh9S3tWBbMWc17383DB3eVdLdsi7EMmY72gy6XKIYt4lbsh+HVv59J+BI3slZK8TxAyZQzKfpvGc7YX3JwclK2StiCPfmMaVEeRdYoU8w1Y3MfGuVMcHX7NCHgyPtU5UxXZBsULW8eXhq/7EoOuwQoY4fXhkt4agwwv5q707OGEYiKEg2kUgpyQtpBn334nB+OgChN78DgYWe1eg+Z8nyGMZ5PfpuL6WHVfiw0P8QojLAHGtMy7oxFPLeDQT4497kPV/7x5kGSNJZLgcZJCjE2SQQc5KkEEGOStButsExF4IseFD7GoZW3dBjkyQQQY5K0EGGeSsBClCrle6EXI+QrNICDMJ9SkhsV2tI/5dOmJFLE0owgnZu6HtJwoYjCoNoxTFqLcxiop2V06dXT9t25ovKx4AAAAASUVORK5CYII=',
            'mode': 'portrait',
            'bgcolor': '#333',
            'txtColor': '#FFFFFF',
            'prefix': 'page',
            'picZoom': 2,
            'zIndex': 9999999,
            'init': false,
            'landback': false
        };
        if (option.mode && option.mode != 'portrait') {
            _this.option.txt = '为了更好的体验，请使用横屏浏览'
        } else
            _this.option.txt = '为了更好的体验，请使用竖屏浏览';
        for (var k in option)
            if (option[k] != '')
                _this.option[k] = option[k];
        function createCss() {
            var cssBlock = '.' + _this.option.prefix + '-landscape{width:100%; height:100%; background:' + _this.option.bgcolor + ';position: fixed; left:0; right:0; top: 0; bottom:0;z-index:' + _this.option.zIndex + '; display:none; text-align: center;}.' + _this.option.prefix + '-landscape-box{position: relative; margin-left: auto; margin-right: auto; top: 50%; transform:translateY(-50%); -webkit-transform:translateY(-50%);}.' + _this.option.prefix + '-landscape span{font-size:16px;display:block;color:' + _this.option.txtColor + '; text-align:center;width: 100%;padding-top: 40px; line-height:2;}.' + _this.option.prefix + '-landscape img{-webkit-animation: ' + _this.option.prefix + '-landscapeAni 1.2s ease infinite alternate;animation: ' + _this.option.prefix + '-landscapeAni 1.2s ease infinite alternate;}@-webkit-keyframes ' + _this.option.prefix + '-landscapeAni{0% {-webkit-transform:rotate(90deg);}30% {-webkit-transform:rotate(90deg);}70%{-webkit-transform:rotate(0deg);}100% {-webkit-transform:rotate(0deg);}}@keyframes ' + _this.option.prefix + '-landscapeAni{0% {transform:rotate(90deg);}30% {transform:rotate(90deg);}70%{transform:rotate(0deg);}100% {transform:rotate(0deg);}}';
            var style = document.createElement("style");
            style.type = "text/css";
            style.textContent = cssBlock;
            document.getElementsByTagName("HEAD").item(0).appendChild(style)
        }
        function createDom() {
            var landscapeDom = document.createElement("div");
            landscapeDom.className = _this.option.prefix + '-landscape';
            landscapeDom.id = _this.option.prefix + '-landscape';
            landscapeDom.innerHTML = '<div class="' + _this.option.prefix + '-landscape-box"><img src="' + _this.option.pic + '" id="' + _this.option.prefix + '-landscape-pic" style="display:inline-block;" /><span>' + _this.option.txt + '</span></div>';
            document.body.appendChild(landscapeDom);
            var img_url = _this.pic;
            var img = new Image();
            img.src = _this.option.pic;
            img.onload = function() {
                document.getElementById(_this.option.prefix + '-landscape-pic').width = parseInt(img.width / _this.option.picZoom);
                document.getElementById(_this.option.prefix + '-landscape-pic').height = parseInt(img.height / _this.option.picZoom)
            }
        }
        createCss();
        createDom();

        var landNode = document.getElementById(_this.option.prefix + '-landscape');
        var optionMode = option.mode? option.mode : _this.option.mode;
        var winW = document.documentElement.clientWidth || window.innerWidth;
        var winH = document.documentElement.clientHeight || window.innerHeight;
        var initOrientation = winW>winH? 'landscape':'portrait';
        var isOrientationReload = initOrientation==optionMode? false:true;
        if(initOrientation != optionMode)
            landNode.style.display = 'block';
        else
            landNode.style.display = 'none';

        var updateOrientation = function() {
            document.activeElement.blur();
            var orientation = window.orientation;
            switch(orientation) {
                case 90: case -90:
                orientation = 'landscape';
                break;
                default:
                    orientation = 'portrait';
            }
            if(orientation != optionMode)
                landNode.style.display = 'block';
            else
                landNode.style.display = 'none';
        }
        window.addEventListener('DOMContentLoaded', function(){
            window.addEventListener('orientationchange', function(){
                if(isOrientationReload){
                    location.reload(true);
                }
                updateOrientation();
            }, false);
        }, false);
    },
    _stopScroll : function(){
        event.preventDefault();
    },
    //禁止滚动
    disableScroll : function(){
        document.body.addEventListener('touchmove', this._stopScroll, {passive: false});
    },
    //恢复滚动
    enableScroll : function(){
        document.body.removeEventListener('touchmove', this._stopScroll);
    },
    //弹窗操作
    dialogAction : function(option){
        var ths = this;
        var opt = {
            'rootEle': '#pageContainer',
            'wrapClass': '.mod-dialog-wrap',
            'openClass': '.j-openDialog',
            'closeClass': '.j-closeDialog'
        };
        for (var k in option)
            if (option[k] != '')
                opt[k] = option[k];

        $(opt.rootEle).on('click',opt.openClass,function(){
            var dg = $('#'+$(this).data('dialogid'));
            dg.show().addClass('show');
            if(dg.data('scroll')!='scroll')
                ths.disableScroll();
        }).on('click',opt.closeClass,function(){
            var dg = $(this).closest(opt.wrapClass);
            dg.removeClass('show');
            if(dg.data('scroll')!='scroll')
                ths.enableScroll();
        });
    }
};


$(function(){
    GYST.dialogAction({});
});