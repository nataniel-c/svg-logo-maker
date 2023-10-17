class Shape {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    setColor(color) {
        return `fill=${color}/>`;
    }
    setShape(name) {
        switch(name) {
            case 'triangle' :
                return Triangle().render();
                break;
            case 'circle' :
                return new Circle().render();
                break;
            case 'square':
                return new Square().render();
                break;
        }
      }
    render() {
        return `${this.setShape(this.name)}  ${this.setColor(this.color)}`;
    }
}

class Triangle extends Shape {
    render() {
        return '<polygon points="150,0 270,190 20,190" ';
    }
}

class Circle extends Shape {
    render() {
        return '<circle cx="150" cy="100" r="85" ';
    }
}

class Square extends Shape {
    render() {
        return '<rect x=50 width="200" height="200" ';
    }
}    


module.exports = Shape;