import React, { MouseEvent, PropsWithChildren } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';
import { TState } from '../../store/reducer';
import { CityName } from '../../const';
import LocationsItem from '../locations-item';

type LocationsListProps = {
  currentCity: CityName,
  changeCity: (currentCity: CityName) => void
};

function LocationsList(
  { currentCity, changeCity }: PropsWithChildren<LocationsListProps>,
): React.ReactElement {
  const clickHandler = (evt: MouseEvent, cityName: CityName) => {
    evt.preventDefault();
    changeCity(cityName);
  };

  return (
    <ul className="locations__list tabs__list">
      {Object.entries(CityName).map(([key, cityName]) => {
        const activeClass = cityName === currentCity ? 'tabs__item--active ' : '';

        return (
          <li key={key} className="locations__item">
            <LocationsItem
              className={`tabs__item ${activeClass}`}
              cityName={cityName}
              onClick={(evt: MouseEvent) => clickHandler(evt, cityName)}
            />
          </li>
        );
      })}
    </ul>
  );
}

const mapStateToProps = (state: TState) => ({
  currentCity: state.currentCity,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeCity: (cityName: CityName) => {
    dispatch(ActionCreator.changeCity(cityName));
    dispatch(ActionCreator.setOffers(cityName));
  },
});

export { LocationsList };
export default connect(mapStateToProps, mapDispatchToProps)(LocationsList);
