import React from 'react';
import Link from 'next/link';
import Router from 'next/router';


// const Home = () => {
//   function gotoA() {
//     Router.push('/pageA')
//   }
//   return(
//     <>
//       <div>我是首页</div>
//       <div>
//         <Link href='/pageA'>
//           <a>
//             <span>跳转到A页面</span>
//             <span>next.js</span>
//           </a>
//         </Link>
//       </div>
//       <div><Link href='/pageB'><a>跳转到B页面</a></Link></div>
//       <div><button onClick={gotoA}>A page</button></div>
//     </>
//   )
  
// }
Router.events.on('routeChangeStart', (...args) => {
  console.log('1.routeChangeStart->路由开始变化,参数为：', ...args);
})
Router.events.on('routeChangeComplete', (...args) => {
  console.log('2.routeChangeComplete->路由结束变化,参数为：', ...args);
})
Router.events.on('beforeHistoryChange', (...args) => {
  console.log('3.beforeHistoryChange->在改变浏览器history之前触发,参数为：', ...args);
})
Router.events.on('routeChangeError', (...args) => {
  console.log('4.routeChangeError->跳转发生错误,参数为：', ...args);
})
Router.events.on('hashChangeStart', (...args) => {
  console.log('5.hashChangeStart->hash跳转开始时执行,参数为：', ...args);
})
Router.events.on('hashChangeComplete', (...args) => {
  console.log('6.hashChangeComplete->hash跳转完成时,参数为：', ...args);
})

const Home = () => {
  
  console.log(Router.events, 'event')

  function gotoStudy() {
    Router.push({
      pathname : '/study',
      query : {name : 'pink老师'}
    })
  }
  return (
    <>
      <div>我是首页</div>
      <div>
        <Link href="/study?name=pink老师"><a>pink老师</a></Link><br/>
        <Link href="/study?name=jspang老师"><a>jspang老师</a></Link><br/>
        <Link href={{pathname: '/study', query: {name: 'jspang老师'}}}><a>jspang老师</a></Link>
      </div>
      <div>
        <button onClick={gotoStudy}>pink老师</button>
      </div>
      <div>
        <Link href='#js'><a>学习js</a></Link>
      </div>
    </>
  )
}
export default Home
