

const ItemDetail = ({ item, loading, addItem }) => {

    if (loading) {
        return <h2 className="text-center mt-3">Cargando informacion del producto...</h2>
    }

    if (!item) {
        return <h2 className="text-center mt-3 text-danger">No tenemos ese producto</h2>
    }

    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="card mt-4" style={{ maxWidth: "550px", maxHeight: "550px" }}>
                <img src={`../../../public/${item.imageid}`} className="card-img-top img-fluid h-50 p-1" alt={item.title} />
                <h1 className="card-title text-center mt-1">{item.title}</h1>
                <span className="card-text text-start ms-3 mt-1 mb-1 fw-bold">${item.price}</span>
                <p className="card-text text-center fw-bold mt-2 mb-2">{item.description}</p>
                <button onClick={() => addItem(item, 1)} className="btn btn-success w-50 m-auto mb-1">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemDetail