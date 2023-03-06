
const method=(health,damage)=>{
    const car = {
        color: [],
        health: health,
        damage: damage,
        model: '',
        set_color:(c)=>this.color = c,
        get_color:()=> this.color,
    }


    console.log(car.set_color('hi'))
    console.log(car.get_color())
}
method(100,10)
