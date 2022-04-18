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

const Home = () => {
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
    </>
  )
}
export default Home
