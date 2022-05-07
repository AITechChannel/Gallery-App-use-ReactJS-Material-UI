import { useState, useReducer, useEffect, useRef } from 'react';

import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function Content() {
    const [post, setPost] = useState([]);
    const [page, setPage] = useState(1);
    const [color, setColor] = useState('red');
    console.log(color);
    console.log(post);
    useEffect(() => {
        try {
            async function fetchData() {
                const api = `https://js-post-api.herokuapp.com/api/posts?_limit=1&_page=${page}`;
                const response = await fetch(api);
                const data = await response.json();
                setPost(data.data);
            }
            fetchData();
        } catch (error) {
            console.log('Error', error.message);
        }
        console.log('render');
    }, [page]);
    const handleChange = (event, value) => {
        setPage(value);
        setColor('blue');
    };
    useEffect(() => {
        const showBtnElement = document.querySelectorAll('.btn--show');
        showBtnElement.forEach((item) => {
            item.classList.add('hidden');
        });
    }, []);
    return (
        <div className="container">
            {post.map((item) => (
                <div>
                    <h1 className={'title ' + color} key={item.id}>
                        {item.title}
                    </h1>
                    {console.log('ok')}
                    <img className="img" src={item.imageUrl} alt="Vui lòng chờ, đang load" />
                </div>
            ))}
            <Stack spacing={2}>
                <Pagination size="large" count={10} color="primary" page={page} onChange={handleChange} />
            </Stack>
        </div>
    );
}

export default Content;
