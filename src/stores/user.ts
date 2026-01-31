/**
 * 用户状态Store
 * @description 管理用户登录状态和信息
 */
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { UserInfo } from '@/types'
import { userLogin, userRegister, getUserInfo } from '@/api'

export const useUserStore = defineStore('user', () => {
  // ============================================
  // 状态
  // ============================================

  /** 用户Token */
  const token = ref<string | null>(localStorage.getItem('token'))

  /** 用户信息 */
  const userInfo = ref<UserInfo | null>(null)

  // ============================================
  // 计算属性
  // ============================================

  /** 是否已登录 */
  const isLoggedIn = computed(() => !!token.value)

  // ============================================
  // 方法
  // ============================================

  /**
   * 用户登录
   * @param email - 邮箱
   * @param password - 密码
   */
  async function login(email: string, password: string) {
    try {
      const result = await userLogin({ email, password })
      token.value = result.token
      userInfo.value = result.userInfo
      localStorage.setItem('token', result.token)
      return true
    } catch (error) {
      console.error('Login failed:', error)
      return false
    }
  }

  /**
   * 用户注册
   * @param email - 邮箱
   * @param password - 密码
   * @param username - 用户名
   */
  async function register(email: string, password: string, username: string) {
    try {
      await userRegister({ email, password, username })
      return true
    } catch (error) {
      console.error('Register failed:', error)
      return false
    }
  }

  /**
   * 获取用户信息
   */
  async function fetchUserInfo() {
    if (!token.value) return
    try {
      userInfo.value = await getUserInfo()
    } catch (error) {
      console.error('Fetch user info failed:', error)
    }
  }

  /**
   * 退出登录
   */
  function logout() {
    token.value = null
    userInfo.value = null
    localStorage.removeItem('token')
  }

  return {
    token,
    userInfo,
    isLoggedIn,
    login,
    register,
    fetchUserInfo,
    logout,
  }
})
