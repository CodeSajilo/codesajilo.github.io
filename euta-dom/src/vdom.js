export class VDOM {
    constructor(tagName, attributes = {}, children = []) {
        this.tagName = tagName;
        this.attributes = attributes;
        this.children = children;
    }

    render() {
        const el = document.createElement(this.tagName);
        for(let attr in this.attributes)
            el.setAttribute(attr, this.attributes[attr]);
        this.children.forEach(
                c => {
                    if(typeof c === 'string')
                        el.appendChild(document.createTextNode(c));
                    else
                        el.appendChild(c.render());
                }
        );
        return el;
    }
}