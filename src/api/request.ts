/**
 * HTTP请求封装
 * @description 基于axios封装的请求工具，支持拦截器、错误处理等
 */
import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig
} from 'axios'
import { API_BASE_URL, REQUEST_TIMEOUT } from '@/utils/config'
import type { ApiResponse } from '@/types'

/**
 * 创建axios实例
 */
const service: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: REQUEST_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
})

/**
 * 请求拦截器
 */
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 从localStorage获取token
    const token = localStorage.getItem('token')
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    console.error('[Request Error]:', error)
    return Promise.reject(error)
  }
)

/**
 * 响应拦截器
 */
service.interceptors.response.use(
  (response: AxiosResponse<ApiResponse<any>>) => {
    return response
  },
  (error) => {
    console.error('[HTTP Error]:', error.message)
    return Promise.reject(error)
  }
)

/**
 * 通用GET请求
 * @param url - 请求地址
 * @param params - 查询参数
 * @param config - 额外配置
 */
export async function get<T>(
  url: string,
  params?: Record<string, any>,
  config?: AxiosRequestConfig
): Promise<T> {
  const response = await service.get<ApiResponse<T>>(url, { params, ...config })
  return response.data.data
}

/**
 * 通用POST请求
 * @param url - 请求地址
 * @param data - 请求数据
 * @param config - 额外配置
 */
export async function post<T>(
  url: string,
  data?: Record<string, any>,
  config?: AxiosRequestConfig
): Promise<T> {
  const response = await service.post<ApiResponse<T>>(url, data, config)
  return response.data.data
}

/**
 * 通用PUT请求
 * @param url - 请求地址
 * @param data - 请求数据
 * @param config - 额外配置
 */
export async function put<T>(
  url: string,
  data?: Record<string, any>,
  config?: AxiosRequestConfig
): Promise<T> {
  const response = await service.put<ApiResponse<T>>(url, data, config)
  return response.data.data
}

/**
 * 通用DELETE请求
 * @param url - 请求地址
 * @param config - 额外配置
 */
export async function del<T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> {
  const response = await service.delete<ApiResponse<T>>(url, config)
  return response.data.data
}

export default service
