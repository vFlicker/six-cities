import React, { MouseEvent, PropsWithChildren } from 'react';
import { connect } from 'react-redux';

import { CityName } from '../../const';
import { changeCityName } from '../../store/action';
import { fetchOffers } from '../../store/api-actions';
import { NameSpace } from '../../store/root-reducer';
import { TThunkDispatch } from '../../types/action';
import { TRootState } from '../../types/state';

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

const mapStateToProps = (state: TRootState) => ({
  currentCityName: state[NameSpace.APP_PROCESS].currentCityName,
});

const mapDispatchToProps = (dispatch: TThunkDispatch) => ({
  changeCityName: (cityName: CityName) => {
    dispatch(changeCityName(cityName));
    dispatch(fetchOffers());
  },
});

export { LocationsList };
export default connect(mapStateToProps, mapDispatchToProps)(LocationsList);
