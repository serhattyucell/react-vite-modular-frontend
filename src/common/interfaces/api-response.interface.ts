export interface ApiResponse<TData> {
  data: TData;
  message: string;
  statusCode: number;
}
