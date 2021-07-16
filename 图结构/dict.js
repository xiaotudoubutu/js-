      function Dictionary(){
            // 字典的属性
            this.items ={}
            // 字典操作方法
            // 在字典中添加键值对
            Dictionary.prototype.set =function(key,value){
                this.items[key]=value
            }
            // 判断字典中是否有key
            Dictionary.prototype.has=function(key){
                return this.items.hasOwnProperty(key)
            }
            // 从字典中移除元素
            Dictionary.prototype.remove = function(key){
                if(!this.has(key)) return false
                delete this.items[key]
                return true
            }
            // 根据key获取values
            Dictionary.prototype.get = function(key){
                return this.has(key)?this.items[key]:undefined
            }
            // 获取所有的keys
            Dictionary.prototype.keys = function(){
                return Object.values(this.items)
            }
            // 获取所有的values
            Dictionary.prototype.values = function(){
                return Object.values(this.items)
            }
            // size
            Dictionary.prototype.size= function(){
                return this.keys().length
            }
            // clear
            Dictionary.prototype.clear=function(){
                this.items={}
            }
        }

