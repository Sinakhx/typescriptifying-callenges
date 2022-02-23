class Circle {
    #config; // gets optional color & radius properties

    constructor(config) {
        this.#config = {
            color: config?.color ?? "green",
            radius: config?.radius ?? 0,
        }
    }

    draw() {
        console.log(
            "Drawing a Circle.",
            "Color:", this.#config.color,
            "Radius:", this.#config.radius
        );
    }
}

export default Circle;