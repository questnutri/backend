import SwaggerUrlLeaf from "./SwaggerUrlLeaf";

/**
 * Class representing a Swagger URL tree, used to structure API endpoints hierarchically.
 */
export default class SwaggerUrlTree {
    private pathName: string | null = null;
    private tags: string[] = [];
    private leafs: SwaggerUrlLeaf[] = [];
    private branches: SwaggerUrlTree[] = [];


    private constructor() { }

    /**
     * Creates a new instance of SwaggerUrlTree using the builder pattern.
     * @returns {SwaggerUrlTree} A new instance of SwaggerUrlTree.
     */
    public static builder() {
        return new SwaggerUrlTree();
    }

    /**
     * Sets the base path for the URL tree.
     * @param {string} path - The base path of the API.
     * @returns {SwaggerUrlTree} The updated instance.
     */
    public setPath(path: string) {
        this.pathName = path;
        return this;
    }

    /**
     * Adds tags to the URL tree.
     * @param {string[]} tags - An array of tags.
     * @returns {SwaggerUrlTree} The updated instance.
     */
    public addTags(tags: string[]) {
        this.tags.push(...tags);
        return this;
    }

    /**
     * Adds multiple leaf nodes to the URL tree.
     * @param {SwaggerUrlLeaf[]} paths - An array of SwaggerUrlLeaf instances.
     * @returns {SwaggerUrlTree} The updated instance.
     */
    public addLeaves(paths: SwaggerUrlLeaf[]) {
        paths.forEach(p => {
            this.leafs.push(SwaggerUrlLeaf.copy(p));
        })
        return this;
    }

    /**
     * Adds a single leaf node to the URL tree.
     * @param {SwaggerUrlLeaf} path - A SwaggerUrlLeaf instance.
     * @returns {SwaggerUrlTree} The updated instance.
     */
    public addLeaf(path: SwaggerUrlLeaf) {
        this.leafs.push(SwaggerUrlLeaf.copy(path));
        return this;
    }

    /**
     * Adds multiple branches (subtrees) to the URL tree.
     * @param {SwaggerUrlTree[]} trees - An array of SwaggerUrlTree instances.
     * @returns {SwaggerUrlTree} The updated instance.
     */
    public addBranches(trees: SwaggerUrlTree[]) {
        trees.forEach(t => {
            this.branches.push(SwaggerUrlTree.copy(t));
        })
        return this;
    }

    /**
     * Adds a single branch (subtree) to the URL tree.
     * @param {SwaggerUrlTree} tree - A SwaggerUrlTree instance.
     * @returns {SwaggerUrlTree} The updated instance.
     */
    public addBranch(tree: SwaggerUrlTree) {
        this.branches.push(SwaggerUrlTree.copy(tree))
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

    /**
     * Converts the SwaggerUrlTree instance to a JSON representation.
     * @returns {object} The JSON object for Swagger documentation.
     */
    public toJson() {
        const branches: any = this.branches.reduce((acc, branch) => {
            branch.addFatherPath(this.pathName)
            branch.addTags(this.tags);
            return { ...acc, ...branch.toJson() };
        }, {});

        const leafs = this.leafs.reduce((acc, leaf) => {
            leaf.addFatherPath(this.pathName);
            leaf.addTags(this.tags);
            return { ...acc, ...leaf.toJson() };
        }, {});

        return {
            ...leafs,
            ...branches
        };

    }

    public static copy(ref: SwaggerUrlTree) {
        // private pathName: string | null = null;
        // private tags: string[] = [];
        // private leafs: SwaggerUrlLeaf[] = [];
        // private branches: SwaggerUrlTree[] = [];

        let copied = new SwaggerUrlTree();

        copied.pathName = ref.pathName;
        copied.leafs = [...ref.leafs];
        ref.branches.forEach(b => {
            copied.branches.push(
                SwaggerUrlTree.copy(b)
            );
        });
        copied.leafs.forEach(l => {
            copied.leafs.push(
                SwaggerUrlLeaf.copy(l)
            );
        });

        return copied;
    }
}