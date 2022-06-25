import { useContext } from "react"
import { AddProdutoContext } from "."

export const useAddProduto = () => {
    const context = useContext(AddProdutoContext);
    return context
}