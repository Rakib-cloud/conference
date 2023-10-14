import React from 'react'

const Design01 = () => {
    const css = [{div:"bottom-0 left-0",img:""},{div:"top-0 right-0",img:"rotate-180"},{div:"top-0 left-0",img:"rotate-90"},{div:"bottom-0 right-0",img:"rotate-270 scale-x-[-1]"}]
  return (
    <>
        {
          css.map((css,i)=>{
            return <div key={i} className={`absolute w-6 h-6 p-1 ${css.div} `}>
            <img src="https://cdn-icons-png.flaticon.com/512/9040/9040303.png" alt="" className={`w-full h-full ${css.img}  `} />
          </div>
          })
        }
    </>
  )
}

export default Design01