import SwaggerEndpoint from "./SwaggerEndpoint";

/**
 * Class representing a Swagger URL tree, used to structure API endpoints hierarchically.
 */
export default class SwaggerPath {
    private pathName: string | null = null;
    private tags: string[] = [];
    private leafs: SwaggerEndpoint[] = [];
    private branches: SwaggerPath[] = [];
    private security: boolean = false;
    private securitySeed: boolean = false;
    private deepSecuritySeed: boolean = false;

    public constructor(path: string = "") {
        this.pathName = path;
    }

    /**
     * Creates a new instance of SwaggerUrlTree using the builder pattern.
     * @returns {SwaggerPath} A new instance of SwaggerUrlTree.
     */
    public static builder() {
        return new SwaggerPath();
    }

    private tagSeed: boolean = false;
    public enableTagSeed() {
        this.tagSeed = true;
        return this;
    }

    /**
     * Sets the base path for the URL tree.
     * @param {string} path - The base path of the API.
     * @returns {SwaggerPath} The updated instance.
     */
    public setPath(path: string) {
        this.pathName = path;
        return this;
    }

    /**
     * Adds tags to the URL tree.
     * @param {string[]} tags - An array of tags.
     * @returns {SwaggerPath} The updated instance.
     */
    public withTags(tags: string[], seed: boolean = false) {
        this.tagSeed = seed;
        this.tags.push(...tags);
        return this;
    }

    /**
     * Adds multiple leaf nodes to the URL tree.
     * @param {SwaggerEndpoint[]} paths - An array of SwaggerUrlLeaf instances.
     * @returns {SwaggerPath} The updated instance.
     */
    public addLeaves(paths: SwaggerEndpoint[]) {
        paths.forEach(p => {
            this.leafs.push(SwaggerEndpoint.copy(p));
        })
        return this;
    }

    /**
     * Adds a single leaf node to the URL tree.
     * @param {SwaggerEndpoint} path - A SwaggerUrlLeaf instance.
     * @returns {SwaggerPath} The updated instance.
     */
    public withEndpoint(path: SwaggerEndpoint) {
        this.leafs.push(SwaggerEndpoint.copy(path));
        return this;
    }

    /**
     * Adds multiple branches (subtrees) to the URL tree.
     * @param {SwaggerPath[]} trees - An array of SwaggerUrlTree instances.
     * @returns {SwaggerPath} The updated instance.
     */
    public addBranches(trees: SwaggerPath[]) {
        trees.forEach(t => {
            this.branches.push(SwaggerPath.copy(t));
        })
        return this;
    }

    /**
     * Adds a single branch (subtree) to the URL tree.
     * @param {SwaggerPath} tree - A SwaggerUrlTree instance.
     * @returns {SwaggerPath} The updated instance.
     */
    public withBranch(tree: SwaggerPath) {
        this.branches.push(SwaggerPath.copy(tree))
        return this;
    }

    /**
     * Adds a parent path to the current tree.
     * @param {string | null} fatherPath - The parent path to prepend.
     */
    public addFatherPath(fatherPath: string | null) {
        if (fatherPath) {
            if (this.pathName) {
                if (this.pathName?.at(0) == '/') this.pathName = this.pathName.slice(1)
                this.pathName = fatherPath + '/' + this.pathName;
            }
        }
    }

    public withAuthorizationToken(config: {
        seed: boolean,
        deep: boolean,
    } = {
            seed: false,
            deep: false,
        }) {
        this.securitySeed = config.seed;
        this.deepSecuritySeed = config.deep;

        this.security = true;
        return this;
    }

    /**
     * Converts the SwaggerUrlTree instance to a JSON representation.
     * @returns {object} The JSON object for Swagger documentation.
     */
    public toJson() {
        const branches: any = this.branches.reduce((acc, branch) => {
            branch.addFatherPath(this.pathName);
            if (this.tagSeed) {
                branch.withTags(this.tags);
            }
            if (this.securitySeed) {
                branch.withAuthorizationToken({ seed: this.deepSecuritySeed, deep: this.deepSecuritySeed });
            }
            return { ...acc, ...branch.toJson() };
        }, {});

        const leafs = this.leafs.reduce((acc, leaf) => {
            leaf.addFatherPath(this.pathName);
            if (this.security) leaf.enableSecurity();
            leaf.withTags(this.tags);
            return { ...acc, ...leaf.toJson() };
        }, {});

        return {
            ...leafs,
            ...branches
        };

    }

    public static copy(ref: SwaggerPath) {
        // private pathName: string | null = null;
        // private tags: string[] = [];
        // private leafs: SwaggerUrlLeaf[] = [];
        // private branches: SwaggerUrlTree[] = [];

        let copied = new SwaggerPath();

        copied.pathName = ref.pathName;
        copied.leafs = [...ref.leafs];
        ref.branches.forEach(b => {
            copied.branches.push(
                SwaggerPath.copy(b)
            );
        });
        copied.leafs.forEach(l => {
            copied.leafs.push(
                SwaggerEndpoint.copy(l)
            );
        });
        copied.tags = [...ref.tags];

        return copied;
    }
}