class stack{
  constructor(size=null) {
    this.data = [];
    if ((size == null) || (size <= 0)){
      size = 1;
    }         
    for(var i = 0; i < size; i++){
      this.data.push(null);
    }      
    this.top = -1;
  }
  
  getTop(){
    return this.data[this.top];
  }

  push(value=null){
    if((this.top+1) > (this.data.length - 1)){
      this.data.push(value);
      this.top += 1;
      return;
    }
    this.top += 1;
    this.data[this.top] = value;
  }

  pop(){
    this.data[this.top] = null;
    this.top -= 1;
  }

  getData(){
    var r = "";
    for(var i = 0; i < this.data.length; i++){
      if(this.data[i] == null){
        r += "null-·";
      }else{
        r += this.data[i].toString() + "-·";
      }
    }
    return r;
  }
} 

window.onload = function () {
  s = new stack(2);
  document.getElementById("labelNormal").innerHTML = s.getData();
  console.log(s.getData());

  document.getElementById("pushButton").onclick = function(){
    s.push(document.getElementById("inputData").value);
    document.getElementById("labelNormal").innerHTML = s.getData();
  };

  document.getElementById("popButton").onclick = function(){
    s.pop();
    document.getElementById("labelNormal").innerHTML = s.getData();
  };
};