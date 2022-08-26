import GroupRole from "@/models/GroupRole";

export default class Member {
    id: string;
    name?: string;
    role?: GroupRole;
    email?: string;
    phone?: string;
    constructor(id: string, name?: string, role?: GroupRole, email?: string, phone?: string) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.email = email;
        this.phone = phone;
    }

    toFirebase() {
        return {
            name: this.name,
            role: this.role,
            email: this.email,
            phone: this.phone
        }
    }
}