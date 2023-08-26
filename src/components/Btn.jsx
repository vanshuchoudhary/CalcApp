export const Btn=({val,fn,classname})=>{
    const clicked=()=>{
        fn(val);
    }

    const classes=`${classname} me-2 mt-2`;

    return(
        <>
          <button className={classes} onClick={clicked}>{val}</button> 
        </>
    )
}