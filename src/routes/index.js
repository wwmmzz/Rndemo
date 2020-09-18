import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import DevOptions from '../pages/DevOptions';
import MyHomeSetting from '../pages/MyHome/Setting';
import MyRecommend from '../pages/MyHome/Recommend';
import MyInvoicing from '../pages/MyHome/Invoicing';
import MyNew1 from '../pages/MyHome/Recommend/New1';


export const stackPageData = [
  {
    name: "Home",
    component: Home,
    options: {
      // headerShown: false,
      // header: () => null
    }
  },
  {
    name: "SignIn",
    component: SignIn,
    options: {
      headerShown: false,
      header: () => null
    }
  },
  {
    name: "DevOptions",
    component: DevOptions,
    options: {
      headerShown: false,
      header: () => null
    }
  },
  {
    name: "MyHomeSetting",
    component: MyHomeSetting,
    options: {
      title: '设置',
    }
  },
  {
    name: "MyRecommend",
    component: MyRecommend,
    options: {
      title: '我的熟车',
    }
  },
  {
    name: "MyInvoicing",
    component: MyInvoicing,
    options: {
      title: '企业开票',
    }
  },
  // {
  //   name: "MyNew1",
  //   component: MyNew1,
  //   options: {
  //     title: '新增一',
  //   }
  // },
]