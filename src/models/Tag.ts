export default interface Tag {
    id: string;
    text?: string;
    toFirebase(): { id: string, text?: string };
}