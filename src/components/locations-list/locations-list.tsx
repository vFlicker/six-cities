import React, { MouseEvent, PropsWithChildren } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';
import { TState } from '../../store/reducer';
import { CityName } from '../../const';
import LocationsItem from '../locations-item';

type LocationsListProps = {
  currentCityName: CityName,
  changeCityName: (currentCityName: CityName) => void
};

function LocationsList(
  { currentCityName, changeCityName }: PropsWithChildren<LocationsListProps>,
): React.ReactElement {
  const clickHandler = (evt: MouseEvent, cityName: CityName) => {
    evt.preventDefault();
    changeCityName(cityName);
  };

  return (
    <ul className="locations__list tabs__list">
      {Object.entries(CityName).map(([key, cityName]) => {
        const activeClass = cityName === currentCityName ? 'tabs__item--active ' : '';

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
  currentCityName: state.currentCityName,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeCityName: (cityName: CityName) => {
    dispatch(ActionCreator.changeCityName(cityName));
    dispatch(ActionCreator.setOffers());
  },
});

export { LocationsList };
export default connect(mapStateToProps, mapDispatchToProps)(LocationsList);
