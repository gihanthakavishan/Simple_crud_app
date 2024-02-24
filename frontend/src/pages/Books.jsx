import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Await, Link } from 'react-router-dom';

const Books = () => {
    const [books,setBooks] = useState([]);

    useEffect(()=>{
        // since this is an api call ut needs to use async function , to make the api call using react app we i the axios 
      const fetAllBooks = async ()=>{
        try{
           const res = await axios.get("http://localhost:8800/books");
           setBooks(res.data);
        }catch(err){
            console.log(err);
        }

      }
      fetAllBooks();
    },[]);

    const handleDelete = async (id) =>{
        try {
            await axios.delete("http://localhost:8800/books/"+id);
            window.location.reload();
        } catch (err) {
           console.log(err); 
        }
    }
  return (
    <div>
        <h1>Wisdom Books</h1>
        <div className="books">
            {books.map(book=>(
                <div className="book" key={book.id}>
                    {book.cover && <img src={book.cover} alt=''></img>}
                     <h2>{book.title}</h2>
                     <p>{book.desc}</p>
                     <span>{book.price}</span>
                     <button className='delete' onClick={()=>handleDelete(book.id)}>Delete</button>
                     <button className='update'>Update</button>
                 </div>

            ))}
        </div>
        <button className='add'><Link to="/add">Add New Book</Link></button>
    </div>
  );
};

export default Books;