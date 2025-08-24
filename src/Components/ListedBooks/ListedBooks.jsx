import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredWishList } from '../../Utility/AddToDd';
import { IoIosArrowDown } from "react-icons/io";
import ReadListBook from '../ReadListBook/ReadListBook';


const ListedBooks = () => {
    const allBooks = useLoaderData();
    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState('');
    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        setReadList(readBookList)
    }, [])
    const [wishList, setWishList] = useState([]);
    useEffect(() => {
        const storedWishList = getStoredWishList();
        const storedWishListInt = storedWishList.map(id => parseInt(id));
        const wishBookList = allBooks.filter(book => storedWishListInt.includes(book.bookId));
        setWishList(wishBookList)
    }, [])

    const handleSort = sortType => {
        setSort(sortType)
        if (sortType === 'No of Pages') {
            const sortedReadList = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedReadList)
        } else {
            const sortedReadList = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sortedReadList)
        }
    }
    return (
        <div>
            <h2 className="text-3xl my-8 py-8 w-full bg-slate-500 rounded-2xl text-center font-bold">Listed Books</h2>
            <div class="dropdown ">
                <div tabindex="0" role="button" class="btn m-1 btn-success mb-14 mx-auto justify-center flex">
                    {
                        sort ? `Sort by : ${sort}` : 'Sort By'
                    }
                    <IoIosArrowDown className='text-xl' /></div>
                <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleSort('Rating')}><a>Rating</a></li>
                    <li onClick={() => handleSort('No of Pages')}><a>No Of Numbers</a></li>
                </ul>
            </div>
            {/* <button className='btn btn-success mb-14 mx-auto block flex'>Sort by <IoIosArrowDown className='text-xl' /></button> */}
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <div>
                        {
                            readList.map((book, idx) => <ReadListBook key={idx} book={book}></ReadListBook>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    {
                        wishList.map((book, idx) => <ReadListBook key={idx} book={book}></ReadListBook>)
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;