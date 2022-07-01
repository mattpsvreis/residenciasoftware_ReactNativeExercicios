import React from "react";
import Realm from "realm";

export const CarrinhoContext = React.createContext({});

class ProdutoSchema extends Realm.Object { }

ProdutoSchema.schema = {
    name: 'Produto',
    properties: {
        idProduto: { type: 'int', default: 0 },
        sku: 'string',
        nomeProduto: 'string',
        descricaoProduto: 'string',
        precoProduto: 'double',
        imagemProduto: 'string',
    }
}

let realmCarrinho = new Realm({ schema: [ProdutoSchema], schemaVersion: 1 });

export function CarrinhoProvider({ children }: any) {
    const listProdutos = () => {
        return realmCarrinho.objects('Produto');
    }

    const countProdutos = () => {
        return realmCarrinho.objects('Produto').length;
    }

    const addProduto = (_sku: string, _nome: string, _descricao: string, _preco: number, _imagem: string) => {
        const lastProdutoRegistered = realmCarrinho.objects('Produto').sorted('idProduto', true)[0];

        const lastIdRegistered = lastProdutoRegistered == null ? 0 : lastProdutoRegistered.idProduto;

        const nextId = lastIdRegistered == null ? 1 : lastIdRegistered + 1;

        realmCarrinho.write(() => {
            const produto = realmCarrinho.create('Produto', {
                idProduto: nextId,
                sku: _sku,
                nomeProduto: _nome,
                descricaoProduto: _descricao,
                precoProduto: _preco,
                imagemProduto: _imagem,
            });

            return produto;
        });

        console.log("Lista de Produtos no Carrinho: " + JSON.stringify(listProdutos()));
    }

    const removeProduto = () => {
        return null; //TO-DO
    }

    return (
        <CarrinhoContext.Provider value={{
            listProdutos,
            countProdutos,
            addProduto,
            removeProduto
        }}>
            {children}
        </CarrinhoContext.Provider>
    )
}