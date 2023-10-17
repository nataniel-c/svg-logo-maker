class Text {
    constructor(text, color) {
        this.text = text;
        this.color = color;
    }
    setColor(color) {
        return `fill='${color}'>`;
    }
    render() {
        return `<text x="50%" y="50%" font-size=400% dominant-baseline="middle" text-anchor="middle" ${this.setColor(this.color)} ${this.text} </text>`;
    }
}

module.exports = Text;