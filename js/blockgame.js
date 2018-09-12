// canvas对象
var blockgame=function()
{
  var canvas=document.getElementById("id-canvas")
  var ctx=canvas.getContext('2d')
  var g={
    score:0,
    actions:{},
    keydown:{},
    lv:0,
    img:["image/background1.png","image/background2.png","image/background3.png"],
    drawbreak:function(bkimage)
    {
      this.ctx.save()
      this.ctx.fillStyle=bkimage.color
      this.ctx.fillRect(bkimage.x,bkimage.y,bkimage.w,bkimage.h)
      this.ctx.restore();
    }
  }
  g.canvas=canvas
  g.ctx=ctx;
  //记录按下的按键
  window.addEventListener('keydown',function(event){
    g.keydown[event.key]=true
  })
  window.addEventListener('keyup',function(event){
      g.keydown[event.key]=false
    })
  //记录按下按键的action
  g.registerAction=function(key,callback)
  {
    g.actions[key]=callback
  }
  g.drawbackground=function()
  {
    var img=new Image()
    var src=g.img[g.lv]
    img.src=src
    g.ctx.clearRect(0,0,400,400)
    g.ctx.drawImage(img,0,0,400,300,0,0,400,400)
  }
  //开始循环 检测按下的按键并执行相应callback，更新状态
  var s=setInterval(function(){
    var actions=Object.keys(g.actions)
    for(var i=0;i<actions.length;i++)
    {
      var key=actions[i]
      if(g.keydown[key])
      {
        g.actions[key]()
      }
    }
    g.update()
    g.draw()
  },1000/60)
  //停止循环
  g.stop=function()
  {
    clearInterval(s);
    console.log("停止")
  }
  return g
}
