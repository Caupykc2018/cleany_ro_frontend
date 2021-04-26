class FetchError extends Error {
  status: number;

  constructor({ status = 0, message = '' }) {
    super(message);
    this.status = status;
  }
}

export default FetchError;
