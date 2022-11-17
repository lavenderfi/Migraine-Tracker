import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import LogIn from './Login'
import Signup from './SignUp'
// import { auth } from '../firebase/auth'
const MigraineRoutes = () => {
    // let dispatch = useDispatch()
    // let user = useSelector((state) => state.user)
    // useEffect(() => {
    //   auth.onAuthStateChanged((user) => {
    //     if (user) {
    //       dispatch(setUser())
    //     }
    //   })
    // }, [])
    return (
        <Routes>
        <Route exact path='/login' element={<LogIn />} />
        <Route exact path='/signup' element={<Signup/>} />
        <Route exact path='/' element={<Home/>} />
    </Routes>
    )
    
}
export default MigraineRoutes