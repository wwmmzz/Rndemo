#### 完成效果如图

https://github.com/wwmmzz/Rndemo

![](grzc8-0v61k.gif)

#### 模拟接口：

见mocker/user.mock.js

``` js
'GET /api/recommend': {
    msg:[
  {
      "title": "数字",
      "article": "123"
  },
  {
      "title":"字母",
      "article": "abc"
  },
  {
    "title":"汉字",
    "article": "abc"
}
]
```

#### 接口调用：

见src/services/users.js

````js
/**
 * recommend
 */
export async function userRecommend(params) {
  return fetch('/api/recommend', {
    method: 'GET',
    body: params,
  });
}

````

#### models：

见models/data.js

``` js
import { userRecommend } from '../services/users';

export default {
        state:{
            msg:[
                {
                    title:'一'
                },
                {
                    title:'二'
                }
            ],
        },
        reducers:{
            getdata(state, payload){
                console.log('调用了reduce')
                state.msg = payload
                return state
            },
            
        },
        effects: {
            async recommend(){
                const data =await userRecommend()
                this.getdata(data)
            }
        }

        
        }
```





