import ShopCard from "./ShopCard"

export default function CardsView({cards}) {
    return (
        <div className="goods-card-wrapper">
            {cards.map(card => <ShopCard card={card}/>)}
        </div>
    )
}