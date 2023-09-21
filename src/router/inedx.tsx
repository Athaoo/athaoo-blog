import React, { lazy, Suspense } from 'react'
import { RouteObject, useRoutes, Navigate, Outlet } from 'react-router-dom'

const ArtPage = lazy(() => import('@src/containers/artPage'))
const ArticlePage = lazy(() => import('@src/containers/articlePage'))
const SceneContainer = lazy(() => import('@src/containers/arts/scenes3d'))
const ArticleList = lazy(() => import('@src/containers/articlePage/list'))
const ArticleDetail = lazy(() => import('@src/containers/articlePage/detail'))
const DnfCustom = lazy(() => import('@src/containers/arts/dnfCustom'))
const RotateBox2 = lazy(() => import('@src/containers/arts/scenes3d/rotateBox2'))
const Hooks1 = lazy(() => import('@src/containers/arts/reactTest/hooks1'))
const TestHooks2 = lazy(() => import('@src/containers/arts/reactTest/testHooks2'))
const VList = lazy(() => import('@src/containers/arts/reactTest/VirTree'))
const IframeTest = lazy(() => import('@src/containers/arts/reactTest/iframeTest'))

export const lazySuspense = (component: React.ReactElement) => {
  return <Suspense fallback={<></>}>{component}</Suspense>
}

export type RoutesItems = {
  path: string
  element: React.ReactElement
  children?: RoutesItems[]
}

const config: RouteObject[] = [
  {
    path: '*',
    element: <Navigate to="/article" />,
  },
  {
    path: '/admin',
    element: <Navigate to="/admin.html" />,
  },
  {
    path: '/article',
    element: lazySuspense(<ArticlePage />),
    children: [
      {
        path: '',
        element: <ArticleList />,
      },
      {
        path: ':id',
        element: <ArticleDetail />,
      },
    ],
  },
  {
    path: '/art',
    element: lazySuspense(<ArtPage />),
    children: [
      {
        path: '',
        element: <Navigate to="3d" />,
      },
      {
        path: '3d',
        element: <SceneContainer />,
        children: [
          {
            path: '',
            element: <Navigate to="rotateBox2" />,
          },
          {
            path: 'rotateBox2',
            element: <RotateBox2 />,
          },
        ],
      },
      {
        path: 'react',
        element: lazySuspense(<Outlet />),
        children: [
          {
            path: '',
            element: <DnfCustom />,
          },
          {
            path: 'dnfCustom',
            element: <DnfCustom />,
          },
          {
            path: 'hooks1',
            element: <Hooks1 />,
          },
          {
            path: 'testHooks2',
            element: <TestHooks2 />,
          },
          {
            path: 'vList',
            element: <VList />,
          },
          {
            path: 'iframeTest',
            element: <IframeTest />,
          },
        ],
      },
    ],
  },
]

const RouterRoot = () => useRoutes(config)

export { RouterRoot, config }
