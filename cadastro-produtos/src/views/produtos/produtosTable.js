export default (props) => (
    <table className="table table-hover">
        <thead>
            <tr>
                <th>*</th>
                <th>Nome</th>
                <th>SKU</th>
                <th>Preço</th>
                <th>Fornecedor</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
                props.produtos.map((produto, index) => {
                    return (
                        <tr key="index">
                            <th>{index + 1}</th>
                            <th>{produto.nome}</th>
                            <th>{produto.sku}</th>
                            <th>{produto.preco}</th>
                            <th>{produto.fornecedor}</th>
                            <th>
                                <button onClick={() => props.editarAction(produto.sku)} className="btn btn-primary">Editar</button>
                                <button onClick={() => props.deletarAction(produto.sku)} className="btn btn-danger">Remover</button>
                            </th>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
)