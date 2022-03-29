import { useQuery } from "react-query";
import useCommentContract from "./useCommentsContract";

interface UseCommentsQuery {
    topic: string;
}

const useComments = ({topic}: UseCommentsQuery) => {
    const contract = useCommentContract();
    return useQuery(["comments", {topic, chainId: contract.chainId}], () => contract.getComments(topic))
}

export default useComments;