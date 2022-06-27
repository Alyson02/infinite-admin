import { useContext } from "react"
import { DetalheProdutoContext } from ".";

export const useDetalheProduto = () => {
    const context = useContext(DetalheProdutoContext);
    return context
}