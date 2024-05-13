export default function ShopCard({card}) {
    return <div className="goods-card-container">
        <h4 className="goods-name">{card.name}</h4>
        <span className="goods-color">{card.color}</span>
        <img className="goods-card-img" src={card.img} alt={card.name}></img>
        <div className="buy-card-container">
            <span className="goods-price">{'$' + card.price}</span>
            <button className="goods-add">ADD TO CARD</button>
        </div>
    </div>
}