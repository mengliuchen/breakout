//砖块
var Break=function()
{
  var o={
    x:100,
    y:100,
    w:50,
    h:20,
    alive:true,
    color:'#8B7355',
    turn:true,
    rush:function(ballimage)
    {
      if((ballimage.y+8)>this.y&&(ballimage.y-8)<(this.y+this.h))
        {if((ballimage.x+8)>this.x&&(ballimage.x-8)<(this.x+this.w))
          {console.log("相撞");return true;}
        }
      else {
        return false;
      }
    }
  }
  return o;
}
