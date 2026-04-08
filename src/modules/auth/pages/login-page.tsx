import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/modules/auth/hooks/use-auth';
import { LoginForm } from '@/modules/auth/components/login-form';
import { ROUTES } from '@/common/constants/routes';

export const LoginPage = (): JSX.Element => {
  const navigate = useNavigate();
  const { status, errorMessage, login, clearError, accessToken } = useAuth();

  const handleSubmit = async (payload: { email: string; password: string }): Promise<void> => {
    clearError();
    await login(payload);
    navigate(ROUTES.users);
  };

  return (
    <section className="card stack">
      <h2>Login</h2>
      {accessToken ? <p>You are already authenticated.</p> : null}
      {errorMessage ? <p>{errorMessage}</p> : null}
      <LoginForm isLoading={status === 'loading'} onSubmit={handleSubmit} />
    </section>
  );
};
