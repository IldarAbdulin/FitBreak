import Layout from '../components/Layout';
import Timer from '../components/timer/Timer';
import {
  LandingPage,
  PageBuy,
  PageNutritio,
  PageProLanding,
  PageProfile,
  PageProfileNotifications,
  PageProfileStatistics,
  PageCategory,
} from '../pages';
import ExerPage from '../pages/ExerPage/ExerPage';
import { InfoExercises } from '../pages/InfoExercises/InfoExercises';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

import { links } from './links';

export const authRoutes = [];

export const outRoutes = [
  {
    path: '/register',
    element: <RegisterPage />,
    isAuthRoute: true,
  },
  {
    path: '/login',
    element: <LoginPage />,
    isAuthRoute: true,
  },
];

const test = {
  name: 'Глаз',
  cons: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius est ducimus praesentium quibusdam unde doloribus excepturi illum facilis eligendi, fuga harum perferendis ratione aliquid ab qui nemo ipsum similique ',
};
export const publicRoutes = [
  {
    children: [
      {
        path: `/categories`,
        element: <PageCategory />,
      },
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/InfoExercises',
        element: <InfoExercises />,
      },
      {
        path: `/timer`,
        element: <Timer />,
      },
      {
        path: `/ex`,
        element: <ExerPage test={test} />,
      },
      {
        path: `/buyPro`,
        element: <PageBuy />,
      },
      {
        path: `/profile`,
        element: <PageProfile />,
      },
      {
        path: `/notifications`,
        element: <PageProfileNotifications />,
      },
      {
        path: `/statistics`,
        element: <PageProfileStatistics />,
      },
      {
        path: '/pro',
        element: <PageProLanding />,
      },
      {
        path: `/nutritio/:id`,
        element: <PageNutritio />,
      },
    ],
  },
];
