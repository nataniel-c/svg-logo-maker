class Text {
    constructor(text, color) {
        this.text = text;
        this.color = color;
    }
    setColor(color) {
        return `fill=${color}>`;
    }
    render() {
        return `<text x=115 y=110 font-size=300% ${this.setColor(this.color)} ${this.text} </text>`;
    }
}

module.exports = Text;