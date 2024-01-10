
const MenuItem = ({ item }) => {
    const { name, recipe, price, image } = item;
    return (
        <div className="flex gap-4">
            <div>
                <img src={image} alt="" style={{ borderRadius: '0 200px 200px 200px', height: '100px', }} />
            </div>
            <div>
                <h1 className="text-2xl">{name}--------------</h1>
                <p className="text-[#737373]">{recipe}</p>
            </div>
            <p className="text-yellow-600 text-lg">${price}</p>
        </div>
    );
};

export default MenuItem;