//create: store를 생성해주는 함수
import { create } from "zustand"

const useCountStore = create((set,get)=>({
    count:0,
    increase:()=>set((state)=>({
        count:state.count + 1,
    })),
    increaseBy:(number)=>set((state)=>({
        count:state.count + number,
    })),
    decrease: ()=>set((state)=>({
        count: state.count > 0 ? state.count -1 : state.count
    }))
    // decrease:()=>{
    //     let {count} = get();
    //     console.log(get());

    //     if(count > 0){
    //         set((state)=>({
    //             count:state.count-1,
    //         }))
    //     }
    // }
}))

export default useCountStore;
