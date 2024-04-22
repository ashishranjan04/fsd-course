import React, { useState } from 'react';
import axios from 'axios';

function NewPost() {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const handleAdd = () => {
        axios.post('http://localhost:5000/add', { title: title, text: text })
            .then(result => {
                location.reload();
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='post-section'>
            <input type="text" placeholder='Enter Title' value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder='Enter Text' value={text} onChange={(e) => setText(e.target.value)} />
            <button type="button" onClick={handleAdd}>Post</button>
        </div>
    );
}

export default NewPost;