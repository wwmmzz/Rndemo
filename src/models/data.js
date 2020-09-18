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

    
