import Item from "@/models/Item";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "@/main";

export default class DbService{

    static async getItems(itemFilter: string): Promise<Item[]>{
        const itemsRef = collection(db, 'items')
        const q = query(itemsRef, where('Test', '==', 'Test'));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => {
            return doc.data() as Item;
        });
    }
}