/**
 * Pinia Store入口文件
 * @description 创建和导出Pinia实例
 */
import { createPinia } from 'pinia'

const pinia = createPinia()

export default pinia

// 导出各个store
export * from './app'
export * from './user'
export * from './market'
