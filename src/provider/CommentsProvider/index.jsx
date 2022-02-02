import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import { api } from "../../services/api";
import { useAuth } from "../AuthContext";

const CommentsContext = createContext({})

const useComments = () => {
    const context = useContext(CommentsContext);

    if (!context) {
        throw new Error("usePhrases must be used within an CommentsProvider");
    }
    return context
}

const CommentsProvider = ({children}) => {

    const {user, accessToken} = useAuth()
    const [myComments, setMyComments] = useState([])

    useEffect(() => {
        getMyComments()
    }, [])

    const getMyComments = useCallback(async () => {
        try{
        const response = await api.get(
            `comments?userId=${user.id}&_expand=phrase`
            )
            setMyComments(response)
        }
        catch (err) {
        console.log(err);
    }
    }, [])

    

    const deleteMyComments = (commentId) => {
        api.delete(`comments/${commentId}`, {
            headers: {
                authorization: `Bearer ${accessToken}`
            }
        }).then((_) => {getMyComments()})
    }    

    const UpdateComment = (commentId, value, onClose) => {
        api.patch(`comments/${commentId}`, value, {
            headers: {
                authorization: `Bearer ${accessToken}`
            }
        }).then((_) => {getMyComments()}).then(onClose)
    }

    return (
        <CommentsContext.Provider
            value={{
                myComments, 
                deleteMyComments,
                UpdateComment
            }}
        >
            {children}
        </CommentsContext.Provider>
    )
}

export {useComments, CommentsProvider}