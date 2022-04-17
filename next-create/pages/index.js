import React from 'react';
import Link from 'next/link';
import Router from 'next/router'

const Home = () => {
  function gotoA() {
    Router.push('/pageA')
  }
  return(
    <>
      <div>我是首页</div>
      <div>
        <Link href='/pageA'>
          <a>
            <span>跳转到A页面</span>
            <span>next.js</span>
          </a>
        </Link>
      </div>
      <div><Link href='/pageB'><a>跳转到B页面</a></Link></div>
      <div><button onClick={gotoA}>A page</button></div>
    </>
  )
  
}

export default Home
