class roof
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{

			var position=this.body.position;		

			push()
			translate(position.x, position.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill("blue")
			rect(0,0,this.w, this.h);
			pop()
    }
}