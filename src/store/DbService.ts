import Item from "@/models/Item";
import {collection, getDocs, getDoc, setDoc, doc, query, where,} from "firebase/firestore";
import {db} from "@/main";
import ItemFilter from "@/models/ItemFilter";
import Tag from "@/models/Tag";

export default class DbService {

    static async getItems(itemFilter: ItemFilter | undefined | null): Promise<Item[]> {
        const itemsRef = collection(db, 'items')
        const q = itemFilter && itemFilter.search && itemFilter.search.length <= 0 ? query(itemsRef, where('Test', '==', 'Test')) : itemsRef;
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => {
            return doc.data() as Item;
        });
    }

    static async getItem(id: string): Promise<Item> {
        const itemRef = doc(db, 'items', id);
        const dataDocumentSnapshot = await getDoc(itemRef);
        return dataDocumentSnapshot.data() as Item;
    }

    static async createItem(item?: Item): Promise<Item | void> {
        if (!item) return Promise.reject('No item');
        const itemsRef = doc(collection(db, 'items'));
        await setDoc(itemsRef, item).then(
            () => {
                return item;
            }
        ).catch(error => {
            throw error;
        });
    }

    static async getTags(): Promise<Tag[]> {
        const tagsRef = collection(db, 'tags');
        const querySnapshot = await getDocs(tagsRef);
        return querySnapshot.docs.map(doc => {
            return doc.data() as Tag;
        });
    }

    static async createTag(tag?: Tag): Promise<Tag | void> {
        if (!tag) return Promise.reject('No tag');
        const tagsRef = doc(collection(db, 'tags'));
        await setDoc(tagsRef, tag as Tag).then(
            () => {
                return tag;
            }
        ).catch(error => {
            throw error;
        });
    }
}