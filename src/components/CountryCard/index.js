import {
  ListCard,
  CountryImg,
  Description,
  Name,
  RemoveBtn,
} from './styledComponents'

const CountryCard = props => {
  const {card, updateIsViewed} = props

  const updateRemove = () => {
    updateIsViewed(card.id)
  }

  return (
    <ListCard>
      <CountryImg src={card.imageUrl} alt="thumbnail" />
      <Description>
        <Name>{card.name}</Name>
        <RemoveBtn onClick={updateRemove}>Remove</RemoveBtn>
      </Description>
    </ListCard>
  )
}
export default CountryCard
