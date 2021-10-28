import React, { MouseEvent, PropsWithChildren } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';
import { TState } from '../../store/reducer';
import { CityName } from '../../types';
import LocationsItem from '../locations-item';

type LocationsListProps = {
  activeCity: CityName,
  changeCity: (name: CityName) => void
};

const cities: CityName[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

function LocationsList(
  { activeCity, changeCity }: PropsWithChildren<LocationsListProps>,
): React.ReactElement {
  const clickHandler = (evt: MouseEvent, city: CityName) => {
    evt.preventDefault();
    changeCity(city);
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => {
        const activeClass = city === activeCity ? 'tabs__item--active ' : '';

        return (
          <li key={city} className="locations__item">
            <LocationsItem
              className={`tabs__item ${activeClass}`}
              city={city}
              onClick={(evt: MouseEvent) => clickHandler(evt, city)}
            />
          </li>
        );
      })}
    </ul>
  );
}

const mapStateToProps = (state: TState) => ({
  activeCity: state.city,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeCity: (name: CityName) => {
    dispatch(ActionCreator.changeCity(name));
    dispatch(ActionCreator.setOffers(name));
  },
});

export { LocationsList };
export default connect(mapStateToProps, mapDispatchToProps)(LocationsList);
