import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthProvider } from '../UserContext/UserContext';

const PrivateRouter = ({children}) => {
    const {userData} = useContext(AuthProvider)
    const navigate = useNavigate()
    if(!userData){
        return navigate('/login')
    }
    return children
};

export default PrivateRouter;