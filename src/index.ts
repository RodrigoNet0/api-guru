import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class ApiClient {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string, headers: Record<string, string> = {}) {
    this.axiosInstance = axios.create({
      baseURL,
      headers,
    });
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>("get", url, null, config);
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>("post", url, data, config);
  }

  async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>("put", url, data, config);
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>("delete", url, null, config);
  }

  private async request<T>(
    method: "get" | "post" | "put" | "delete",
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.request({
        method,
        url,
        data,
        ...config,
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || "Erro na requisição");
    }
  }
}
