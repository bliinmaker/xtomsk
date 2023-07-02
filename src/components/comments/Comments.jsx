import { Link } from 'react-router-dom'

import './Comment.scss'

export const Comments = () => (
    <div className='comments-container'>
        <h1>Коментарии</h1>
        <div className='create-comment'>
            <form action=''>
                <h3>
                    <input placeholder='Ваше имя' type='text'></input>
                </h3>
                <textarea placeholder='Ваш отзыв' rows={2}></textarea>
                <div className='wrap-send'>
                    <div className='img'>
                        <Link>
                            <img src='../../../dist/assets/link.svg' />
                        </Link>
                    </div>
                    <button type='submit'>Отправить</button>
                </div>
            </form>
        </div>
        <div className='comments'>
            <h3>Kinozemts</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cum
                molestiae, reiciendis commodi cumque est doloremque illo vel
                repellendus nam, quod nemo magni temporibus adipisci necessitatibus
                esse tenetur saepe ratione.
            </p>
        </div>
    </div>
)