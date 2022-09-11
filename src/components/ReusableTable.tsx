import React from 'react'
const ReusableTable = (props: any) => {
    return (
        <>
            <div>ReusableTable</div>
            <div>
                {
                    props.data.map((data: any) => {
                        return props.tableKeys.map((dataKeys: any) => {
                            let x = data;
                            dataKeys.path.map((keysArray: any, index: any) => {
                                x = x[dataKeys.path[index]]
                            })
                            return x;
                        })
                    })
                }
            </div>
        </>
    )
}

export default ReusableTable;