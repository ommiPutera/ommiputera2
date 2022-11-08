import storage from 'local-storage-fallback'
import create from 'zustand'
import {DEFAULT_MODE} from '../defaultVariable'

const localMode = storage.getItem('mode')
const preventMode = localMode ? JSON.parse(localMode) : ''

const useThemeStore = create<{
  themeMode: string
  setThemeMode: (mode: string) => void
}>(set => ({
  themeMode: preventMode || DEFAULT_MODE,
  setThemeMode: mode => set(state => ({themeMode: mode})),
}))

const useNavigation = create<{
  isOpen: boolean
  setIsOpen: (is: boolean) => void
}>(set => ({
  isOpen: false,
  setIsOpen: is => set(state => ({isOpen: is})),
}))

export {useThemeStore, useNavigation}
