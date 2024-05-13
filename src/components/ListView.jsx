import ShopItem from "./ShopItem";

export default function ListView({items}) {
    return (
        <div className="goods-wrapper">
            {items.map(item => <ShopItem item={item}/>)}
        </div>
    )
}