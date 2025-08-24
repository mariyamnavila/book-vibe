import { toast } from "react-toastify";

const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList
    } else {
        return []
    }
}
const AddToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        console.log(id, 'doood');
    } else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        toast('This book is added to your Read List')

    }
}
const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('Wish-list');
    if (storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList
    } else {
        return []
    }
}
const AddToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if (storedWishList.includes(id)) {
        console.log(id, 'nooo');
    } else {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('Wish-list', storedWishListStr);
        toast('This book is added to your WishList')
    }
}

export { AddToStoredReadList, AddToStoredWishList, getStoredReadList, getStoredWishList }