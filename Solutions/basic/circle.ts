// Optional members for consumers
type CircleConfig = {
    color?: string;
    radius?: number;
}

class Circle {
    // Required: Internally all members will always be present
    private config: Required<CircleConfig>;

    constructor(config: CircleConfig) {
        this.config = {
            color: config.color ?? "green",
            radius: config.radius ?? 0,
        }
    }

    draw() {
        // No null checking needed :)
        console.log(
            "Drawing a Circle.",
            "Color:", this.config.color,
            "Radius:", this.config.radius
        );
    }
}

export default Circle;
