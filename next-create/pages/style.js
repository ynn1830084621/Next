import React, { useState } from 'react'

function Style() {
    const [ color, setColor ] = useState('blue');
    const changeColor = () => {
        setColor(color == 'blue' ? 'red' : 'blue')
    }
    return (
        <>
            <div>用Style JSX编写页面的CSS样式</div>
            <div className='js'>用Style JSX编写页面的CSS样式</div>
            <div><button onClick={changeColor}>改变颜色</button></div>
            <style jsx>
                {`
                    div{color: ${color}}
                    .js{color: red}
                `}

            </style>
        </>
    )
}

export default Style