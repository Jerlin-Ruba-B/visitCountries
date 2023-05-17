import {
  CountryList,
  CountryName,
  Visited,
  VisitButton,
  HorizontalLine,
} from './styledComponents'

const CountriesList = props => {
  const {country, updateIsViewed} = props

  const updateVisited = () => {
    updateIsViewed(country.id)
  }

  return (
    <>
      <CountryList>
        <CountryName>{country.name}</CountryName>
        {country.isVisited ? (
          <Visited>Visited</Visited>
        ) : (
          <VisitButton onClick={updateVisited}>Visit</VisitButton>
        )}
      </CountryList>
      <HorizontalLine />
    </>
  )
}
export default CountriesList
