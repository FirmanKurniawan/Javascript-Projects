class Shape{
    constructor(ctx,x,y,fill,state1=Utility.bool(),state2=Utility.bool()){
        this.ctx = ctx
        this.x = x
        this.y = y
        this.fill = fill
        this._dx = state1? 1+Math.random()*4: -(1+Math.random()*4)
        this._dy = state2? 1+Math.random()*4: -(1+Math.random()*4)
    }
    move_next(){
        this.x += this._dx
        this.y += this._dy
    }
}
class Rectangle extends Shape{
    constructor(ctx,x,y,w=20,h=20,fill=Utility.random_color()){
        super(ctx,x,y,fill)
        this.w = w
        this.h = h
    }
    draw(){
        this.ctx.beginPath()
        this.ctx.rect(this.x,this.y,this.w,this.h)
        this.ctx.fillStyle = this.fill
        this.ctx.fill()
        this.ctx.closePath()
    }
    check_boundary(w,h){
        if(this.x + this._dx > w - this.w || this.x + this._dx < 0){
            this._dx = -this._dx
        }
        if(this.y + this._dy > h - this.h || this.y + this._dy < 0){
            this._dy = -this._dy
        }
    }
}
class Circle extends Shape{
    constructor(ctx,x,y,r=10,fill=Utility.random_color()){
        super(ctx,x,y,fill)
        this.r = r
    }
    draw(){
        this.ctx.beginPath()
        this.ctx.arc(this.x,this.y,this.r,0,Math.PI*2)        
        this.ctx.fillStyle = this.fill
        this.ctx.fill()
        this.ctx.closePath()
    }
    check_boundary(w,h){
        if(this.x + this._dx > w - this.r || this.x + this._dx < this.r){
            this._dx = -this._dx
        }
        if(this.y + this._dy > h - this.r || this.y + this._dy < this.r){
            this._dy = -this._dy
        }
    }
}

class Utility{
    static range(val){
        return (val-100)*Math.random()
    }
    static bool(){
        return Math.random() > 0,5
    }
    static random_color(){
        return "#"+Math.floor(Math.random()*16777215).toString(16)
    }
}

class Game{
    constructor(id,count=1){
        let canvas = document.getElementById(id)
        this.ctx = canvas.getContext("2d")
        this.w = canvas.width
        this.h = canvas.height
        this.count = count
        this.object = []
        for (let i = 0; i < this.count; i++) {
            let x = Utility.range(this.w)+15
            let y = Utility.range(this.h)+15
            if (Utility.bool())
                this.object.push(new Rectangle(this.ctx,x,y))
                this.object.push(new Circle(this.ctx,x,y))
        }
    }
    draw(){
        this.ctx.clearRect(0,0,this.w,this.h)
        this.object.forEach(item => {
            item.draw()
            item.check_boundary(this.w,this.h)
            item.move_next()
        })
    }
}