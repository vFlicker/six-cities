import React, { MouseEvent, PropsWithChildren } from 'react';
import { connect } from 'react-redux';

import { changeCityName } from '../../store/action';
import { fetchOffers, TDispatch } from '../../store/api-actions';
import { TState } from '../../store/reducer';
import { CityName } from '../../const';

import LocationsItem from '../locations-item';

type LocationsListProps = {
  currentCityName: CityName,
  changeCityName: (currentCityName: CityName) => void
};

function LocationsList(props: PropsWithChildren<LocationsListProps>): React.ReactElement {
  const { currentCityName, changeCityName } = props;

  const handleLocationsItemClick = (evt: MouseEvent, cityName: CityName) => {
    evt.preventDefault();

    if (cityName === currentCityName) {
      return;
    }

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
              onLocationsItemClick={(evt: MouseEvent) => handleLocationsItemClick(evt, cityName)}
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

const mapDispatchToProps = (dispatch: TDispatch) => ({
  changeCityName: (cityName: CityName) => {
    dispatch(changeCityName(cityName));
    dispatch(fetchOffers());
  },
});

export { LocationsList };
export default connect(mapStateToProps, mapDispatchToProps)(LocationsList);
