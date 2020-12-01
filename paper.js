class Paper{
    constructor(){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2

         }
this.body = Bodies.circle(100,640,3,options)

World.add(world,paper)

    }



}
