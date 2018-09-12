//挡板对象
var Paddle=function()
{
  var o={
    x:150,
    y:300,
    color:'#1E90FF',
    moveleft:function()
    {
      if(this.x>=10)
      this.x-=10;
    },
    moveright:function()
    {
      if(this.x<=240)
      this.x+=10
    },
    onrush:function(ballimage)
    {
      if((ballimage.y+15)>this.y&&(ballimage.y-5)<(this.y+30))
        {if((ballimage.x+15)>this.x&&(ballimage.x-5)<(this.x+150))
          {return true;}
        }
      else {
        return false;
      }
    }
  }

  return o;
}
