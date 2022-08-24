import GroupRole from "@/models/GroupRole";

export default interface Member {
    id: string;
    name: string;
    role: GroupRole;
}