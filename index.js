import Vue from 'vue';

/**
 * @name Vue中封装jsonp跨域请求方法
 * @param {String} url 
 * @param {Object} params 
 * @param {String} jsonpCallback //通常为 callback / cb
 * @datetime 2019年7月25日11:19:40
 * @returns {Function}
 */
Vue.prototype.$jsonp = (url, parama, jsonpCallback) => {
    let str = "";
    for (let key in parama) {
        str += key + "=" + parama[key] + "&";
    }
    return new Promise((resolve, reject) => {
        //1.随机生成一个函数名称
        let fnName = "toyo_" + parseInt(Math.random() * 1000);
        //2.把随机的函数名绑定到window,并绑定函数
        window[fnName] = res => {
            resolve(res);
        };
        //3.创建一个script;
        let oScript = document.createElement("script");
        //4.1给script绑定 src的路径
        url = url + "?" + str + jsonpCallback + "=" + fnName
        oScript.setAttribute('src', url);
        //4.2 让scriot去加载数据(绑定到body上)
        document.body.appendChild(oScript);
        // 凡是带有 src的标签,都会有一个 onload事件!!!
        oScript.addEventListener("load", function () {
            //5.数据加载完成后,销毁script
            this.remove();
            //6.消除随机函数
            delete (window[fnName]);
        })
    })
}


export default {
    jsonp: (url, parama, jsonpCallback) => {
        let str = "";
        for (let key in parama) {
            str += key + "=" + parama[key] + "&";
        }
        return new Promise((resolve, reject) => {
            //1.随机生成一个函数名称
            let fnName = "toyo_" + parseInt(Math.random() * 1000);
            //2.把随机的函数名绑定到window,并绑定函数
            window[fnName] = res => {
                resolve(res);
            };
            //3.创建一个script;
            let oScript = document.createElement("script");
            //4.1给script绑定 src的路径
            url = url + "?" + str + jsonpCallback + "=" + fnName
            oScript.setAttribute('src', url);
            //4.2 让scriot去加载数据(绑定到body上)
            document.body.appendChild(oScript);
            // 凡是带有 src的标签,都会有一个 onload事件!!!
            oScript.addEventListener("load", function () {
                //5.数据加载完成后,销毁script
                this.remove();
                //6.消除随机函数
                delete (window[fnName]);
            })
        })
    }
}


