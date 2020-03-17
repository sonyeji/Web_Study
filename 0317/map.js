/**
 * MyMap 생성자로 사용될 함수를 구현
 */
function MyMap() {
  var map = {};
  map.value = {};
  var len = 0;
  
  map.put = function(id, val) {
	  map.value[id] = val;
	  len++;
  };
  
  map.size = function(){
	  return len;
  }
  
  map.get = function(id) {
    var key = id;
    if(map.value[key]) {
      return map.value[key];
    }
    return undefined;
  };
  
  map.remove = function(id) {
    if(map.contains(id)){
      map.value[id] = undefined;
    }
    len--;
  };
  
  map.contains = function(id) {
	  var key = id;
	  if(map.value[key]) {
		  return true;
	  } else {
		  return false;
	  }
  };
  
  map.clear = function(){
	  map = {};
	  map.value = {};
	  len = 0;
  }
  
  return map;
}