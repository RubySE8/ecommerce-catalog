interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="message-container message-error">
      <p>Error: {message}</p>
      <p>Por favor, intenta recargar la página.</p>
    </div>
  );
};