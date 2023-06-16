import React from "react";
import Template from "@/components/template";

export default function ({ children })
{
    return(
        <>
            <Template>
                <div className={"row justify-content-center m-auto p-1"}>
                    {children}
                </div>
            </Template>
        </>
    )
}
