MyApp1
---

React Native UIW Template

## Development

```bash
cd ios/ && pod install && cd ../

# Mocker API
npm run api

# Run the app with iOS.
npm run ios
```

## Main Directory Structure

```
.
├── mocker                            # mocker data
├── android                           # native android code
├── ios                               # native ios code
├── src                               # code directory
│   ├── components                    # react components
│   ├── models                        # The models brings together state, reducers, async actions & action creators in one place
│   ├── pages                         # route pages
│   ├── routes                        # route configuration
│   ├── services                      # api request
│   ├── utils                         # public method
│   ├── App.js                        # route entery page
│   ├── config.js                     # app configuration
│   └── global.js                     # Store some global objects for easy calling
├── .eslintrc                         # eslint configuration
├── index.js                          # app entry file
└── package.json                      # This document is all you need to know about what’s required in your package.json file.
```





#### 完成效果如图

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

见src/page/MyHome/Recommend/index.js

````js
let res = await fetch('http://192.168.56.1:3721/api/recommend', {method: 'GET'});



export default connect(
  ({ data}) => ({
    rdata: data.msg,
  }),({data})=>({
    getdata: data.getdata,
  })
)(MyRecommend);

````

#### models：

见models/data.js

``` js
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
        
        }
```





