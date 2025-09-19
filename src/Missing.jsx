import {Link} from 'react-router-dom'

function Missing(){

    return(
        <main className='Missing'>
            <h2>404 error</h2>
            <p>
                <Link to='/'>Home</Link>
            </p>
        </main>
    )
}

export default Missing