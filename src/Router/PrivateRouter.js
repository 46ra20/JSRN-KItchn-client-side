import { useContext } from 'react';
import { Navigate, useLocation} from 'react-router-dom';
import Loading from '../Components/Loading/Loading';
import { AuthProvider } from '../UserContext/UserContext';

const PrivateRouter = ({children}) => {
    const {userData,loading} = useContext(AuthProvider)
    const location = useLocation()

    if(loading){
        return <Loading/>
    }
    if(userData){
        return children
    }
    return <Navigate to={'/login'} state={{from:location}} replace={true}></Navigate>
};

export default PrivateRouter;