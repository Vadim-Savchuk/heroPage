import './MiniHeroCard.css'

function MiniHeroCard({img, name, comics}) {

    return (
        <div className='hero-card'>
            <div className='hero-img-offer'>
                <img className='hero-img' src={img} />
            </div>
            <div className='hero-card-info'>
                <h4 className='hero-name'>{name}</h4>
                <p className='comics'>{comics}</p>
            </div>
        </div>
    )
}

export default MiniHeroCard