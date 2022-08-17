import Attribute from "@/models/Attribute";


export default class ItemFilter{
    public id: string | undefined | null;
    public title: Attribute | undefined | null;
    public description: Attribute | undefined | null;
    public attributes: Attribute[] | undefined | null;
    public search: string | undefined | null;
    public sort: string | undefined | null;
    public sortDirection: string | undefined | null;
    public page: number | undefined | null;
    public pageSize: number | undefined | null;

    constructor(id?: string | undefined | null, title?: Attribute | undefined | null, description?: Attribute | undefined | null, attributes?: Attribute[] | undefined | null, search?: string | undefined | null, sort?: string | undefined | null, sortDirection?: string | undefined | null, page?: number | undefined | null, pageSize?: number | undefined | null) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.attributes = attributes;
        this.search = search;
        this.sort = sort;
        this.sortDirection = sortDirection;
        this.page = page;
        this.pageSize = pageSize;
    }
}