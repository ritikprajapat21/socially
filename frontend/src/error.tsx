import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import Button from "./components/Button/Button";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError() as Error;

  if (!isRouteErrorResponse(error)) {
    return null;
  }

  return (
    <main className="error-container">
      <h2>Oops!</h2>
      <p>Sorry, I thing something went wrong.</p>
      <p>{error.statusText || error.message}</p>
      <Button type="button" onClick={() => navigate(-1)}>
        &larr; Go Back
      </Button>
    </main>
  );
};
export default ErrorPage;
