interface ErrorsArray {
  field: string;
  message: string;
}

export interface ErrorsResponse {
  message: string;
  errors?: Array<ErrorsArray>;
}
