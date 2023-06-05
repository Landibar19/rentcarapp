
import { useSelector } from 'react-redux';
import { selectShowModal } from '../../redux/modalSlice';

export const ShowonModal = ({children}) => {

    const showModal = useSelector(selectShowModal)

    if (showModal) {
        return children
    }

  return null
}


