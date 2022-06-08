// 액션 타입을 정해줍니다.
const LOAD = "dic/LOAD";
const CREATE = "dic/CREATE";
const SETDIC = "dic/SETDIC";
const UPDATE = "dic/UPDATE";
const DElETE = "dic/DELETE";

const initialState = {
  dic:[],

};

// 액션 생성 함수예요.
// 액션을 만들어줄 함수죠!
export function loadDic  (dic)  {
  return { type: LOAD, dic };
};

export function createDic  (dic) {
  return { type: CREATE, dic };
};
export function setDic  (dic) {
  
  return { type: SETDIC, dic};
};
export function updateDic (dic) {
  return {type:UPDATE, dic};
}
export function deleteDic (id) {
  return {type:DElETE, id};
  
}
// 리듀서예요.
// 실질적으로 store에 들어가 있는 데이터를 변경하는 곳이죠!
export default function reducer(state = initialState , action = {}) {
  switch (action.type) {
    // do reducer stuff
    case LOAD:
      {
      return state;
      }
    case CREATE:
      {
      const new_dic_list = [...state.dic, action.dic];
      
      return { dic: new_dic_list };
      }
    case SETDIC:
      {
      state.dic = action.dic;
      
      return { dic: state.dic };
      }
    case UPDATE:
      {
      return {dic:state.dic};
      }
    case DElETE:
      {
      const new_dic_list = state.dic.filter((dic,idx)=>{
        
         if (action.id != idx ) {
           return dic;
         }
         
      })
      console.log(new_dic_list);
       return {dic:new_dic_list} 
     }
    default:
      {
      return state;
      }
  }
}