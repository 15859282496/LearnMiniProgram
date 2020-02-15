Page({
  data:{
    name:'Coderwhy',
    age:18,
    students:[
      {id:110,name:'kobe',age:30},
      { id: 111, name: 'kobe1', age: 30 },
      { id: 112, name: 'kobe2', age: 30 },
      { id: 113, name: 'kobe3', age: 30 }
      ],
    counter: 0
  },
  handleBtnClick(){
    //错误做法：页面不刷新
    //this.data.counter +=1
    //console.log(this.data.counter)
    //2.this.setData
    this.setData({
      counter:this.data.counter+1
    })
  },
  handleBtnClick1() {
    this.setData({
      counter: this.data.counter - 1
    })
  }
 
})