import React, {
  ComponentType,
  PropsWithChildren,
  ReactElement,
  useContext
} from 'react';
import ApiService from '../services/api-service';
import { ApiServiceContext } from '../components/api-service-context';

interface WithApiServicesProps {
  apiService: ApiService,
}

const withApiServices = () => <P, >(
  WrapperComponent: ComponentType<P>,
): ComponentType<Omit<P, keyof WithApiServicesProps>> => {
  type componentProps = Omit<P, keyof WithApiServicesProps>

  function WithApiServices(props: PropsWithChildren<componentProps>): ReactElement {
    const apiService = useContext(ApiServiceContext);

    return (
      <WrapperComponent
        {...props as P}
        apiService={apiService}
      />
    );
  }

  return WithApiServices;
};

export default withApiServices;
