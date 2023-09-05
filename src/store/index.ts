import { configureStore } from '@reduxjs/toolkit'
import { RotateBoxSceneState } from './rotateBoxScene/types'
import { Pcd1SceneState } from './pcd1Scene/types'
export interface RootState {
  rotateBoxScene: RotateBoxSceneState
  pcd1Scene: Pcd1SceneState
}

export const store = configureStore({
  reducer: {},
})

export default store
