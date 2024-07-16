// import {
//   ADMIN_DASHBOARD, SIGN_IN_ROUTE,
// } from '../constants/routePathConstants';
// import { useNavigate } from "react-router-dom";
// import { Button } from "react-bootstrap";
import { BigButton } from '../common';
import { usePageTitle } from '../hooks/usePageTitle';
// import { useUserContext } from '../contexts/UserContext';

export default function NotFound(props) {
  // const { currentUser } = useUserContext();
  // const navigate = useNavigate();
  const Component = props?.as || 'h1';
  usePageTitle(props?.pageTitle || 'Page Not Found');

  const goBack = () => {
    // if(currentUser) {
    //   navigate(ADMIN_DASHBOARD);
    //   return;
    // }
    // navigate(SIGN_IN_ROUTE);
  }

  return (
    <div className={`d-flex justify-content-center align-items-center flex-column h-100 ${props?.className}`}>
      <Component className="m-3" >{props?.message || 'Page Not Found'}</Component>
        {
          props?.hideButton
          ? null
          : (
            <BigButton 
              // variant="warning"
              className="bigButton lf-btn-1"
              onClick={goBack}
              buttonTitle="Go back"
            />
          )
        }
    </div>
  );
}
