interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem', color: 'red' }}>
      <p>Error: {message}</p>
      <p>Por favor, intenta recargar la página.</p>
    </div>
  );
};