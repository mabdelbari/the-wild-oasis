import styled from "styled-components";

import Spinner from "./Spinner";

import { useUser } from "../features/authentication/useUser";
import { Navigate } from "react-router-dom";

const FullPage = styled.div`
  min-height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  // 1. Load the authenticated User
  const { isLoading, isAuth } = useUser();

  // 2. While loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 3. if there is no authenticated user, redirect to login
  if (!isAuth && !isLoading) return <Navigate to={"/login"} />;

  // 4. If there is a user, render the app
  if (isAuth) return children;
}

export default ProtectedRoute;
