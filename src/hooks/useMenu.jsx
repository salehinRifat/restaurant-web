import { useEffect, useState } from "react";

const useMenu = (category) => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("http://localhost:5000/menu")
            .then(res => res.json())
            .then(data => {
                let items = data.filter(item => item.category == category);
                setMenu(items);
                setLoading(false)
            })
    }, [category])

    return [menu, loading]
}
export default useMenu;