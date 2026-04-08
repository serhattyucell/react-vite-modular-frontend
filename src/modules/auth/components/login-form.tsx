import { useState, type FormEvent } from 'react';
import type { LoginRequest } from '@/modules/auth/interfaces/login-request.interface';
import { Button } from '@/common/components/ui/button';

interface LoginFormProps {
  isLoading: boolean;
  onSubmit: (payload: LoginRequest) => Promise<void>;
}

export const LoginForm = ({ isLoading, onSubmit }: LoginFormProps): JSX.Element => {
  const [formState, setFormState] = useState<LoginRequest>({
    email: 'admin@example.com',
    password: 'password',
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    await onSubmit(formState);
  };

  return (
    <form className="stack" onSubmit={handleSubmit}>
      <label className="stack">
        <span>Email</span>
        <input
          className="input"
          name="email"
          type="email"
          value={formState.email}
          onChange={(event) => setFormState((prev) => ({ ...prev, email: event.target.value }))}
          required
        />
      </label>
      <label className="stack">
        <span>Password</span>
        <input
          className="input"
          name="password"
          type="password"
          value={formState.password}
          onChange={(event) => setFormState((prev) => ({ ...prev, password: event.target.value }))}
          required
        />
      </label>
      <Button disabled={isLoading} type="submit">
        {isLoading ? 'Signing in...' : 'Sign in'}
      </Button>
    </form>
  );
};
