import React from 'react'
import {
    LinkProps,Link,useMatch,useResolvedPath
} from 'react-router-dom'


const CustomLink:React.FC<LinkProps> = ({ children, to}) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        className={"min-w-[4rem] flex flex-col items-center justify-center flex-shrink-0 outline-none focus:outline-none "}
        style={{
          color:`${match ? "#00ad4e":"#212121"}`
        }}
        to={to}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink