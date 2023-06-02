import { computed } from 'vue';
import { mapState,useStore } from 'vuex';

export default function useState(mapNameArr){
  const store = useStore();
  const stateFnsObj = mapState(mapNameArr);
  const newState ={};
  Object.keys(stateFnsObj).forEach(i=>{
    newState[i] = computed(stateFnsObj[i].bind({$store:store}))
  })
  return newState
}