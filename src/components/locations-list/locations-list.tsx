import React, { MouseEvent, PropsWithChildren } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AxiosInstance } from 'axios';

import { ActionCreator } from '../../store/action';
import { TState } from '../../store/reducer';
import { CityName } from '../../const';

import LocationsItem from '../locations-item';

import withApiServices from '../../hocs/with-api-services';

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

const mapDispatchToProps = (dispatch: Dispatch, { apiService }: {apiService: AxiosInstance}) => ({
  changeCityName: (cityName: CityName) => {
    dispatch(ActionCreator.changeCityName(cityName));
    ActionCreator.fetchOffers(apiService, dispatch)();
  },
});

export { LocationsList };
export default withApiServices()(
  connect(mapStateToProps, mapDispatchToProps)(LocationsList),
);
