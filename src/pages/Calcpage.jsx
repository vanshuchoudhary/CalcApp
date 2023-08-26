import { Btn } from "../components/Btn";
import { Output } from "../components/Output";
import { useState } from "react";

export const Calcpage=()=>{
  
    const [cal,setCal]=useState("");
     const update=(val)=>{
        if(val==='='){
            let res =  eval(cal);
            setCal(res)
        }

        else if(val=== 'ac')
        {
            let res='';
            setCal(res)
        }

        else if(val=='back')
        {
             let len=cal.length-1;
             setCal(cal.substring(0,len));
        }
        else{
            const st=cal+val;
        // eval(st).toString();
      setCal(st);
        }
     }
    
    return (
        <>
        <div className="container ">
            {/* <div className="border"> */}

        <Output  inputbox={cal}/>
            {/* </div> */}
        <div className="container border text-center">
             <div className="row">
                <div className="col-3">
                    
                    <Btn val='(' fn={update}/>
                    <Btn val=')' fn={update}/>
                    <Btn val='%' fn={update}/>
                    <Btn val='ac' fn={update}/>

                </div>
             </div>

             <div className="row">
                <div className="col-3">
                    
                    <Btn val='7' fn={update} classname="btn btn-outline-info"/>
                    <Btn val='8' fn={update} classname="btn btn-outline-info"/>
                    <Btn val='9' fn={update} classname="btn btn-outline-info"/>
                    <Btn val='+' fn={update} classname="btn btn-outline-info"/>

                </div>
             </div>

             <div className="row">
                <div className="col-3">
                    
                    <Btn val='4' fn={update} classname="btn btn-outline-info"/>
                    <Btn val='5' fn={update} classname="btn btn-outline-info"/>
                    <Btn val='6' fn={update} classname="btn btn-outline-info"/>
                    <Btn val='-' fn={update} classname="btn btn-outline-info"/>

                </div>
             </div>

             <div className="row">
                <div className="col-3">
                    
                    <Btn val='1' fn={update} classname="btn btn-outline-info"/>
                    <Btn val='2' fn={update} classname="btn btn-outline-info"/>
                    <Btn val='3' fn={update} classname="btn btn-outline-info"/>
                    <Btn val='*' fn={update} classname="btn btn-outline-info"/>

                </div>
             </div>

             <div className="row">
                <div className="col-3">
                    
                    <Btn val='0' fn={update}/>
                    <Btn val='.' fn={update}/>
                    <Btn val='=' fn={update}/>
                    <Btn val='/' fn={update}/>

                </div>
             </div>
             <Btn val='back' fn={update} />
           </div>

           </div>
        </>
    )
}