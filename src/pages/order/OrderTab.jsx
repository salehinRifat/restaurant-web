const OrderTab = ({ items }) => {
    const { image, name, recipe } = items
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h2 className="text-2xl font-bold text-center">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderTab;